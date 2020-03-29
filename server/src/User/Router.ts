import { Router, Request, Response } from 'express';
import User from '../User';

//
// -- API Router
//

export function createUserRouter() {
  const userRouter = Router();

  // -- COLLECTION
  userRouter
    .route('/user')

    // Create
    .post(handleCreateUserRequest)
    // Read (list)
    .get(handleReadAllUserRequest);

  // -- MEMBER
  userRouter
    .route('/user/:id')

    // Read (one)
    .get(handleReadOneUserRequest)
    // Update
    .patch(handleUpdateUserRequest)
    // Delete
    .delete(handleDeleteUserRequest);

  return userRouter;
}

//
// -- API Implementation
//

// -- CREATE

interface CreateUserRequestBody {
  name: string;
  email: string;
}

function handleCreateUserRequest(req: Request, res: Response) {
  const { name, email } = <CreateUserRequestBody>req.body;

  if (!name || !email) {
    res.status(422).json({ message: 'Invalid JSON shape' });
  }

  User.create({ name, email }).then(user => {
    res.json({ user });
  });
}

// -- READ ONE

function handleReadOneUserRequest(req: Request, res: Response) {
  const id = req.params.id as string;

  User.findOne({ where: { id } }).then(user => res.json({ user }));
}

// -- READ LIST

function handleReadAllUserRequest(_req: Request, res: Response) {
  User.findAll().then(users => res.json({ users }));
}

// -- UPDATE

interface UpdateUserRequestBody {
  name?: string;
  email?: string;
}

function handleUpdateUserRequest(req: Request, res: Response) {
  const id = req.params.id as string;
  const { name, email } = <UpdateUserRequestBody>req.body;

  if (!name && !email) {
    res.status(422).json({ message: 'Invalid JSON shape' });
  }

  User.update({ name, email }, { where: { id } }).then(user => {
    res.json({ user });
  });
}

// -- DELETE

function handleDeleteUserRequest(req: Request, res: Response) {
  const id = req.params.id as string;

  User.destroy({ where: { id } }).then(user => {
    res.json({ user });
  });
}
