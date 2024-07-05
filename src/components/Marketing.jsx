import React from 'react'
import "../styless/marketing.css"
import { BiRightArrowAlt } from "react-icons/bi";

const Marketing = () => {
    return (
        <>
            <section className='markting'>
                <h1>
                Caring is the new marketing

                </h1>
                <p>
                The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​

                </p>
                <div className='marketing-content__container'>

                    <div className='marketing-images__container'>
                        <div className="marketing-images">
                        <img src=".\images\marketingimg1.svg" alt="" />
                        </div>
                        <div className="marketing-text">
                            <h3>
                            Creating Streamlined Safeguarding Processes with OneRen
                            </h3>
                            <a href="">
                                Readmore
                                <BiRightArrowAlt className='icon'/>

                            </a>
                        </div>

                    </div>
                    <div className='marketing-images__container'>
                        <div className="marketing-images">
                        <img src=".\images\marketingimg2.svg" alt="" />
                        </div>
                        <div className="marketing-text">
                            <h3>
                            What are your safeguarding responsibilities and how can you manage them?
                            </h3>
                            <a href="">
                                Readmore
                                <BiRightArrowAlt className='icon'/>
                            </a>
                        </div>

                    </div>
                    <div className='marketing-images__container'>
                        <div className="marketing-images">
                        <img src=".\images\marketingimg3.svg" alt="" />
                        </div>
                        <div className="marketing-text">
                            <h3>
                            Revamping the Membership Model with Triathlon Australia
                            </h3>
                            <a href="">
                                Readmore
                                <BiRightArrowAlt className='icon'/>
                            </a>
                        </div>

                    </div>

                </div>
                
            </section>
        </>
    )
}

export default Marketing
