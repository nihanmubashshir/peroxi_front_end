import './ra.css'
import { useState } from 'react';


export function App(){
  const [state,changeState] = useState(1);

  return(
    <>
    
      <div className='inner' onClick={()=>{console.log(`state ${state}`);changeState(state+1)}}>
      <div className='outer'>
        </div>

      </div>
    </>
  )

}

export default App;
