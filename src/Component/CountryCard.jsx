
 
export default function CountryCard({name,code,flag,emoji ,capital,region,onView}) {
  return (
 

    <article className="rounded-xl bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3.5">
        {flag?(
          <img className="h-[34px] w-12 rounded object-cover" src={flag} alt='' />)
          :(
             <span className="text-3xl">{emoji}</span>
          )
        }
        
        <div>
          <h3 className="text-[15px] font-semibold text-[#1e3a5f]">{name}</h3>
          <span className="text-xs text-[#7d8ea3]">{code}</span>
        </div>
      </div>

      <ul className="my-[18px] grid gap-2 text-xs">
        <li><span className="text-[#0f8f8f]">🏛</span> Capital:  {capital}</li>
        <li><span className="text-[#0f8f8f]">📍</span> Region: {region} </li>
      </ul>
      <button onClick={onView} className="w-full rounded-full bg-[#0a6f73] px-4 py-2.5 text-xs font-medium cursor-pointer text-white">
        View Details →
      </button>
    </article>
  )
}