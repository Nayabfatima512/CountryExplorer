import { useContext, useEffect, useState } from "react";
import { countryContext } from "./MainContext";

export default function NearByCountry() {
  const {country, setCountry } = useContext(countryContext);
  const [nearby, setNearby] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const codes = (country?.borders || []).slice(0, 4);   // sirf pehle 4
    if (codes.length === 0) {
      setNearby([]);
      return;
    }

    async function getNearby() {
      setLoading(true);
      try {
        const results = await Promise.all(
          codes.map(async (code) => {
            const res = await fetch(
              `https://api.restcountries.com/countries/v5/codes.alpha_3/${code}`,
              { headers: { Authorization: `Bearer ${import.meta.env.VITE_COUNTRIES_KEY}` } }
            );
            const data = await res.json();
            return res.ok ? data.data.objects[0] : null;
          })
        );
        setNearby(results.filter(Boolean));     // jo fail hue wo nikal do
      } catch (err) {
        console.error(err);
        setNearby([]);
      } finally {
        setLoading(false);
      }
    }
    getNearby();
  }, [country]);                                // country badle to dobara

  if (!country) return null;

  return (
    <section className="mt-5 rounded-xl bg-white p-6 shadow-sm">
      <h3 className="mb-3.5 text-[15px] font-semibold text-[#1e3a5f]">Nearby Countries</h3>

      {loading && <p className="text-sm">Loading...</p>}
      {!loading && nearby.length === 0 && (
        <p className="text-sm text-[#7d8ea3]">No bordering countries.</p>
      )}

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {nearby.map((n) => (
          <button
            key={n.codes?.alpha_3}
            onClick={() => setCountry(n)}
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#e3ebf2] p-3 text-left text-xs"
          >
            {n.flag?.url_svg ? (
              <img className="h-[18px] w-[26px] object-cover" src={n.flag.url_svg} alt="" />
            ) : (
              <span>{n.flag?.emoji}</span>
            )}
            <span>{n.names?.common}</span>
            <span className="ml-auto">›</span>
          </button>
        ))}
      </div>
    </section>
  );
}