# PayPay Fullstack Challenge

by Thirafi Dide (`jurnaldide@gmail.com`)

## Run

This project use `yarn` for managing the monorepo.

```bash

# install dependencies
yarn

# run dev for server and client
yarn dev
```

Server by default would run at port `8000` and client will run at `3000`. You can also run the dev individually by using yarn workspace or running the script at their respective folders

```bash

#run server only
yarn workspace server dev

# or
cd server
yarn dev
```

## Assumptions

- Use case breakdown can be seen at `/docs/TODO.md`
- User can have role either as Employee or Admin. Admin role is treated as Employee with admin previlages
- User submit performance review to other user/employee by submitting score (1-5) and written feedback

## Project structure

This repo are monorepo that contains client and server sources. Server files and folders structured based on Entities Driven Design
