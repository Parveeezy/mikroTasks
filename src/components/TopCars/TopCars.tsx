import React from 'react';
import {tab} from "@testing-library/user-event/dist/tab";

type arrTypeFromTopCars = {
    id: number
    manufacturer: string
    model: string
}

type TopCarsPropsType = {
    topCars: arrTypeFromTopCars[]
}

const TopCars = (props: TopCarsPropsType) => {
    return (
        <table>
            {props.topCars.map((el, index) => {
                return (
                    <tbody key={el.id}>
                        <tr>
                            <th>Brand</th>
                            <th>{el.manufacturer}</th>
                        </tr>
                        <tr>
                            <td>{el.model}</td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
                )
            }


            export default TopCars;