import React from 'react';
import { Parallax } from 'react-parallax';
import HeaderText from './header/HeaderText';
import ThisIsMe from './main/ThisIsMe';
import Experiences from './main/Experiences';
import Zoom from 'react-reveal/Zoom';
import Skills from './main/Skills';
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
                    bgImage={require('../images/skyme.JPG')}
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
