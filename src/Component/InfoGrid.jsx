import { useContext } from "react";
import { countryContext } from "./MainContext";

export default function InfoGrid() {
  const {country} = useContext(countryContext)
    if (!country) return null;

  const items = [
    {
      icon: "👥",
      label: "Population",
      value: country.population?.toLocaleString()
    },
    {
      icon: "⤢",
      label: "Area",
      value: country.area && `${country.area?.kilometers.toLocaleString()} km²`
    },
    {
      icon: "🌐",
      label: "Region",
      value: country.region
    },
    {
      icon: "📞",
      label: "Calling Code",
      value: country.calling_codes
        ? `+${country.calling_codes}`
        : null
    },
  ];

  return (
  <>

    <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 mb-5">
      {items.map((item) => (
        <div className="flex items-center gap-3.5" key={item.label}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#eaf3f7]">
            {item.icon}
          </span>
          <div>
            <small className="text-[13px] text-[#7d8ea3]">{item.label}</small>
            <p className="text-sm font-medium text-[#1e3a5f]">{item.value || "N/A"}</p>
          </div>
        </div>
      ))}
    </div>
    <div>
        <h2 className="font-bold ">Description</h2>
        <p className="lg:text-lg">{country.descriptions?.long || "No description available."}</p>
      </div>
      </>
  );
}