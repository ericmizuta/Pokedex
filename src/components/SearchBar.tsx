import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return <div className='w-full flex relative'>
        <input className='bg-slate-200 rounded-lg w-full p-4 shadow-md text-slate-600' type="text" placeholder='Search...' />

        <div className='flex items-center justify-center absolute right-4 top-0 bottom-0 z-10'>
            <FontAwesomeIcon className='text-slate-600 text-lg' icon={faMagnifyingGlass} />
        </div>
    </div>
}

export default SearchBar