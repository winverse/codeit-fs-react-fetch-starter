import styles from './Pagination.module.css';

export function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <nav className={styles.pagination} aria-label="게시물 페이지">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          onClick={() => onPageChange(pageNumber)}
          className={currentPage === pageNumber ? styles.active : undefined}
          aria-current={currentPage === pageNumber ? 'page' : undefined}
        >
          {pageNumber}
        </button>
      ))}
    </nav>
  );
}
