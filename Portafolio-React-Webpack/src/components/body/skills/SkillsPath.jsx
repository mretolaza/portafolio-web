import React from 'react';
import '../../../css/skills/Skills';

export default class AbilitiesModule extends React.Component {
    constructor(props) {
        super(props)
        this.skill = props.skill;
        this.color1 = props.color1;
        this.color2 = props.color2;
        this.color3 = props.color3;
        this.color4 = props.color4;
        this.color5 = props.color5;
        this.color6 = props.color6;
    }

    render() {
        return (
            <li className='li-padd'>
                <span className='span-inline'>
                    <p className='p-skill'>{this.skill}</p>
                </span>
                <span className='span-float'>
                    <span>
                        <i className="fa fa-bug" style={{ color: this.color1, fontSize: "24px", opacity: "0.8"}}></i>
                    </span>
                    <span>
                        <i className="fa fa-certificate" style={{ color: this.color2, fontSize: "24px", opacity: "0.8"}}></i>
                    </span>
                    <span>
                        <i className="fa fa-bug" style={{ color: this.color3, fontSize: "24px", opacity: "0.8"}}></i>
                    </span>
                    <span>
                        <i className="fa fa-certificate" style={{ color: this.color4, fontSize: "24px", opacity: "0.8"}}></i>
                    </span>
                    <span>
                        <i className="fa fa-bug" style={{ color: this.color5, fontSize: "24px", opacity: "0.8" }}></i>
                    </span>
                    <span>
                        <i className="fa fa-certificate" style={{ color: this.color6, fontSize: "24px", opacity: "0.8" }}></i>
                    </span>
                </span>
            </li>
        );
    }
}