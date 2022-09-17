import React from 'react';

type HeaderPropsType = {
    header: string
}

const Header = (props: HeaderPropsType) => {
    return (
        <div>
            {props.header}
        </div>
    );
};

export default Header;