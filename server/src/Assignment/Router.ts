import { Router, Request, Response } from 'express';
import Assignment from '../Assignment';
import User from '../User';

//
// -- API Router
//

export function createAssignmentRouter() {
  const assignmentRouter = Router();

  // -- COLLECTION
  assignmentRouter
    .route('/assignment')

    // Create
    .post(handleCreateAssignmentRequest)
    // Read (list)
    .get(handleReadAllAssignmentRequest);

  return assignmentRouter;
}

//
// -- API Implementation
//

type CreateAssignmentRequestBody = {
  userId: string;
  assignToUserId: string;
};

function handleCreateAssignmentRequest(req: Request, res: Response) {
  const { userId, assignToUserId } = <CreateAssignmentRequestBody>req.body;

  if (userId === assignToUserId) {
    res.status(400).json({ message: "Can't assign to to same user" });
  }

  Promise.all([
    User.findOne({ where: { id: userId } }),
    User.findOne({ where: { id: assignToUserId } }),
  ])
    .then(([user, assignToUser]) => {
      if (!user || !assignToUser) {
        res.status(400).json({ message: 'Invalid user' });
        res.end();
      }

      return Assignment.findOne({ where: { userId, assignToUserId } });
    })
    .then(assignment => {
      if (assignment) {
        res.status(400).json({ message: 'Duplicate assignment' });
        res.end();
      }

      return Assignment.create({ userId, assignToUserId });
    })
    .then(assignment => res.json({ assignment }));
}

function handleReadAllAssignmentRequest(_req: Request, res: Response) {
  Assignment.findAll().then(assignments => res.json({ assignments }));
}
