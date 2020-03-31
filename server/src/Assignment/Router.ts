import { Router, Request, Response } from 'express';
import Assignment from '../Assignment';

//
// -- API Router
//

export function createAssignmentRouter() {
  const assignmentRouter = Router();

  // -- COLLECTION
  assignmentRouter
    .route('/performance-review')

    // Create
    .post(handleCreateAssignmentRequest)
    // Read (list)
    .get(handleReadAllAssignmentRequest);

  return assignmentRouter;
}

//
// -- API Implementation
//

function handleCreateAssignmentRequest(req: Request, res: Response) {
  res.json({ res: 'TODO' });
}

function handleReadAllAssignmentRequest(req: Request, res: Response) {
  res.json({ res: 'TODO' });
}
