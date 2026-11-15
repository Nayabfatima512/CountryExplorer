import CountryCard from "./CountryCard";
import { useContext, useEffect, useState } from "react"
import { countryContext } from "./MainContext";



export default function CountryGrid() {
const {setCountry} = useContext(countryContext)
 const [countries, setCountries] = useState([]);
  useEffect(() => {
  async function getCountryData() {
    const apiUrl = "https://api.restcountries.com/countries/v5?limit=10";

    console.log("key:", import.meta.env.VITE_COUNTRIES_KEY?.slice(0, 8));

    const res = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_COUNTRIES_KEY}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Status:", res.status);
      console.error("Message:", data.errors?.[0]?.message);
      return;
    }
    console.log(data.data.objects[0]);
    let apiData = data.data.objects;
    setCountries(apiData);
  }
  getCountryData();
}, []);

  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {countries.map((c) => (
        <CountryCard 
        key={c.codes?.alpha_3}
        name = {c.names?.common}
        code = {c.codes?.alpha_3}
        flag ={c.flag?.url_svg}
        emoji ={c.flag?.emoji}
        capital = {c.capitals[0]?.name}
        region = {c.region}
         onView={() => setCountry(c)}
        />
      ))}
    </section>
  );
}