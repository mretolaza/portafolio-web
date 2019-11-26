import React from 'react';
import HeaderNav from './HeaderNav';
import '../../css/Header';

export default class Header extends React.Component {
    render() {
        return (
            <header id='navbar' className='header'>
                <div id='headercontent' className='header-content'>
                    <div className='header-content-left'>
                        <div className='header-content-left-in'>
                            <div className="MR-div">
                                <p>MR</p>
                            </div>
                        </div>
                    </div>
                    <div className='header-content-right'>
                        <HeaderNav />
                    </div>
                </div>
            </header>
        );
    }
}