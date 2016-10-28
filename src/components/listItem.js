import React from 'react';

let List = ({ item }) => {
    console.log('listItem', item);
    return (
        <div className="list-item">
            <figure>
                <img src={item.thumbnail} alt="" />
            </figure>
            <h1> {item.title} </h1>
            <p> {item.source} </p>
            <a href="#" className="list-cover" />
        </div>
    )
}

export default List;
