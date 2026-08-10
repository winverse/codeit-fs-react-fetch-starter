import styles from './PostList.module.css';
import { Spinner } from '@/components/Spinner';
import { PostCard } from '@/pages/Home/PostCard';
import { Pagination } from '@/components/Pagination';

export function PostList({
  posts,
  isLoading,
  error,
  currentPage,
  totalPages,
  goToPage,
  handleDelete,
  handleUpdate,
}) {
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>에러: {error}</div>;
  }

  return (
    <div className={styles.postListContainer}>
      <ul>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </div>
  );
}
