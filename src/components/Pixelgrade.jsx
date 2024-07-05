import React from 'react'
import "../styless/pixelgrade.css"

const Pixelgrade = () => {
  return (
    <>
    <section className='pixel'>
        <img src="./images/pixelgrade.svg" alt="" />
        <div className='pixelgrade__container'>
            <h3>
            The unseen of spending three <br /> years at Pixelgrade
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            <button className='pixelgrade-btn'>Learn more</button>
        </div>
       

    </section>
    </>
  )
}

export default Pixelgrade
