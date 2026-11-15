import CountryHeader from "./CountryHeader";
import InfoTab from "./InfoTab";
import InfoGrid from "./InfoGrid";
import CountryMap from "./CountryMap";
import AdditionalInfo from "./AdditionalInfo";
import NearByCountry from "./NearByCountry";
import { countryContext } from "./MainContext";
import { useContext } from "react";
export default function CountryDetail({onBack }) {

    const {country} = useContext(countryContext)

// useEffect(() => {
//    async function getCountry() {
//       setCountry(null);
//       try {
//         const res = await fetch(
//           `https://api.restcountries.com/countries/v5/codes.alpha_3/${code}`,
//           { headers: { Authorization: `Bearer ${import.meta.env.VITE_COUNTRIES_KEY}` } }
//         );
//         const data = await res.json();
//         if (!res.ok) throw new Error(data.errors?.[0]?.message || `Error ${res.status}`);

//         const first = data.data.objects[0];
//         console.log(first);
        
//         setCountry(first || null);
//       } catch (err) {
//         console.error(err);
//         setMessage(err.message);
//       }
//     }
//     getCountry();
// }, [code]);    
    return (
        <section className="mx-auto  px-5 pb-10">
            <button
                onClick={onBack}
                className="mb-4 rounded-full border border-[#0f8f8f] bg-white px-4 py-2.5 text-xs font-medium
                 text-[#0f8f8f]">
                ← Back to Countries
            </button>
            <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="w-full min-w-0 rounded-xl bg-white p-6 shadow-sm ">
                    {country && <CountryHeader/>}
                    <InfoTab />
                    <InfoGrid/>
                </div>
                <div className="w-full min-w-0">
                    <CountryMap/>
                </div>

            </div>
            <div>
                <AdditionalInfo/>
                <NearByCountry />
            </div>

        </section>

    );
}

