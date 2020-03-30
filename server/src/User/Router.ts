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
  name: User['name'];
  email: User['email'];
  role: User['role'];
  title: User['title'];
}

function handleCreateUserRequest(req: Request, res: Response) {
  const { name, email, role, title } = <CreateUserRequestBody>req.body;

  if (!name || !email || !role || !title) {
    res.status(422).json({ message: 'Invalid JSON shape' });
  }

  User.create({ name, email, role, title }).then(user => {
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
  name?: User['name'];
  email?: User['email'];
  role?: User['role'];
  title?: User['title'];
}

function handleUpdateUserRequest(req: Request, res: Response) {
  const id = req.params.id as string;
  const { name, email, role, title } = <UpdateUserRequestBody>req.body;

  if (!name && !email && !role && !title) {
    res.status(422).json({ message: 'Invalid JSON shape' });
  }

  User.update({ name, email, role, title }, { where: { id } }).then(user => {
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
