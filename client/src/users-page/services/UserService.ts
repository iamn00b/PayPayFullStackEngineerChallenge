import axios from 'axios';

type GetUserListResponse = {
  users: any;
};

export function getUserList() {
  return axios
    .get<GetUserListResponse>('http://localhost:8000/api/user')
    .then(response => {
      return response.data;
    });
}
