# TODO List

## Use Case

### User - Generic

- [ ] Login
- [ ] Logout

### User - Employee

- [ ] See list of performance review
  - [ ] Hide the list until all user writes all performance review to assigned user
- [ ] See list of assigned peer review
- [ ] Submit performance review

### User - Admin

- [ ] See list of users
- [ ] Add new user
- [ ] Delete user
- [ ] Update user
- [ ] See list of performance reviews
- [ ] Delete performance reviews
- [ ] Update performance reviews
- [ ] See list of performance review assignment
- [ ] Add new performance review assignment

## Server

### Design

- [x] Database design

### Development Environment

- [x] Express
- [x] Typescript
- [ ] PostgreSQL
- [ ] Sequelize
  - [ ] Database migration

### Database

- [ ] Users Table
- [ ] PerformanceReviews Table
- [ ] Assignments Table

### API

- [ ] GET /api/user
- [ ] PATCH /api/user/:id
- [ ] DELETE /api/user/:id
- [ ] POST /api/user/:id

- [ ] GET /api/performance-review
- [ ] PATCH /api/performance-review/:id
- [ ] DELETE /api/performance-review/:id
- [ ] POST /api/performance-review

- [ ] GET /api/assignments
- [ ] PATCH /api/assignments/:id
- [ ] DELETE /api/assignments/:id
- [ ] POST /api/assignments

- [ ] POST /api/login
- [ ] POST /api/logout
