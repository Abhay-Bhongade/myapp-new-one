import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserRoundedIcon from '@mui/icons-material/OpenInBrowserRounded';

const Projects = () => {
  const Projects = [
    {
      id:1,
      image :"images/quizapp.webp" ,
      ProjectName:"Quiz App",
      Technology:"React TriviaApi",
      ProjectInfo:"A Quiz App created using Trivia Api with 22 categories , Where one can give a quiz and at last check his Score.",
      Link1:"https://github.com/Abhay-Bhongade/react-quiz-app",
      Link2:"https://quizhubfun.netlify.app/",
    },
    {
      id:2,
      image :"images/moviesapp.webp" ,
      ProjectName:"Movie App",
      Technology:"React ReduxToolkit",
      ProjectInfo:"A Movie App created using omdbApi where user can select his favorite Movie/Tv show and watch it's details.",
      Link1:"https://github.com/Abhay-Bhongade/movieapp",
      Link2:"https://movieshubapp.netlify.app/",
    },
    {
      id:3,
      image :"images/todoapp.png" ,
      ProjectName:"Todo App",
      Technology:"React LocalStorage",
      ProjectInfo:"A Todo App created using React with local Storage, where user can maintain his day to day tasks and also prioritize the tasks.",
      Link1:"https://github.com/Abhay-Bhongade/todoAppfirst",
      Link2:"https://dailytodotasks.netlify.app/",
    },
    {
      id:4,
      image :"images/e-commerce.webp" ,
      ProjectName:"E-commerce App",
      Technology:"React Redux",
      ProjectInfo:"A dummy super market E-commerce Application,where user can select from variety of Products and add items to his cart.",
      Link1:"https://github.com/Abhay-Bhongade/E-commerce-App-Made-with-React-Redux",
      Link2:"https://sabka-bazar-demoapp.netlify.app/",
    }
  ]


  return (
<section id='Projects'>
<div className="container py-md-5  py-sm-2 ">
  <div className="row">
    <div className="col-sm-12">
      <h1 id='primary-head' className='pb-md-3'>Personal Projects  </h1>
    </div>
   
   
    {
      Projects.map((data)=>{
        const {image,ProjectName,Technology,ProjectInfo,id,Link1,Link2} = data;
        return(
          <div className="col-lg-4 col-sm-6 pb-4" key={id}>
          <div className="card bg-dark">
        <img src={image} className="card-img-top img-fluid" alt="Project" />
        <div className="card-body">
          <h3 className="card-title text-light">{ProjectName}</h3>
          <h6 className="card-subtitle my-1 techuse">{Technology}</h6>
          <p className="card-text text-light projectinfo">{ProjectInfo}</p>
          <a href={Link1} target="_blank" rel="noopener noreferrer" className="card-link "><GitHubIcon fontSize='large' /></a>
          <a href={Link2} target="_blank" rel="noopener noreferrer" className="card-link "><OpenInBrowserRoundedIcon  fontSize='large' /></a>
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