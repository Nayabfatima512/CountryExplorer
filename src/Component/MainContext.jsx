import React, { createContext, useState } from 'react'
export let countryContext = createContext();
export const MainContext = ({children}) => { 

    const [country,setCountry] = useState(null);
    const [message,setMessage] = useState('');
    const [page,setPage] = useState(1)
    let globalCountry = {country,setCountry,message,handleSearch,page,setPage};

 async function handleSearch(query) {
    if (!query) return;
    // console.log("loading ...");
    setMessage("Loading...")

    try {
      const api = `https://api.restcountries.com/countries/v5/names.common?q=${encodeURIComponent(query)}`;

      const res = await fetch(api, {headers: {Authorization: `Bearer ${import.meta.env.VITE_COUNTRIES_KEY}` }});
      const data = await res.json();
      console.log("names:", data.data.objects[0]);

      const list = data.data.objects;
      const exact = list.find(
        (c) => c.names?.common?.toLowerCase() === query.toLowerCase()
      );
      const found = exact || list[0];

      setCountry(found || null);
      setMessage(found ? "" : "No country found.");
    }
    catch (err) {
      console.error("Fetch faild", err);
      setMessage(err.message);
    }

  }

  return (
    <countryContext.Provider value={globalCountry}>
        {children}
    </countryContext.Provider>
  )
}


