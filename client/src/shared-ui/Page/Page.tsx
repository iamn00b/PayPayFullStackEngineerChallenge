import { ReactNode } from 'react';
import cx from 'classnames';
import { Container, Menu, Segment } from 'semantic-ui-react';

import styles from './Page.module.css';

type PageProps = {
  hideNav?: boolean;
  children: ReactNode;
};

function Page(props: PageProps) {
  const { hideNav, children } = props;

  return (
    <>
      {!hideNav && (
        <Segment className={styles.menu}>
          <Container>
            <Menu secondary>
              <Menu.Item name="Home" active />
              <Menu.Item name="Performance Reviews" />
              <Menu.Item name="Assignments" />

              <Menu.Menu position="right">
                <Menu.Item name="logout" />
              </Menu.Menu>
            </Menu>
          </Container>
        </Segment>
      )}

      <div className={cx(styles.content, hideNav && styles.withoutNav)}>
        <Container>{children}</Container>
      </div>
    </>
  );
}

export default Page;
