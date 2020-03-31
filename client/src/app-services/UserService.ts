import Axios from 'axios';
import { UserModel } from '../app-models/UserModel';

type CreateUserSpec = Omit<UserModel, 'id'>;

export function createUser(user: CreateUserSpec) {
  return Axios.post('http://localhost:8000/api/user', user);
}

type GetUserListResponse = {
  users: UserModel[];
};

export function getUserList() {
  return Axios.get<GetUserListResponse>('http://localhost:8000/api/user').then(
    response => {
      return response.data;
    }
  );
}
