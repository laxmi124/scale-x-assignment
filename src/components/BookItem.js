import React, { useState } from 'react';
import './styles.css';

function BookItem({ book, setReadBook }) {
  const { cover_id, title, author_names, first_publish_year } = book?.work;
  const [read, setRead] = useState(book.read);
  const [readStatus, setReadStatus] = useState(book.readStatus); // New state for read status

  const toggleReadStatus = () => {
    const updatedReadStatus = !readStatus;
    setRead(!read);
    setReadStatus(updatedReadStatus); // Update read status state
    setReadBook({ ...book, readStatus: updatedReadStatus }); // Pass updated read status to parent component
    // Here you can also make an API call to update the read status on the server
  };

  return (
    <div className='bookItemCover'>
      <img
        src={`https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`}
        alt="Book Cover"
      />
      <div style={{fontWeight:"bold"}}>{title}</div>
      <div>Author: {author_names}</div>
      <div>Published Year: {first_publish_year}</div>
      <button
        className='readButton'
        style={{
          backgroundColor: read ? '#42e242' : 'transparent',
          border: read ? 'none' : '1px solid black',
          color: read ? 'white' : 'black',
        }}
        onClick={toggleReadStatus}
      >
        {read ? 'Read' : 'Unread'}
      </button>
    </div>
  );
}

export default BookItem;
