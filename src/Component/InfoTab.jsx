import { useState } from "react";



// Abhi sirf design hai, tab badalne ka kaam nahi.
export default function InfoTab() {
    const tabs = ["Overview", "Geography", "Languages", "Currency", "Timezones"];
    const [active,setActive] = useState()
  return (
    <div className="my-5 flex gap-7 overflow-x-auto border-b border-[#e3ebf2]">
      {tabs.map((t, i) => (
        <button
          key={t}
          className={`whitespace-nowrap py-2.5 text-[13px] ${
            i === 0 ? "border-b-2 border-[#0f8f8f] text-[#0f8f8f]" : "text-[#7d8ea3]"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}