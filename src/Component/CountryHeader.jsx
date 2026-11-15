import { useContext } from "react";
import { countryContext } from "./MainContext";
export default function CountryHeader() {
  const {country} = useContext(countryContext)
  return (
    <div className="flex flex-wrap items-start gap-5">
       {country.flag?.url_svg ? (
        <img
          className="h-14 w-[76px] rounded object-cover"
          src={country.flag.url_svg}
          alt={`${country.names?.common} flag`}
        />
      ) : (
        <span className="text-5xl">{country.emoji}</span>
      )}

      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h2 className="text-[22px] font-bold text-[#1e3a5f]">{country.names?.common}</h2>
          <span className="rounded-md bg-[#d9efef] px-2.5 py-1 text-xs font-semibold text-[#0a6f73]">
            {country.codes.ccn3}
          </span>
        </div>
        <p className="mt-1 text-[13px] text-[#7d8ea3]">
          <span className="text-[#0f8f8f]">📍</span> Capital: {country.capitals[0]?.name || "N/A"}
        </p>
      </div>

      <div className="text-[13px] text-[#1e3a5f]">
        <small className="text-[#7d8ea3]">Official name</small>
        <p>{country.names.official || "N/A"}</p>
      </div>
    </div>
  );
}