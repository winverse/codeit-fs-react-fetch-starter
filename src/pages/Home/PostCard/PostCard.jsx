import { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import styles from './PostCard.module.css';

export function PostCard({ post, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedBody, setEditedBody] = useState(post.body);

  const handleSaveClick = async () => {
    await onUpdate(post.id, editedTitle, editedBody);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedTitle(post.title);
    setEditedBody(post.body);
  };

  return (
    <li className={styles.postCard}>
      {isEditing ? (
        <div className={styles.editForm}>
          <input
            type="text"
            aria-label="게시물 제목"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            aria-label="게시물 내용"
            value={editedBody}
            onChange={(e) => setEditedBody(e.target.value)}
          ></textarea>
          <div className={styles.formActions}>
            <button
              type="button"
              onClick={handleSaveClick}
              className={styles.saveButton}
            >
              저장
            </button>
            <button
              type="button"
              onClick={handleCancelClick}
              className={styles.cancelButton}
            >
              취소
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          {(onUpdate || onDelete) && (
            <div className={styles.actions}>
              {onUpdate && (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className={styles.editButton}
                  aria-label="수정"
                >
                  <FaPencilAlt aria-hidden="true" />
                </button>
              )}
              {onDelete && (
                <button
                  type="button"
                  onClick={() => onDelete(post.id)}
                  className={styles.deleteButton}
                  aria-label="삭제"
                >
                  <FaTrash aria-hidden="true" />
                </button>
              )}
            </div>
          )}
        </>
      )}
    </li>
  );
}
