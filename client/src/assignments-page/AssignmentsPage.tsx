import { Header } from 'semantic-ui-react';
import Page from '../shared-ui/Page/Page';
import AssignmentList from './components/AssignmentList/AssignmentList';

function AssignmentsPage() {
  return (
    <Page>
      <Header>Assignments</Header>

      <AssignmentList />
    </Page>
  );
}

export default AssignmentsPage;
