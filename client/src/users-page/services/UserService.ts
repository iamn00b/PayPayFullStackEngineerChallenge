import axios from 'axios';
import { UserModel } from '../../app-models/UserModel';

type GetUserListResponse = {
  users: UserModel[];
};

export function getUserList() {
  return axios
    .get<GetUserListResponse>('http://localhost:8000/api/user')
    .then(response => {
      return response.data;
    });
}
