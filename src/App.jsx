import styles from '@/pages/Home/HomeLayout/HomeLayout.module.css';

function App() {
  return (
    <main className={styles.HomePage}>
      <h1>게시물 앱</h1>
      <p className={styles.introText}>API 데이터 연동 실습을 시작합니다.</p>
    </main>
  );
}

export default App;
