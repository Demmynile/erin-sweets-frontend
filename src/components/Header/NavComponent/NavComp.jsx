import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import './NavComp.scss'

const NavComp = ({isMobile , setIsMobile }) => {
  const navigate = useNavigate()

  function func1() {
    // Navigate to the link destination
    navigate(`/category/${5}`)
  
  }
  function func2() {
    // Navigate to the link destination
    navigate(`/category/${6}`)
  }
  function func3() {
    // Navigate to the link destination
    navigate(`/category/${7}`)
  }
  function func4() {
    // Navigate to the link destination
    navigate('/hire')
  }
  function func5() {
    // Navigate to the link destination
    navigate('/gallery')
  }
    
  return (
    <>
       <div className={isMobile ? 'mob-container' : 'main-container'}>
          <div className="sub-container">
             
               <div className='easter'  onClick = {func1}><a href = "#">Easter</a></div> 
               <div  className='mother' onClick = {func2}><a href = "#">Mother's Day</a></div>  
               <div  className='gift' ><a href = "#">Gifts </a></div>
               <div  className='bam'  onClick = {func3}><a href = "#">Cakes</a></div>
               <div  className='afternoon'  onClick = {func4}>
                    <a href = "#">Hire</a>
              </div>
              <div  className='afternoon'  onClick = {func5}>
                    <a href = "#">Gallery</a>
              </div>
            </div>
       </div>
     
  
      {isMobile && 
        <div className='mob-nav'>
              
            <div className='mob-list'>
            
                  <div className='cancel'>
                    <MdOutlineCancel  onClick={() => setIsMobile(!isMobile)} />
                  </div>
                  <div className='easter'>
                      <a href="https://erin-sweets-frontend.vercel.app/category/5">Easter</a>
                    </div>  
                  <div className='mother'>
                    <a href="https://erin-sweets-frontend.vercel.app/category/6">Mother's Day</a>
                  </div>  
                  <div  className='afternoon' onClick = {() => navigate('/gallery')}>
                        <a href = "#">Gallery</a>
                  </div>
                    <div  className='gift' onClick = {() => navigate('/hire')}>
                        <a href = "#">Hire</a>
                    </div>      
                  <div  className='cakes'>
                      <a href="https://erin-sweets-frontend.vercel.app/category/7">Cakes</a>
                  </div>  
     
                
            </div>
            <div className='socials-nav'>
                    
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
            </div>
        </div>
      
      }
    </>
  
  )
}

export default NavComp