import './misc.scss'
import {GridLoader} from 'react-spinners'



export const Loading = () => {
    return (
        <>
        <div className='loading'>
            <GridLoader  color ='#FAA1C8' size={30}/>
        </div>
        
        </>
    )
}