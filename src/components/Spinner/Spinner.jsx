import styles from './Spinner.module.css';

export function Spinner() {
  return (
    <div
      className={styles.spinnerContainer}
      role="status"
      aria-label="게시물을 불러오는 중"
    >
      <div className={styles.spinner} aria-hidden="true"></div>
    </div>
  );
}
