import React from 'react';
import ContExp from './ExpContainer';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import '../../../css/experience/Experiences';

const sc = require('../../../img/Icons/sc.png');
const wk = require('../../../img/Icons/wk.png');
const pc = require('../../../img/Icons/pc.png');

export default class Experiences extends React.Component {
  
    render() {
        return (
            <section>
                <div id='experiences' className='div1-exp'>
                    <div  className='div-title'><h3 className='title-exp'>Experiences</h3></div>
                    <div className='div2-exp'>                       
                        <div ><h4 className='edu-exp'>Education</h4></div>
                        <Flip bottom>
                            <ContExp 
                                Name='Universidad del Valle de Guatemala' 
                                Date='Jan 2016 - Nov 2023 (expected graduation date)' 
                                Acknowledgment='Computer Science and Information Technologies Engineer' 
                                Description="I'm currently in my third year of my career. I will take a specialization in computer security 
                                and I love UI/UX experience. I am making my experience at the university a unique experience I learn 
                                every day and every moment something new. "
                                src={pc}>                        
                            </ContExp>
                            <ContExp 
                                Name='Colegio Suizo Americano' 
                                Date='Jan 2002 - Oct 2015' 
                                Acknowledgment='Primary - Middle School Studies - Bach' 
                                Description="I obtained a medal of excellence and experience for my stay for 16 years and my excellent behavior 
                                in the sc. I was a <bach> in computer science and I learned to program from the age of 13."
                                src={sc}>                        
                            </ContExp>
                        </Flip>   
                        <div className='div-line'></div>
                        <div><h4 className='edu-exp'>Work Experience</h4></div>  
                        <LightSpeed left>
                            <ContExp 
                                Name='Ciklo S.A' 
                                Date='Dic 2018 - Today' 
                                Acknowledgment='Lead of QA Assurance ' 
                                Description="DACSA is a custom label printer in Guatemala city. As part of Kinal's 
                                graduating process I had to work here for about 4 months, fixing diferent kinds of 
                                electronic devices as electronic balances, sealers, labellers and more. It was a good 
                                experience realize how it feels to have a full time job."
                                src={wk}>                        
                            </ContExp> 
                            <ContExp 
                                Name='Inédito S.A' 
                                Date='Sep 2018 - Dic 2018' 
                                Acknowledgment='Project Manager  + SCRUM Master' 
                                Description="DACSA is a custom label printer in Guatemala city. As part of Kinal's 
                                graduating process I had to work here for about 4 months, fixing diferent kinds of 
                                electronic devices as electronic balances, sealers, labellers and more. It was a good 
                                experience realize how it feels to have a full time job."
                                src={wk}>                        
                            </ContExp>
                            <ContExp 
                                Name='Startrack S.A' 
                                Date='Jun 2017 - Ago 2018' 
                                Acknowledgment='Frontend Developer' 
                                Description="DACSA is a custom label printer in Guatemala city. As part of Kinal's 
                                graduating process I had to work here for about 4 months, fixing diferent kinds of 
                                electronic devices as electronic balances, sealers, labellers and more. It was a good 
                                experience realize how it feels to have a full time job."
                                src={wk}>                        
                            </ContExp>
                        </LightSpeed>                      
                    </div>
                </div>
            </section>

        );
    }
}