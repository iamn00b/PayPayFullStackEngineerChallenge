import { Segment, Form, Button, Rating, TextArea } from 'semantic-ui-react';

function PerformanceReviewSubmissionForm() {
  return (
    <Segment>
      <Form>
        <Form.Field>
          <label>Score</label>
          <Rating icon="star" defaultRating={4} maxRating={5} size="large" />
        </Form.Field>
        <Form.Field>
          <label>Feedback</label>
          <TextArea value="Lorem Ipsum" />
        </Form.Field>
        <Button type="submit" positive>
          Submit
        </Button>
      </Form>
    </Segment>
  );
}

export default PerformanceReviewSubmissionForm;
