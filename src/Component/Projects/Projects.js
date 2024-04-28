import React from 'react';
import OpenInBrowserRoundedIcon from '@mui/icons-material/OpenInBrowserRounded';

const Projects = () => {
  const Projects = [
    {
      id:1,
      image :"images/Oranje.webp" ,
      ProjectName:"Orange App",
      Technology:"React Redux",
      ProjectInfo:"At Oranje Hotel Management, we've engineered a robust hotel management system. This platform facilitates efficient collaboration between administrators and collaborators across various hotels. With role-based access controls, including Admin, Recruiter, QA Inspector, Hotel Manager, and Accountant, we've optimized scalability and usability for seamless operations in the hospitality sector.",
      Link1:"https://oranjepeople.com/login",
    },
    {
      id:2,
      image :"images/ChampionLister.JPEG" ,
      ProjectName:"Championlister App",
      Technology:"React Redux",
      ProjectInfo:"ChampionLister simplifies bulk product distribution for sellers by providing a single platform to sell across major marketplaces like Amazon, Walmart, and eBay. With streamlined inventory management and seamless integration, sellers can expand their reach and increase profits without the hassle of managing multiple platforms individually.",
      Link1:"https://app.championlister.com",
    },
    {
      id:3,
      image :"images/MppDisha.png" ,
      ProjectName:"MPP Disha App",
      Technology:"React Redux",
      ProjectInfo:"In the MPP Disha project, we've developed a comprehensive career guidance system for parents and police, assisting them in selecting the ideal career path for children after class 7. Utilizing advanced filters, the platform displays a curated list of institutes and disciplines, enabling informed decisions on courses and subjects based on individual preferences and requirements.",
      Link1:"http://disha.parimalabs.in/login",
    },
    {
      id:4,
      image :"images/ConstructionAPP.webp" ,
      ProjectName:"Constructor App",
      Technology:"React Redux",
      ProjectInfo:"Constructor App a specialized online marketplace catering to the construction industry. Users can buy and sell construction materials, tools, and equipment, leveraging social networking features akin to Poshmark. This platform facilitates seamless transactions, empowering users within the construction sector to connect, trade, and thrive.",
      Link1:"https://poshmark.com/",
    },
    // {
    //   id:5,
    //   image :"images/retro.webp" ,
    //   ProjectName:"E-commerce App",
    //   Technology:"React Redux",
    //   ProjectInfo:"Beyond Retro is home to a passionate all-star team of fashion and vintage experts committed to recycling while delivering a one-of-a-kind experience to our fashion-forward customers.Beyond Retro provides customers with on-trend items without a carbon footprint.",
    //   Link1:"https://www.beyondretro.com",
    // },
    // {
    //   id:6,
    //   image :"images/numetric.webp" ,
    //   ProjectName:"Numetric App",
    //   Technology:"React Redux",
    //   ProjectInfo:"A bookkeeping solution that primarily focuses on small businesses in order to keep their accounting demands in fulfilled. This platform helps them to generate professional invoices, manage payment, inventory, generate accounting reports.",
    //   Link1:"https://numetric.work",
    // },
    // {
    //   id:7,
    //   image :"images/fatoura.webp" ,
    //   ProjectName:"Fatoura App",
    //   Technology:"React Redux",
    //   ProjectInfo:"A platform for young retailers that wish to make professional-looking invoices, bills, payment receipts, quotations, and other documents.Fatoura.work was built to serve freelancers and business owners with a complete suite of invoicing & payment tools.",
    //   Link1:"https://fatoura.work",
    // },
   
  ]


  return (
<section id='Projects'>
<div className="container py-md-5  py-sm-2 ">
  <div className="row">
    <div className="col-sm-12">
      <h1 id='primary-head' className='pb-md-3'>Projects</h1>
    </div>
   
   
    {
      Projects.map((data)=>{
        const {image,ProjectName,Technology,ProjectInfo,id,Link1} = data;
        return(
          <div className="col-lg-4 col-sm-6 pb-4" key={id}>
          <div className="card bg-dark h-100">
        <img src={image} className="card-img-top img-fluid img-height" alt="Project" />
        <div className="card-body position-relative">
          <h3 className="card-title text-light">{ProjectName}</h3>
          <h6 className="card-subtitle my-1 techuse">{Technology}</h6>
          <p className="card-text text-light projectinfo">{ProjectInfo}</p>
          <a href={Link1} target="_blank" rel="noopener noreferrer" className="card-link link-icon"><OpenInBrowserRoundedIcon  fontSize='large' /></a>
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