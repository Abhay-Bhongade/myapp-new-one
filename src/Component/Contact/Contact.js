import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
const Contact = () => {

  return (
    <section>
      <div className="container pb-sm-4" id='Contact'>
        <h1 id='primary-head'>Let's Connect :</h1>
        <div className="row Icon-social">

            
          <div className="col-sm-6 d-flex justify-content-center pb-4">
          <a className='Link' href='https://github.com/Abhay-Bhongade' rel="noopener noreferrer" target="_blank">
              <GitHubIcon fontSize='large' />
            </a>
          
            <a className='Link' href='https://www.linkedin.com/in/abhay-bhongade-4b242117b/' rel="noopener noreferrer" target="_blank" >
              <LinkedInIcon fontSize='large' />
            </a>

           <a className='Link' href='https://instagram.com/abhaybhongade_official' rel="noopener noreferrer" target="_blank">
            <InstagramIcon fontSize='large' />
          </a>

          </div>
          


          <div className="row col-sm-6 ">

            <div className='emailhead'>
              <p className='email1'>abhaybhongade63@gmail.com</p>
            </div>

          </div>

        </div>
        </div>
    </section>
  )
}

export default Contact