import { Header } from 'semantic-ui-react';
import { Provider } from 'react-redux';
import Page from '../shared-ui/Page/Page';
import { StoreCreateUserPageState } from './states/CreateUserPageState';
import CreateUserFormContainer from './containers/CreateUserFormContainer';

function CreatUserPage() {
  return (
    <Provider store={StoreCreateUserPageState}>
      <Page>
        <Header as="h2">Create new user</Header>

        <CreateUserFormContainer />
      </Page>
    </Provider>
  );
}

export default CreatUserPage;
