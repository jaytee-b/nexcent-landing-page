import React from 'react'
import "../styless/customers.css"

const Customers = () => {
    return (
        <>
            <section className='customers'>
                <img src="./images/tesla.svg" alt="" />
                <div className='customers__container'>
                    <p>
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <h3>
                        Tim Smith
                    </h3>
                    <p className='customers-name'>
                        British Dragon Boat Racing Association
                    </p>
                    <div className='customers-logo__container'>
                        <img src="./images/logo.svg" alt="" />
                        <img src="./images/logo-1.svg" alt="" />
                        <img src="./images/logo-2.svg" alt="" />
                        <img src="./images/logo-3.svg" alt="" />
                        <img src="./images/logo-4.svg" alt="" />
                        <a href="">
                            <h4>Meet all customers</h4>
                         
                        </a>
                    </div>


                </div>

            </section>
        </>
    )
}

export default Customers
