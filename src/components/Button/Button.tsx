import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

    const onclickBtnHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onclickBtnHandler}>
            {props.name}
        </button>
    );
};