import React from 'react'
import "../styless/reports.css"

const Reports = () => {
    return (
        <>
            <div className='reports'>
                <div className='reports__text'>
                    <h1>
                        Helping a local <br /><span>business reinvent itself</span>
                    </h1>
                    <p>
                        We reached here with our hard work and dedication
                    </p>
                </div>
                <div className="reports__numbers"id='first-content'>
                    <div className='numbers__container'>
                        <div className='members__container'>
                            <img src=".\images\pplicon.svg" alt="" />
                            <div className='members-content'>
                                <h3>2,245,341</h3>
                                <p>Members</p>
                            </div>
                        </div>
                        <div className='members__container' id='club__container'>
                            <img src=".\images\hand1.svg" alt="" />
                            <div    className='members-content'
                            id='club' >
                                <h3>46,328</h3>
                                <p>Clubs</p>
                            </div>
                        </div>
                    </div>
                    <div className='numbers__container'>
                        <div className='members__container'>
                            <img src=".\images\hand1.svg" alt="" />
                            <div className='members-content'>
                                <h3>828,867</h3>
                                <p>Event Bookings</p>
                            </div>
                        </div>
                        <div className='members__container'>
                            <img src=".\images\atm1.svg" alt="" />
                            <div className='members-content'>
                                <h3>1,926,436</h3>
                                <p>Payments</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Reports
