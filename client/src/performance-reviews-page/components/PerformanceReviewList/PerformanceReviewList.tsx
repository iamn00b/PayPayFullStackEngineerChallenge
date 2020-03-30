import { Table, Button, Icon, Rating } from 'semantic-ui-react';

function PerformanceReviewList() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Score</Table.HeaderCell>
          <Table.HeaderCell>Feedback</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Rating icon="star" defaultRating={4} maxRating={5} />
          </Table.Cell>
          <Table.Cell>Lorem Ipsum Dolor Sit Amet</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default PerformanceReviewList;
