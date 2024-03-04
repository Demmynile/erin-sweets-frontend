import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import './NavComp.scss'

const NavComp = ({isMobile }) => {

  function func1() {
    // Navigate to the link destination
    window.location.href = "https://erin-sweets-frontend.vercel.app/category/5";
  }
  function func2() {
    // Navigate to the link destination
    window.location.href = "https://erin-sweets-frontend.vercel.app/category/8";
  }
  function func3() {
    // Navigate to the link destination
    window.location.href = "https://erin-sweets-frontend.vercel.app/category/7/";
  }
  function func4() {
    // Navigate to the link destination
    window.location.href = "https://erin-sweets-frontend.vercel.app/category/6";
  }
  function func5() {
    // Navigate to the link destination
    window.location.href = "https://erin-sweets-frontend.vercel.app/category/8";
  }
    
  return (
    <>

       <div className={isMobile ? 'mob-container' : 'main-container'}>
          <div className="sub-container">
             
               <div className='easter'  onClick = {func1}><a>Easter</a></div>  
               <div  className='bam'  onClick = {func3}><a>Cakes</a></div>
               <div  className='choco'><a>Gift Ideas</a></div>  
               {/* <div  className='gift'   onClick = {func2}><a>Gift Ideas</a></div>   */}
               <div  className='mother' onClick = {func4}><a>Mother's Day</a></div>  
               <div  className='afternoon'  onClick = {func5}>
                    <a>Tea</a>
              </div>
            </div>
          </div>
     
  
      {isMobile && 
        <div className='mob-nav'>
            <div className='mob-list'>
               <div className='easter'>
                  <a href="https://erin-sweets-frontend.vercel.app/category/5">Easter</a>
                </div>  
               <div className='mother'>
                <a href="https://erin-sweets-frontend.vercel.app/category/6">Mother's Day</a>
              </div>  
               <div  className='afternoon'>
                    <a href="https://erin-sweets-frontend.vercel.app/category/8">Tea</a>
              </div>
                <div  className='gift'>
                    <a href="https://erin-sweets-frontend.vercel.app/category/8">Gift Ideas</a>
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