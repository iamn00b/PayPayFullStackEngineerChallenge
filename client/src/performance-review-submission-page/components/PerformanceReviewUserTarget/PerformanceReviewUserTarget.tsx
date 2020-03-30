import { Segment, Header, Grid } from 'semantic-ui-react';

function PerformanceReviewUserTarget() {
  return (
    <Segment>
      <Header as="h3">Feedback for</Header>
      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width={1}>Name</Grid.Column>
          <Grid.Column width={5}>
            <strong>Employee 2</strong>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>Role</Grid.Column>
          <Grid.Column width={5}>
            <strong>Frontend Engineer - Product A Team</strong>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default PerformanceReviewUserTarget;
