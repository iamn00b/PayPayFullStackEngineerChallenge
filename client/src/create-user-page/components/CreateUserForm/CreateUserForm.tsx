import { Segment, Form, Input, Button } from 'semantic-ui-react';

function CreateUserForm() {
  return (
    <Segment>
      <Form>
        <Form.Field>
          <label>Name</label>
          <Input />
        </Form.Field>
        <Form.Field>
          <label>E-Mail</label>
          <Input />
        </Form.Field>
        <Form.Group inline>
          <label>Role</label>
          <Form.Radio label="Employee" value="employee" checked />
          <Form.Radio label="Admin" value="admin" />
        </Form.Group>
        <Form.Field>
          <label>Title</label>
          <Input />
        </Form.Field>

        <Button type="submit" positive>
          Submit
        </Button>
      </Form>
    </Segment>
  );
}

export default CreateUserForm;
