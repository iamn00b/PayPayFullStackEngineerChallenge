//
// -- TYPE
//

export interface UserModel {
  name: string;
  email: string;
  role: 'EMPLOYEE' | 'ADMIN';
  title: string;
}
