import React from 'react';
import SkilssMod from './SkillsPath';
import { Row, Col } from 'reactstrap';
import '../../css/Skills';

export default class Skills extends React.Component {

    render() {
        return (
            <section>
                <div id='skills' className='div1-ab'>
                    <div className='div-title'><h3 className='title-ab'>Skills</h3></div>
                    <div className='div2-ab'>
                        <div ><h4 className='subtitle-ab'>Programming</h4></div>
                        <Row className='row-ab'>
                            <Col xs="6" className='col-ab'>
                                <ul className='ul-ab'>
                                    <SkilssMod skill='Pascal' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#FFB2B1' />
                                    <SkilssMod skill='Python' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#FFB2B1' />
                                    <SkilssMod skill='Java' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#FFB2B1' />
                                    <SkilssMod skill='JavaScript' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#FFB2B1' color6='#FFB2B1' />
                                </ul>
                            </Col>
                            <Col xs="6">
                                <ul className='ul-ab'>
                                    <SkilssMod skill='React' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#FFB2B1' />
                                    <SkilssMod skill='Typescript' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#FFB2B1' />
                                    <SkilssMod skill='Angular JS' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#FFB2B1' color6='#FFB2B1' />
                                    <SkilssMod skill='Webpack' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#FFB2B1' />
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div className='div2-ab'>
                        <div ><h4 className='subtitle-ab'>Management Projects</h4></div>
                        <Row className='row-ab'>
                            <Col xs="6" className='col-ab'>
                                <ul className='ul-ab'>
                                    <SkilssMod skill='SCRUM' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#BB4B9F' />
                                    <SkilssMod skill='Project Manager' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#FFB2B1' color6='#FFB2B1' />
                                    <SkilssMod skill='Lead' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#BB4B9F' />
                                </ul>
                            </Col>
                            <Col xs="6">
                                <ul className='ul-ab'>
                                    <SkilssMod skill='QA-Assurance' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#FFB2B1' />
                                    <SkilssMod skill='TeamWork' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#BB4B9F' />
                                    <SkilssMod skill='Release and Operations' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#FFB2B1' color6='#FFB2B1' />
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div className='div2-ab'>
                        <div ><h4 className='subtitle-ab'>Rotary International</h4></div>
                        <Row className='row-ab'>
                            <Col xs="6" className='col-ab'>
                                <ul className='ul-ab'>
                                    <SkilssMod skill='Lead' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#BB4B9F' />
                                    <SkilssMod skill='Responsable' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#BB4B9F' />
                                </ul>
                            </Col>
                            <Col xs="6">
                                <ul className='ul-ab'>
                                    <SkilssMod skill='Organized' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#BB4B9F' />
                                    <SkilssMod skill='Structured' color1='#BB4B9F' color2='#BB4B9F' color3='#BB4B9F' color4='#BB4B9F' color5='#BB4B9F' color6='#BB4B9F' />
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        );
    }
}