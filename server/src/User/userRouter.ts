import { Router } from 'express';
import User from './User';

//
// -- API Router
//

export function createUserRouter() {
  const userRouter = Router();

  userRouter
    .route('/user')

    // -- CREATE
    .post((_, res) => {
      res.json(null);
    })

    // -- READ
    .get((_, res) => {
      User.findAll().then(users => res.json({ users }));
      // res.json(null);
    })

    // -- UPDATE
    .patch((_, res) => {
      res.json(null);
    })

    // -- DELETE
    .delete((_, res) => {
      res.json(null);
    });

  return userRouter;
}
