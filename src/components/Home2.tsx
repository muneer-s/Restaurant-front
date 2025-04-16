import image3 from "../../public/assets/3.jpg"

const Home2 = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen flex flex-col md:flex-row items-center">
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <div className="relative mb-6">
                    <span className="inline-block bg-yellow-500 h-1 w-16 absolute -top-4"></span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Find Your <span className="text-yellow-500">Perfect Bite</span>
                    </h1>
                </div>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
                    Uncover top restaurants nearby – from cozy favorites to trending spots.
                    Browse menus, ratings, and more, all here for you.
                </p>
                
                <div className="flex flex-wrap gap-4">
                    <button className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg">
                        Ready to eat? Dive in!
                    </button>
                    <button className="bg-transparent border border-yellow-500 text-yellow-500 font-semibold py-3 px-8 rounded-full hover:bg-yellow-500 hover:bg-opacity-10 transition duration-300">
                        Explore Cuisines
                    </button>
                </div>
            </div>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 z-10 rounded-2xl"></div>
                    <img
                        src={image3}
                        alt="Delicious meal from a local restaurant"
                        className="w-full h-auto object-cover rounded-2xl transform transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 z-20 bg-black bg-opacity-70 px-4 py-2 rounded-lg">
                        <span className="text-yellow-500 font-medium text-sm">Featured Cuisine</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home2