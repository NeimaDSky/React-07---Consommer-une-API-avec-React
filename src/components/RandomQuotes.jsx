import React from 'react';

function RandomQuotes ({ simpsonsQuotes }) {
    return (
        <div className="RandomQuotes">
            <img
            src={simpsonsQuotes.image}
            alt={simpsonsQuotes.image}
            />
            <ul>
                <li>Name: {simpsonsQuotes.character}{' '}</li>
                <li>Quote: {simpsonsQuotes.quote}{' '}</li>
            </ul>
        </div>
    );
};
export default RandomQuotes;