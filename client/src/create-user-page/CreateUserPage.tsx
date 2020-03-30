import { Header } from 'semantic-ui-react';
import Page from '../shared-ui/Page/Page';
import CreateUserForm from './components/CreateUserForm/CreateUserForm';

function CreatUserPage() {
  return (
    <Page>
      <Header as="h2">Create new user</Header>

      <CreateUserForm />
    </Page>
  );
}

export default CreatUserPage;
