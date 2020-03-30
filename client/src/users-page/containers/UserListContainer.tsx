import React, { useEffect } from 'react';
import UserList from '../components/UserList/UserList';
import { getUserList } from '../services/UserService';

function UserListContainer() {
  useEffect(() => {
    getUserList().then(x => console.log(x));
  }, []);

  return <UserList />;
}

export default UserListContainer;
