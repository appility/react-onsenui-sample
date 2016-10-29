import React from 'react';

let List = ({ item, clickHandler }) => {

    return (
        <div className="list-item">
            <figure>
                <img src={item.thumbnail} alt="" />
            </figure>
            <h1> {item.title} </h1>
            <p> {item.source} </p>
            <a href="#" className="list-cover" onClick={(e) => {
                e.preventDefault();
                clickHandler({item});
            }} />
        </div>
    )
}

export default List;
