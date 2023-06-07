
import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import MovieForm from './MovieForm';

const ShowSummary = () => {

const id = JSON.parse(localStorage.getItem('data-id'));
// console.log(id)

  const [show, setShow] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchShow = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
    };

    fetchShow();
  }, [id]);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  return (
    <>
      {show ? (
        <div className='summary'>
          <h1>{show.name}</h1>
          <img src={show.image.medium} alt='movieimage' />
          <p>{show.summary}</p>
          
          <button onClick={handleOpenForm}>Book Movie Ticket</button>
          {showForm && <MovieForm showName={show.name} />}

          {/* <div>
            <a href={show.url}>More Details</a>
          </div> */}
        </div>
      ) : (
        <p>Loading show details...</p>
      )}
    </>
  );
};

export default ShowSummary;

