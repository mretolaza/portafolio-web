import React from 'react';
import HeaderNav from './HeaderNav';
import '../../css/HeaderText';

export default class HeaderText extends React.Component {
    render() {
        return (
            <header id='navbar' className='header'>
                <div id='headercontent' className='header-content'>
                    <div className='header-content-left'>
                        <div className='header-content-left-in'>
                            <div className="MR-div">
                                <p>MMR</p>
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