const HeroPage = () => {
    return (
        <div className="w-11/12 h-screen flex flex-col justify-start items-center gap-8 bg-slate-100 lg:flex-row">
            <div className="mt-10 w-11/12">
                <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl mb-3">Well crafted abstract images</h1>
                <p className="text-xl text-neutral-500 text-pretty">High quality abstract images for your projects, wallpaper and presentations.</p>
            </div>
            <div className="flex flex-row justify-around space-x-6">
                <button className="bg-white text-black text-lg shadow-sm shadow-neutral-300 py-3 px-6 rounded-md">Learn More</button>
                <button className="bg-indigo-500 text-white text-lg shadow-sm shadow-neutral-300 py-3 px-6 rounded-md">See Pricing</button>
            </div>
            <img className="w-11/12 mt-9" src="prism.png" />
        </div>
    )
}

export default HeroPage;