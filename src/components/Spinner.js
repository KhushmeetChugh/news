import React from 'react'
import loading from './loading.gif';
export const Spinner=()=> {

    return (
      <div className="text-center mx-6">
        <img className='my-3' src={loading} alt="loading" />
      </div>
    )
  
}

export default Spinner