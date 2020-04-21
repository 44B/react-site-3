import React from 'react';

const Header = (props) => (
    <div className="header">
        <h1>{props.title}</h1>
        <h2 className="header__subtitle">{props.subTitle}</h2>
    </div>
); 

Header.defaultProps = {
    title: 'Indecision'
};

export default Header;