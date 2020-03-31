import React, { useEffect } from 'react';
import UserList from '../components/UserList/UserList';
import { getUserList, deleteUser } from '../../app-services/UserService';
import {
  useUserListPageStateSelector,
  useUserListPageStateDispatch,
} from '../states/UserListPageState';

function UserListContainer() {
  const pageState = useUserListPageStateSelector(state => state.state);
  const users = useUserListPageStateSelector(state => state.users);

  const dispatch = useUserListPageStateDispatch();

  const fetchUserList = () => {
    dispatch({ type: 'FETCH_LIST' });

    getUserList()
      .then(data => dispatch({ type: 'SUCCESS_FETCH_LIST', users: data.users }))
      .catch(error =>
        dispatch({ type: 'FAILED_FETCH_LIST', message: error.message })
      );
  };

  const onDeleteUser = (id: string) => {
    deleteUser(id).then(() => fetchUserList());
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <UserList
      loading={pageState === 'LOADING'}
      failedFetch={pageState === 'FAILED_FETCH_LIST'}
      users={users || []}
      onReload={fetchUserList}
      onDelete={onDeleteUser}
    />
  );
}

export default UserListContainer;
