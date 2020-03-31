import React, { useEffect } from 'react';
import UserList from '../components/UserList/UserList';
import { getUserList } from '../../app-services/UserService';
import {
  useUserListPageStateSelector,
  useUserListPageStateDispatch,
} from '../states/UserListPageState';

function UserListContainer() {
  const pageState = useUserListPageStateSelector(state => state.state);
  const users = useUserListPageStateSelector(state => state.users);

  const dispatch = useUserListPageStateDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_LIST' });

    getUserList()
      .then(data => dispatch({ type: 'SUCCESS_FETCH_LIST', users: data.users }))
      .catch(error =>
        dispatch({ type: 'FAILED_FETCH_LIST', message: error.message })
      );
  }, []);

  return <UserList loading={pageState === 'LOADING'} users={users || []} />;
}

export default UserListContainer;
