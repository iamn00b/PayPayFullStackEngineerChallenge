# TODO List

## Use Case

### User - Generic

- [ ] Login
  - [ ] **API:** POST /api/login
- [ ] Logout
  - [ ] **API:** GET /api/logout

### User - Employee

- [ ] See list of performance review
  - [ ] **API:** GET /api/user/:userId/performance-review
- [ ] Hide the list until all user writes all performance review to assigned user
  - [ ] **API:** GET /api/user/:userId/unfinished-assignment
- [ ] See list of assigned peer review
  - [ ] **API:** GET /api/user/:userId/assignment
- [ ] Submit performance review
  - [x] **API:** POST /api/performance-review ({ userId, assignmentId })

### User - Admin

- [x] See list of users
  - [x] **API:** GET /api/user
- [x] Add new user
  - [x] **API:** POST /api/user
- [x] Delete user
  - [x] **API:** DELETE /api/user/:userId
- [ ] Update user
  - [x] **API:** PATCH /api/user/:userId
- [ ] See list of performance reviews
  - [x] **API:** GET /api/performance-review
- [ ] Delete performance reviews
  - [x] **API:** DELETE /api/performance-review/:perRevId
- [ ] Update performance reviews
  - [x] **API:** PATCH /api/performance-review/:perRevId
- [ ] See list of performance review assignment
  - [x] **API:** GET /api/assignment/
- [ ] Add new performance review assignment
  - [x] **API:** POST /api/assignment/
