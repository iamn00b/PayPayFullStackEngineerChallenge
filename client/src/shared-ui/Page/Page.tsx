import { ReactNode } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Menu, Segment } from 'semantic-ui-react';

import styles from './Page.module.css';

type PageProps = {
  hideNav?: boolean;
  children: ReactNode;
};

function Page(props: PageProps) {
  const { hideNav, children } = props;
  const router = useRouter();
  const currentActivePage = router.pathname.split('/')[1];

  return (
    <>
      {!hideNav && (
        <Segment className={styles.menu}>
          <Container>
            <Menu secondary>
              <Link href="/">
                <Menu.Item name="Home" active={currentActivePage === ''} />
              </Link>
              <Link href="/performance-reviews">
                <Menu.Item
                  name="Performance Reviews"
                  active={currentActivePage === 'performance-reviews'}
                />
              </Link>
              <Link href="/assignments">
                <Menu.Item
                  name="Assignments"
                  active={currentActivePage === 'assignments'}
                />
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
