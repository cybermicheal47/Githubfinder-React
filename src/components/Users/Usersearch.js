import React, { useState, useContext } from 'react';
import Githubcontext from '../../context/github/Githubcontext';



function Usersearch() {
  const [text, settext] = useState('');
const {users} = useContext(Githubcontext)


const handleChange = (e) => settext(e.target.value)

const handlesubmit = (e) =>{
    e.preventDefault()

    if (text===''){
        alert('Please input something')
    } else {
         //todo - search users 

        settext('')
    }
}


  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handlesubmit} >
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
            SEARCH
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
    {users.length > 0  && (
        <button
        
        className='btn btn-ghost btn-lg'
      >
        Clear
      </button>
    )
    }

     
      </div>
    </div>
  );
}

export default Usersearch;