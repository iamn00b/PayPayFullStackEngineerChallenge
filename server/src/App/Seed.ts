import User from '../User';

// TODO proper database seeding and migration
export default function Seed() {
  return Promise.all([
    User.create({
      name: 'Employee 1',
      email: 'employee1@example.com',
      role: 'ADMIN',
      title: 'Frontend Engineer',
    }),
    User.create({
      name: 'Employee 2',
      email: 'employee2@example.com',
      role: 'EMPLOYEE',
      title: 'Frontend Engineer',
    }),
    User.create({
      name: 'Employee 3',
      email: 'employee3@example.com',
      role: 'EMPLOYEE',
      title: 'Backend Engineer',
    }),
  ]);
}
