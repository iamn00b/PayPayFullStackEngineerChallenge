import Page from '../shared-ui/Page/Page';
import { Header } from 'semantic-ui-react';
import UserListContainer from './containers/UserListContainer';
import { Provider } from 'react-redux';
import { StoreUserListPageState } from './states/UserListPageState';

function UsersPage() {
  return (
    <Provider store={StoreUserListPageState}>
      <Page>
        <Header as="h2">Users</Header>

        <UserListContainer />
      </Page>
    </Provider>
  );
}

export default UsersPage;
