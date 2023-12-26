import React from 'react';

const List = ({description,title}) => {

    return (
            <li>
                <strong>
                    {title}
                </strong>
                <p>
                    {description}
                </p>
            </li>

    );
};

export default List;