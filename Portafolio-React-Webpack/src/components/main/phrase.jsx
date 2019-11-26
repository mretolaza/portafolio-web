import React from 'react';
import Pulse from 'react-reveal/Pulse';
import '../../css/Quote';

export default class Experiences extends React.Component {
    render() {
        return (
            <section>
                <div className='div-quote'>
                    <div className='div-quote-in'>
                        <Pulse>
                            <p className='p-quote'>
                                "Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo."
                            </p>
                            <p className='p-quote-ref'>
                                - Eduardo Galeano, Rotary International
                            </p>
                        </Pulse>
                    </div>
                </div>
            </section>

        );
    }
}