import { Header } from 'semantic-ui-react';
import Page from '../shared-ui/Page/Page';
import PerformanceReviewList from './components/PerformanceReviewList/PerformanceReviewList';

function PerformanceReviewsPage() {
  return (
    <Page>
      <Header>Performance Reviews</Header>

      <PerformanceReviewList />
    </Page>
  );
}

export default PerformanceReviewsPage;
