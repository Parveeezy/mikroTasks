import React from 'react';

type FooterPropsType = {
    footer: string
}

const Footer = (props: FooterPropsType) => {
    return (
        <div>
            {props.footer}
        </div>
    );
};

export default Footer;