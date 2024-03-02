import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import './NavComp.scss'

const NavComp = ({isMobile }) => {
    
  return (
    <>

       <div className={isMobile ? 'mob-container' : 'main-container'}>
          <div className="sub-container">
             <div className='nav-list '>
               <li className='easter'><a href="https://erin-sweets-frontend.vercel.app/category/5">Easter</a></li>  
               <li  className='mother'><a href="https://erin-sweets-frontend.vercel.app/category/6" />Mother's Day</li>  
               <li  className='afternoon'><a href="https://erin-sweets-frontend.vercel.app/category/8" />Afternoon Tea</li>  
               {/* <li  className='hamper'>Hamper and Gift Boxes</li>   */}
               <li  className='gift'>Gift Ideas</li>     
               <li  className='cakes'><a href="https://erin-sweets-frontend.vercel.app/category/7" />Cakes</li>  
               {/* <li  className='chocolates'>Chocolates</li>   */}
               {/* <li  className='tea'>Tea and Coffee</li>  
               <li  className='corporate'>Corporate Gift</li>   */}
            </div>
          </div>
       </div> 
  
      {isMobile && 
        <div className='mob-nav'>
            <div className='mob-list'>
               <div className='easter'>Easter</div>  
               <div className='mother'>Mother's Day</div>  
               <div  className='hamper'>Hamper and Gift Boxes</div>     
               <div  className='cakes'>Cakes</div>  
               <div  className='tea'>Tea and Coffee</div>  
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