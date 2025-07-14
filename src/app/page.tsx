import { Grid } from './components/grid/Grid';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.page}>
      <Grid />
    </main>
  );
}
