import React from 'react'
import { Typewriter} from 'react-simple-typewriter'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Home = () => {
  return (
   <header>
   
   <div className="container" id='Home'>
       <div className="row">
           <div className="col-sm-12">
               <span id='firstone'>Code &#8226; Cofee  &#8226; Codeplay</span>
               <h1 className='firstheading'>Hi, I'm Abhay Bhongade</h1> <br/>
               <h3 className='text-gradient'> <Typewriter
                        loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={50}
                        delaySpeed={100}
                        deleteSpeed={110}
                        words={["Frontend Dev","Web Designer","Javascript Lover"]}
               />  </h3>
               <div className='arrow'> <KeyboardArrowDownIcon /> </div>
           </div>
       </div>
   </div>
   
   
   </header>
   
  )
}

export default Home