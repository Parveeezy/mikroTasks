import React from 'react';

type BodyPropsType = {
    body: string
}

const Body = (props: BodyPropsType) => {
    return (
        <div>
            {props.body}
        </div>
    );
};

export default Body;