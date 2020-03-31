import { Table, Button, Popup } from 'semantic-ui-react';
import Link from 'next/link';
import { UserModel } from '../../../app-models/UserModel';

type UserListProps = {
  loading?: boolean;
  users: UserModel[];
};

function UserList(props: UserListProps) {
  const { loading, users } = props;

  if (loading) {
    // TODO Loading state
    return null;
  }

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
          {users.map(user => (
            <Table.Row>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell>{user.title}</Table.Cell>
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
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default UserList;
