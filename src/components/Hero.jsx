import React from 'react'
import "../styless/hero.css"

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className='hero__container'>
                    <div className='hero__content'> 
                        <h1>
                        Lessons and insights<span> from 8 years</span>

                        </h1>
                        <p>
                        Where to grow your business as a photographer: site or social media?

                        </p>
                        <button>
                            Register

                        </button>

                    </div>
                    <div className='hero__image'>
                    <img src="./images/illustration.svg" alt="" />

                    </div>
                    

                </div>
                <div className='hero__dots'> 
                    <div className='hero__dot' id='light'></div>
                    <div className='hero__dot'></div>
                    <div className='hero__dot'></div>
                </div>
                

            </section>
        </>
    )
}

export default Hero