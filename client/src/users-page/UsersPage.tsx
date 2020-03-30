import Page from '../shared-ui/Page/Page';
import { Header, Button } from 'semantic-ui-react';
import UserList from './components/UserList/UserList';

function UsersPage() {
  return (
    <Page>
      <Header as="h2">Users</Header>

      <Button>Create User</Button>
      <UserList />
    </Page>
  );
}

export default UsersPage;
