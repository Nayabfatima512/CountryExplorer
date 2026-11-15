import React, { useContext, useEffect, useState } from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import CountryGrid from './CountryGrid';
import CountryDetail from './CountryDetail';
import {countryContext} from './MainContext'


function SearchBar() {
  const [searchcountry, setSearchCountry] = useState('');
  const {handleSearch} = useContext(countryContext);

  function handleInput(e) {
    setSearchCountry(e.target.value)
    // console.log(e.target.value);

  }
  function handleClick() {
    const text = searchcountry.trim();
    if (text) handleSearch(text);
  }

  return (
    <div className="mx-5 mb-7 flex items-center gap-3 sm:mx-auto sm:max-w-[800px]">
      {/* Input ka apna dabba: icon + input */}
      <div className="flex flex-1 items-center gap-3 rounded-xl border border-[#e3ebf2] bg-white px-5 py-3 shadow-sm">
        <span className="text-[#0f8f8f]">🔍</span>
        <input
          type="text"
          placeholder="Search countries..."
          className="w-full bg-transparent outline-none"
          value={searchcountry}
          onChange={handleInput}
        />
      </div>
      <button className="shrink-0 rounded-xl bg-blue-950 px-6 py-3 text-sm font-semibold
       text-white hover:bg-blue-900 cursor-pointer" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

function Home() {
 let {country,setCountry,message} = useContext(countryContext);

  return (
    <div>
      <NavBar />
      <Hero />
      <SearchBar/>
      {message &&  <p className="mb-6 text-center text-sm">{message}</p>}
      {country?(<CountryDetail onBack={() => setCountry(null)} />):(<CountryGrid />)} 
    </div>
  )
}

export default Home