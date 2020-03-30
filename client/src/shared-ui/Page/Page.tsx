import { ReactNode } from 'react';
import cx from 'classnames';
import Link from 'next/link';
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
              <Link href="/">
                <Menu.Item name="Home" active />
              </Link>
              <Link href="/performance-reviews">
                <Menu.Item name="Performance Reviews" />
              </Link>
              <Link href="/assignments">
                <Menu.Item name="Assignments" />
              </Link>

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
