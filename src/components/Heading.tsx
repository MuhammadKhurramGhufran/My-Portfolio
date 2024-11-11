import React from 'react'

interface propsType {
    Title: string;
}

const Heading: React.FC<propsType> = ({Title}) => {
  return (
    <div className='text-center text-4Xl pb-8'>
        <p className='border-b-4 inline-block pb-2'>{Title}</p>
       
    </div>
  )
}

export default Heading
