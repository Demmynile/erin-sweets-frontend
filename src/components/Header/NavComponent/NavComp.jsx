import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import './NavComp.scss'

const NavComp = ({isMobile , setIsMobile }) => {
  const navigate = useNavigate()

  function func1() {
    // Navigate to the link destination
    navigate(`/category/${1}`)
  
  }
  function func2() {
    // Navigate to the link destination
    navigate(`/category/${2}`)
  }
  function func3() {
    // Navigate to the link destination
    navigate(`/category/${3}`)
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
             
               <div className='easter'  onClick = {func1}><a>Easter</a></div> 
               {/* <div  className='gift' ><a>Gifts </a></div> */}
               <div  className='bam'  onClick = {func2}><a>Cakes</a></div>
               <div  className='mother' onClick = {func3}><a>Afternoon Tea</a></div>  
               <div  className='afternoon'  onClick = {func4}>
                    <a>Hire</a>
              </div>
              <div  className='afternoon'  onClick = {func5}>
                    <a>Gallery</a>
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
                      <a href="https://erin-sweets-frontend-eta.vercel.app/category/1">Easter</a>
                  </div>
                  <div  className='cakes'>
                      <a href="https://erin-sweets-frontend-eta.vercel.app/category/2">Cakes</a>
                  </div>  
                  <div className='easter'>
                      <a href="https://erin-sweets-frontend-eta.vercel.app/category/3">Afternoon Tea</a>
                  </div>    
                  <div  className='afternoon' onClick = {() => navigate('/gallery')}>
                        <a>Gallery</a>
                  </div>
                    <div  className='gift' onClick = {() => navigate('/hire')}>
                        <a>Hire</a>
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