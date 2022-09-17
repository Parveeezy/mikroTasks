import React from 'react';
import TopCars from "../TopCars/TopCars";

const topCars = [
    {id: 1, manufacturer:'BMW', model:'m5cs'},
    {id: 2, manufacturer:'Mercedes', model:'e63s'},
    {id: 3, manufacturer:'Audi', model:'rs6'}
]

type BodyPropsType = {
    body: string
}

const Body = (props: BodyPropsType) => {
    return (
        <div>
            {props.body}
            <TopCars topCars={topCars}/>
            {props.body}
        </div>
    );
};

export default Body;