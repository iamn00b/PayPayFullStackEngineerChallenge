import { Table, Button, Icon } from 'semantic-ui-react';

function AssignmentList() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>User</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Employee 1</Table.Cell>
          <Table.Cell collapsing>
            <Icon name="warning" /> Needs Review
          </Table.Cell>
          <Table.Cell collapsing>
            <Button positive>Submit Review</Button>
          </Table.Cell>
        </Table.Row>
        <Table.Row positive>
          <Table.Cell>Employee 2</Table.Cell>
          <Table.Cell collapsing>
            <Icon name="checkmark" /> Review Submitted
          </Table.Cell>
          <Table.Cell collapsing>
            <Button>View Submitted Review</Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default AssignmentList;
