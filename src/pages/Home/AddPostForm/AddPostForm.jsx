import { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import styles from './AddPostForm.module.css';

export function AddPostForm({ onAddPost }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const resetForm = () => {
    setTitle('');
    setBody('');
    setIsFormOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await onAddPost({ title, body });
      resetForm();
    } catch {
      // 요청에 실패하면 다시 제출할 수 있도록 입력값을 유지합니다.
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsFormOpen((isOpen) => !isOpen)}
        className={styles.toggleFormButton}
        aria-expanded={isFormOpen}
        aria-controls="add-post-form"
      >
        {isFormOpen ? (
          <FiX aria-hidden="true" />
        ) : (
          <FiPlus aria-hidden="true" />
        )}
        {isFormOpen ? '폼 닫기' : '새 게시물 추가'}
      </button>

      {isFormOpen && (
        <form
          id="add-post-form"
          onSubmit={handleSubmit}
          className={styles.addPostForm}
        >
          <h2>새 게시물 추가</h2>

          <label className={styles.fieldLabel} htmlFor="post-title">
            제목
          </label>
          <input
            id="post-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label className={styles.fieldLabel} htmlFor="post-body">
            내용
          </label>
          <textarea
            id="post-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />

          <div className={styles.formActions}>
            <button type="submit">
              <FiPlus aria-hidden="true" /> 추가
            </button>
            <button type="button" onClick={resetForm}>
              <FiX aria-hidden="true" /> 취소
            </button>
          </div>
        </form>
      )}
    </>
  );
}
