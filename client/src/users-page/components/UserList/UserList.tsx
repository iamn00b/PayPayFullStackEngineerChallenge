import {
  Table,
  Button,
  Popup,
  Segment,
  Header,
  Icon,
  Placeholder,
} from 'semantic-ui-react';
import Link from 'next/link';
import { UserModel } from '../../../app-models/UserModel';

type UserListProps = {
  loading?: boolean;
  failedFetch?: boolean;
  users: UserModel[];
  onReload(): void;
};

function UserList(props: UserListProps) {
  const { loading, users, failedFetch, onReload } = props;

  const createUserButton = (
    <Link href="/users/create">
      <Button primary>Create User</Button>
    </Link>
  );

  if (failedFetch) {
    return (
      <Segment placeholder>
        <Header icon>
          <Icon name="cogs" />
          Failed to fetch user list
        </Header>
        <Button primary onClick={onReload}>
          Reload
        </Button>
      </Segment>
    );
  }

  if (!loading && users.length <= 0) {
    return (
      <Segment placeholder>
        <Header icon>
          <Icon name="user x" />
          No user currently registered
        </Header>
        {createUserButton}
      </Segment>
    );
  }

  return (
    <>
      <Link href="/users/create">{createUserButton}</Link>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell collapsing>User ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>E-Mail</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {loading && (
            <>
              <LoadingRow />
              <LoadingRow />
              <LoadingRow />
            </>
          )}

          {!loading &&
            users.map(user => (
              <Table.Row key={user.id}>
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

function LoadingRow() {
  return (
    <Table.Row>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
    </Table.Row>
  );
}
