import React from 'react';

const List = (props) => {
    return (
        <ul>
            {
                props.notes.map((item, index) =>
                    <li key={index}>
                        {item}
                    </li>
                )
            }
        </ul>
    )
}

export default List;