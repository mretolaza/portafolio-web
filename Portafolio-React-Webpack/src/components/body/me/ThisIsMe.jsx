import React from 'react';
import { Row, Col } from 'reactstrap';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/ThisIsMe';

const Me = require('../../../img/assets/mm.jpeg');

export default class ThisIsMe extends React.Component {
    constructor() {
        super();
        this.state = { show: false };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ show: true });
        }, 1000);
    }

    render() {
        return (
            <section>
                <div id="this_is_me" className='div1-am'>
                    <div className='div-title'><h3 className='title-am'>This is Me</h3></div>
                    <Row className='row'>
                        <Col className='column-left'>
                            <Slide left>
                                <div className='column-div'>
                                    <h4 className='h4-am'>Name: </h4>
                                    <p className='p-am'>María Mercedes Retolaza Reyna </p>
                                    <h4 className='h4-am'>Age: </h4>
                                    <p className='p-am'>22 </p>
                                    <h4 className='h4-am'>Location: </h4>
                                    <p className='p-am'>Guatemala City, Guatemala </p>
                                    <h4 className='h4-am'>Number: </h4>
                                    <p className='p-am'>+502 4300-0805</p>
                                </div>
                            </Slide>
                        </Col>
                        <Col className='column-center'>
                            <Zoom>
                                <div className='div-image'>
                                    <img src={Me} className='image-me' alt="me" />
                                </div>
                            </Zoom>
                        </Col >
                        <Col className='column-right'>
                            <Slide right>
                                <div className='column-div-2'>
                                    <p className='p-am-des'>I&lsquo;m currently studying Computing Science Engeeniring
                                    at <a className='anchor-am' href='https://www.uvg.edu.gt/'>Universidad del Valle de Guatemala</a>. I love being the team leader, always make new things and
                                        I like to learn of my job partners and my classmates. I hope to be analyst and I work for this.  I like to do everything right and have a process that supports it. I am perfectionist.
                                    I&lsquo;m proud <a className='anchor-am' href='https://www.rotary.org/es/get-involved/rotaract-clubs/details'>Rotaractor</a>.
                                    </p>
                                </div>
                            </Slide>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}