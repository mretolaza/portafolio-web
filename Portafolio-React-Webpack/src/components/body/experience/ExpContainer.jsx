import React from 'react';
import { Row, Col } from 'reactstrap';
import '../../../css/experience/Experiences';

export default class Experiences extends React.Component {
    constructor(props) {
        super(props)
        this.Name = props.Name;
        this.Date = props.Date;
        this.Acknowledgment = props.Acknowledgment;
        this.Description = props.Description;
        this.src = props.src;
    }

    render() {
        return (
            <section>
                <div className='div1-modexp'>
                    <Row className='row-exp'>
                        <Col xs="4" className='Fst-col'>
                            <p className='edu-name p-color'>{this.Name}</p>
                            <p className='p-normal p-color'>{this.Date}</p>
                            <div className='div-image-exp'>
                                <img className='image-exp' src={this.src} alt='img'></img>
                            </div>
                        </Col>
                        <Col xs="6" className='Snd-col'>
                            <p className='edu-ack p-color'>{this.Acknowledgment}</p>
                            <p className='p-normal p-color'>{this.Description}</p>
                        </Col>
                    </Row>
                </div>
            </section>

        );
    }
}