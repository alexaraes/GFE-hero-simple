const HeroPage = () => {
    return (
        <div className="w-11/12 h-screen flex flex-col justify-start items-center sm:items-start gap-8 bg-slate-100 lg:flex-row m-7">
            <div className="mt-10 sm:mt-20">
                <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl mb-3">Well crafted abstract images</h1>
                <p className="text-xl text-neutral-500 text-pretty sm:w-11/12">High quality abstract images for your projects, wallpaper and presentations.</p>
            </div>
            <div className="flex flex-row justify-around space-x-6 sm:justify-start">
                <button className="bg-white text-black text-lg shadow-sm shadow-neutral-300 py-3 px-6 rounded-md">Learn More</button>
                <button className="bg-indigo-500 text-white text-lg shadow-sm shadow-neutral-300 py-3 px-6 rounded-md">See Pricing</button>
            </div>
            <img className="w-11/12 mt-9 self-center" src="prism.png" />
        </div>
    )
}

export default HeroPage;