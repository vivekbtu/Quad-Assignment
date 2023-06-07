
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowList = () => {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchShows = async () => {
            const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
            const data = await response.json();
            setShows(data);
            console.log(data);
        };

        fetchShows();
    }, []);

    const handleShowSelect = (shows) => {
        // setSelectedShow(shows);
        localStorage.setItem('data-id', shows);
        // console.log(shows);
    };

    return (
        <>
            <h1>Show List</h1>
            <div className='data-img'>
                {shows.map((data) => (
                    <div key={data.show.id}>
                        <div>
                            <h2>{data.show.name}</h2>
                            <img src={data.show.image.medium} alt='movieimage' />
                        </div>
                        <div>
                            <p>Rating:-{data.show.rating.average}</p>
                            <p>Genres:-{data.show.genres}</p>
                        </div>
                        <Link to={"/summary"}>
                            <button onClick={() => handleShowSelect(data.show.id)}>View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ShowList;
