import React from 'react';
import s from './TopCars.module.css'

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
            <tbody>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                </tr>
            </tbody>
            {props.topCars.map((el, index) => {
                return (
                    <tbody key={el.id} className={s.tbody}>
                        <tr>
                            <th>{el.manufacturer}</th>
                            <td>{el.model}</td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    )
}


export default TopCars;