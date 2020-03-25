import { Router } from 'express';

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

    // -- DELETE
    .get((_, res) => {
      res.json(null);
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
