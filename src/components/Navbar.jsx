import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    let [searchValue, setSearchValue] = React.useState("")

    function handleSearchChange(event){
      setSearchValue(event.target.value)
    }

  return (
    <div className='flex justify-between'>
        <div className='space-x-3'>
            <div>234</div>
            <div>245</div>
        </div>
        <div className='space-x-3'>
            <input className='text-black' onChange={handleSearchChange} type="text" />
        <Link to={`/Search/${searchValue}`}>Search</Link>
            <button>Microphone</button>
        </div>
        <div className='space-x-3'>
            <div>124</div>
            <div>345</div>
            <div>235</div>
        </div>
    </div>
  )
}

export default Navbar
