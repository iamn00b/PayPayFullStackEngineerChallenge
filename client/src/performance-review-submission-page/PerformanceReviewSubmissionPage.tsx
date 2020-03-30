import { Header } from 'semantic-ui-react';
import Page from '../shared-ui/Page/Page';
import PerformanceReviewSubmissionForm from './components/PerformanceReviewSubmissionForm/PerformanceReviewSubmissionForm';
import PerformanceReviewUserTarget from './components/PerformanceReviewUserTarget/PerformanceReviewUserTarget';

function PerformanceReviewSubmissionPage() {
  return (
    <Page>
      <Header as="h2">Submit Performance Review</Header>

      <PerformanceReviewUserTarget />
      <PerformanceReviewSubmissionForm />
    </Page>
  );
}

export default PerformanceReviewSubmissionPage;
