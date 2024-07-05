import React from 'react'
import "../styless/clients.css"


const Clients = () => {
  return (
    <>
    <section className='clients'>
        <h1>
        Our Clients

        </h1>
        <p>
        We have been working with some Fortune 500+ clients

        </p>
        <div className='clients-logo__container'>
            <img src="./images/logo.svg" alt="" />
            <img src="./images/logo-1.svg" alt="" />
            <img src="./images/logo-2.svg" alt="" />
            <img src="./images/logo-3.svg" alt="" />
            <img src="./images/logo-4.svg" alt="" />
            <img src="./images/logo-5.svg" alt="" />
            <img src="./images/logo-6.svg" alt="" />
        </div>
    </section>
    </>
  )
}

export default Clients