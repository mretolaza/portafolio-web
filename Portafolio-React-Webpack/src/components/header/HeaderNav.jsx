import React from 'react';
import '../../css/HeaderNav';

export default class HeaderNav extends React.Component {
    render() {
        return (
            <ul id='headernav' className='header-nav'>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#this_is_me">This is Me</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#experiences">Experiences</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#skills">Skills</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#">Contact</a>
                </li>
            </ul>
        );
    }
}

