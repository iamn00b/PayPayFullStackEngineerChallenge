import { Segment, Form, Input, Button } from 'semantic-ui-react';

type CreateUserFormProps = {
  name?: string;
  email?: string;
  role?: 'EMPLOYEE' | 'ADMIN';
  title?: string;

  onChangeName(name: string): void;
  onChangeEmail(email: string): void;
  onChangeRole(role: 'EMPLOYEE' | 'ADMIN'): void;
  onChangeTitle(title: string): void;
};

function CreateUserForm(props: CreateUserFormProps) {
  const {
    name,
    email,
    role,
    title,
    onChangeName,
    onChangeEmail,
    onChangeRole,
    onChangeTitle,
  } = props;

  return (
    <Segment>
      <Form>
        <Form.Field>
          <label>Name</label>
          <Input value={name} onChange={e => onChangeName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>E-Mail</label>
          <Input value={email} onChange={e => onChangeEmail(e.target.value)} />
        </Form.Field>
        <Form.Group inline>
          <label>Role</label>
          <Form.Radio
            label="Employee"
            value="EMPLOYEE"
            checked={role === 'EMPLOYEE'}
            onClick={(_, { value }) => onChangeRole(value as 'EMPLOYEE')}
          />
          <Form.Radio
            label="Admin"
            value="ADMIN"
            checked={role === 'ADMIN'}
            onClick={(_, { value }) => onChangeRole(value as 'ADMIN')}
          />
        </Form.Group>
        <Form.Field>
          <label>Title</label>
          <Input value={title} onChange={e => onChangeTitle(e.target.value)} />
        </Form.Field>

        <Button type="submit" positive>
          Submit
        </Button>
      </Form>
    </Segment>
  );
}

export default CreateUserForm;
