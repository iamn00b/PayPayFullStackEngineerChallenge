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

type CreatePerformanceReviewRequestBody = {
  writerId: PerformanceReview['writerId'];
  assignmentId: Assignment['id'];
};

function handleCreatePerformanceReviewRequest(req: Request, res: Response) {
  const _ = <CreatePerformanceReviewRequestBody>req.body;
  res.json({ res: 'TODO' });
}

function handleReadAllPerformanceReviewRequest(_req: Request, res: Response) {
  res.json({ res: 'TODO' });
}

function handleUpdatePerformanceReviewRequest(req: Request, res: Response) {
  const _id = req.params.id as string;

  res.json({ res: 'TODO' });
}
function handleDeletePerformanceReviewRequest(req: Request, res: Response) {
  const _id = req.params.id as string;

  res.json({ res: 'TODO' });
}
