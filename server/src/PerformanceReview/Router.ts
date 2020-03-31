import { Router, Request, Response } from 'express';
import PerformanceReview from '../PerformanceReview';
import Assignment from '../Assignment';

//
// -- API Router
//

export function createPerformanceReviewRouter() {
  const performanceReviewRouter = Router();

  // -- COLLECTION
  performanceReviewRouter
    .route('/performance-review')

    // Create
    .post(handleCreatePerformanceReviewRequest)
    // Read (list)
    .get(handleReadAllPerformanceReviewRequest);

  // -- MEMBER
  performanceReviewRouter
    .route('/performance-review/:id')

    // Update
    .patch(handleUpdatePerformanceReviewRequest)
    // Delete
    .delete(handleDeletePerformanceReviewRequest);

  return performanceReviewRouter;
}

//
// -- API Implementation
//

// -- CREATE

type CreatePerformanceReviewRequestBody = {
  writerId: PerformanceReview['writerId'];
  assignmentId: Assignment['id'];
  score: PerformanceReview['score'];
  feedback: PerformanceReview['feedback'];
};

function handleCreatePerformanceReviewRequest(req: Request, res: Response) {
  const {
    writerId,
    assignmentId,
    score,
    feedback,
  } = req.body as CreatePerformanceReviewRequestBody;

  if (!writerId || !assignmentId || !score || !feedback) {
    res.status(400).json({ message: 'Invalid performance review submission' });
    res.end();
  }

  Assignment.findByPk(assignmentId)
    .then(assignment => {
      if (!assignment) {
        res.status(400).json({ message: 'Assignment not found' });
        res.end();

        return;
      }

      if (String(assignment.userId) !== String(writerId)) {
        res.status(400).json({ message: 'User-Assignment mismatch' });
        res.end();

        return;
      }

      return PerformanceReview.create({
        writerId: assignment.userId,
        userId: assignment.assignToUserId,
        score,
        feedback,
      });
    })
    .then(performanceReview => res.json({ performanceReview }));
}

// -- READ ALL

function handleReadAllPerformanceReviewRequest(_req: Request, res: Response) {
  PerformanceReview.findAll().then(performanceReviews =>
    res.json({ performanceReviews })
  );
}

// -- UPDATE

type UpdatePerformanceReviewRequestBody = {
  writerId?: PerformanceReview['writerId'];
  userId?: PerformanceReview['userId'];
  score?: PerformanceReview['score'];
  feedback?: PerformanceReview['feedback'];
};

function handleUpdatePerformanceReviewRequest(req: Request, res: Response) {
  const id = req.params.id as string;
  const {
    writerId,
    userId,
    score,
    feedback,
  } = req.body as UpdatePerformanceReviewRequestBody;

  if (!writerId || !userId || !score || !feedback) {
    res.status(400).json({ message: 'No updated fields' });
    res.end();

    return;
  }

  PerformanceReview.update(
    { writerId, userId, score, feedback },
    { where: { id } }
  ).then(performanceReview => {
    res.json({ performanceReview });
  });

  res.json({ res: 'TODO' });
}

// -- DELETE

function handleDeletePerformanceReviewRequest(req: Request, res: Response) {
  const id = req.params.id as string;

  PerformanceReview.destroy({ where: { id } }).then(destroyedId =>
    res.json({ destroyedId })
  );
}
