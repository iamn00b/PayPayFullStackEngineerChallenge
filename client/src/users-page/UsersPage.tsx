import Page from '../shared-ui/Page/Page';
import { Header } from 'semantic-ui-react';
import UserListContainer from './containers/UserListContainer';

function UsersPage() {
  return (
    <Page>
      <Header as="h2">Users</Header>

      <UserListContainer />
    </Page>
  );
}

export default UsersPage;
