const HeroPage = () => {
    return (
        <div className="rounded-md m-7 bg-slate-100 shadow-lg">
            <div className="w-full h-full flex flex-col justify-start items-center space-y-10 rounded-md px-4 sm:m-4 sm:items-start lg:flex-row lg:justify-center lg:gap-1 lg:my-5">
                <div className="px-2 lg:flex lg:flex-col lg:justify-center lg:h-4/6">
                    <div className="mt-10 mb-5 sm:mt-20 lg:w-4/6 lg:py-8">
                        <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl mb-3">Well crafted abstract images</h1>
                        <p className="text-xl text-neutral-500 text-pretty sm:w-11/12">High quality abstract images for your projects, wallpaper and presentations.</p>
                    </div>
                    <div className="flex flex-row justify-around sm:justify-start lg:py-7">
                        <button className="bg-white text-black text-md md:text-lg shadow-sm shadow-neutral-300 mr-2 h-10 w-32 rounded-md">Learn More</button>
                        <button className="bg-indigo-500 text-white text-md md:text-lg shadow-sm shadow-neutral-300 ml-2 h-10 w-32 rounded-md">See Pricing</button>
                    </div>
                </div>
                <div className="w-11/12 lg:w-3/6">
                    <img src="prism.png" />
                </div>
            </div>
        </div>
    )
}

export default HeroPage;