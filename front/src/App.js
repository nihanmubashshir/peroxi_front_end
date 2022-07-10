import './ra.css'
import { useState } from 'react';


export function App(){
  const [state,changeState] = useState(false);

  return(
    <>
    
      <div className='inner' onClick={()=>{console.log(`state ${state}`);changeState(!state)}}>
      <div className={state && "outer"} onMouseMove={()=>console.log("mouse moved")} >
        </div>

      </div>
    </>
  )

}

export default App;
