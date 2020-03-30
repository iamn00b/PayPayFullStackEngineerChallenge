import Page from '../shared-ui/Page/Page';
import { Header, Button } from 'semantic-ui-react';
import UserListContainer from './containers/UserListContainer';

function UsersPage() {
  return (
    <Page>
      <Header as="h2">Users</Header>

      <Button>Create User</Button>
      <UserListContainer />
    </Page>
  );
}

export default UsersPage;
