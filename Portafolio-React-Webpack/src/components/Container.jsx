import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Header from './header/Header';
import AboutMe from './main/AboutMe';
import Phrase from './main/phrase';
import Experiences from './main/Experiences';
import Abilities from './main/Abilities';
import Zoom from 'react-reveal/Zoom';
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
                <Header />
                <Parallax
                    blur={0}
                    bgImage={require('../images/skyme.JPG')}
                    bgImageAlt="Skeme"
                    strength={200}
                >
                    <Zoom>
                        <div className='divv1-cloud' />
                    </Zoom>
                </Parallax>
                <main>
                    <AboutMe />
                    <Phrase />
                    <Experiences />
                    <Abilities />
                </main>
                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={require('../images/skyme.JPG')}
                    bgImageAlt="the dog"
                    strength={-200}
                >
                </Parallax>
            </div>
        );
    }
}
