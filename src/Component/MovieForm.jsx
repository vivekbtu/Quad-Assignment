import React, { useState } from 'react';

const MovieForm = ({ showName }) => {
    const [movieName, setMovieName] = useState(showName);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Store user details in local storage
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem("moviename", movieName);

        // Clear form fields
        setName('');
        setEmail('');
    };

    return (
        <>
            <h2>Book {showName} Ticket</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Movie Name:
                    <input disabled={true} type="text" value={showName} onChange={(e) => setMovieName(e.target.value)} />
                </label>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default MovieForm;
