import { useContext } from "react";
import { countryContext } from "./MainContext";

export default function AdditionalInfo() {
  const {country} = useContext(countryContext)
  if (!country) return null; 
const coords = country.capitals?.[0]?.coordinates;
  const extras = [
  { icon: "▣", label: "Top Level Domain", value:country?.tlds },
  { icon: "📍", label: "Capital Coordinates", value: coords ? `${coords.lat}, ${coords.lng}` : null  },
  { icon: "⛓", label: "Borders", value: country?.borders.join(", ") || "N/A"
 },
  { icon: "👤", label: "Demonym", value: country.demonyms.eng?.f },
];
  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="mb-3.5 text-[15px] font-semibold text-[#1e3a5f]">Additional Information</h3>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {extras.map((e) => (
          <div className="flex gap-2.5" key={e.label}>
            <span className="text-[#0f8f8f]">{e.icon}</span>
            <div>
              <small className="text-[13px] text-[#7d8ea3]">{e.label}</small>
              <p className="text-[13px] text-[#1e3a5f]">{e.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}