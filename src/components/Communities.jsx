import React from 'react'
import "../styless/communities.css"

const Communities = () => {
  return (
    <>
    <section className='communities'>
        <h1>
        Manage your entire community <br />in a single system

        </h1>
        <p>
        Who is Nextcent suitable for?

        </p>
        <div className='communities-logo__container'>
          <div className='communities__container'>
            <img src="./images/membership.svg" alt="" />
            <h3>Membership Organisations</h3>
            <p>Our membership management software provides full automation of membership renewals and payments</p>

          </div>
          <div className='communities__container'>
            <img src="./images/houseicon.svg" alt="" />
            <h3>National Associations</h3>
            <p>Our membership management software provides full automation of membership renewals and payments</p>

          </div>
          <div className='communities__container'>
            <img src="./images/threehands.svg" alt="" />
            <h3>Clubs And Groups</h3>
            <p>Our membership management software provides full automation of membership renewals and payments</p>

          </div>

        </div>
    </section>
    </>
  )
}

export default Communities
