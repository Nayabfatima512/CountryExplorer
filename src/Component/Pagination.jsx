import { useContext } from "react";
import { countryContext } from "./MainContext";

export default function Pagination({ hasNext }) {
  const { page, setPage } = useContext(countryContext);

  const btn ="rounded-full border border-[#e3ebf2] bg-blue-950 px-4 py-2 text-xs  text-white font-semibold disabled:cursor-not-allowed disabled:opacity-30";

  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-3 px-5 pb-10 pt-6">
      <button className={btn} disabled={page === 1} onClick={() => setPage(page - 1)}>
         Prev
      </button>

      <span className="inline-flex  h-[30px] w-[50px]  justify-center items-center rounded-2xl bg-[#0f8f8f] text-xs font-semibold text-white">
        {page}
      </span>
       

      <button className={btn} disabled={!hasNext} onClick={() => setPage(page + 1)}>
        Next 
      </button>
    </div>
  );
}