export default function Hero() {
    return (
        <section className="mx-auto flex max-w-[1200px] flex-col items-start 
                justify-between gap-6 px-5 pb-8 pt-12 md:flex-row md:items-center">
            <div>
                <h1 className="text-3xl font-bold leading-tight text-[#1e3a5f] md:text-[40px]">
                    Explore Countries <br /> Around the World
                </h1>
                <p className="mt-5 leading-relaxed">
                    Discover countries, their capitals, regions and more. <br />
                    Learn about every place on our beautiful planet.
                </p>
                <span className="mt-4 block h-0.5 w-8 bg-[#0f8f8f]" />
            </div>

            <div className="relative text-[100px] opacity-40 md:text-[160px]">
                <span className="absolute -left-20 top-10 hidden w-24 text-[13px] italic text-[#1e3a5f] md:block">
                    Your next destination is waiting!
                </span>
                <div>🗺️</div>
            </div>
        </section>
    );
}