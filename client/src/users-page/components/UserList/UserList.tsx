import { Table, Button, Popup } from 'semantic-ui-react';
import Link from 'next/link';

function UserList() {
  return (
    <>
      <Link href="/users/create">
        <Button>Create User</Button>
      </Link>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>E-Mail</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>112</Table.Cell>
            <Table.Cell>Employee 1</Table.Cell>
            <Table.Cell>employee1@example.com</Table.Cell>
            <Table.Cell>EMPLOYEE</Table.Cell>
            <Table.Cell>Frontend Engineer - Integration Team</Table.Cell>
            <Table.Cell collapsing>
              <Popup
                content="Update user information"
                position="bottom right"
                trigger={<Button primary icon={{ name: 'write' }} />}
              />
              <Popup
                content="Delete user"
                position="bottom right"
                trigger={<Button negative icon={{ name: 'trash' }} />}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default UserList;
