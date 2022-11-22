import React from 'react';
import OpenInBrowserRoundedIcon from '@mui/icons-material/OpenInBrowserRounded';

const Projects = () => {
  const Projects = [
    {
      id:1,
      image :"images/retro.webp" ,
      ProjectName:"E-commerce App",
      Technology:"React Redux",
      ProjectInfo:"Beyond Retro is home to a passionate all-star team of fashion and vintage experts committed to recycling while delivering a one-of-a-kind experience to our fashion-forward customers.Beyond Retro provides customers with on-trend items without a carbon footprint.",
      Link1:" https://www.beyondretro.com",
    },
    {
      id:2,
      image :"images/numetric.webp" ,
      ProjectName:"Numetric App",
      Technology:"React Redux",
      ProjectInfo:"A bookkeeping solution that primarily focuses on small businesses in order to keep their accounting demands in fulfilled. This platform helps them to generate professional invoices, manage payment, inventory, generate accounting reports.",
      Link1:"https://numetric.work",
    },
    {
      id:3,
      image :"images/fatoura.webp" ,
      ProjectName:"Fatoura App",
      Technology:"React Redux",
      ProjectInfo:"A platform for young retailers that wish to make professional-looking invoices, bills, payment receipts, quotations, and other documents.Fatoura.work was built to serve freelancers and business owners with a complete suite of invoicing & payment tools.",
      Link1:"https://fatoura.work",
    },
   
  ]


  return (
<section id='Projects'>
<div className="container py-md-5  py-sm-2 ">
  <div className="row">
    <div className="col-sm-12">
      <h1 id='primary-head' className='pb-md-3'>Personal Projects</h1>
    </div>
   
   
    {
      Projects.map((data)=>{
        const {image,ProjectName,Technology,ProjectInfo,id,Link1} = data;
        return(
          <div className="col-lg-4 col-sm-6 pb-4" key={id}>
          <div className="card bg-dark">
        <img src={image} className="card-img-top img-fluid" alt="Project" />
        <div className="card-body">
          <h3 className="card-title text-light">{ProjectName}</h3>
          <h6 className="card-subtitle my-1 techuse">{Technology}</h6>
          <p className="card-text text-light projectinfo">{ProjectInfo}</p>
          <a href={Link1} target="_blank" rel="noopener noreferrer" className="card-link "><OpenInBrowserRoundedIcon  fontSize='large' /></a>
        </div>
      </div>
          </div> 
        )
      }
     

      )
    }

  </div>
  </div>



</section>
    
  )
}

export default Projects