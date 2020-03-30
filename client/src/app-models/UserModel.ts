//
// -- TYPE
//

export interface UserModel {
  id: string;
  name: string;
  email: string;
  role: 'EMPLOYEE' | 'ADMIN';
  title: string;
}
