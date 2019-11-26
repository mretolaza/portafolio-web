import React from 'react';
import { Parallax } from 'react-parallax';
import HeaderText from './header/HeaderText';
import ThisIsMe from './body/me/ThisIsMe';
import Experiences from './body/experience/Experiences';
import Zoom from 'react-reveal/Zoom';
import Skills from './body/skills/Skills';
import '../css/global';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ show: true });
        }, 200);
    }

    handleScroll() {
        let header = document.getElementById('headercontent');
        let windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop <= 350) {
            header.classList.remove('bgColor');
        } else {
            header.classList.add('bgColor');
        }
    }

    render() {
        window.addEventListener('scroll', this.handleScroll);
        return (
            <div>
                <HeaderText />
                <Parallax
                    blur={0}
                    bgImage={require('../img/assets/rtc.JPG')}
                    bgImageAlt="Rotaract"
                    strength={200}
                >
                    <Zoom>
                        <div className='divv1-cloud' />
                    </Zoom>
                </Parallax>
                <main>
                    <ThisIsMe />
                    <Experiences />
                    <Skills />
                </main>
            </div>
        );
    }
}
