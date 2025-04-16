import image6 from "../../public/assets/6.jpg"

const Home3 = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center">
                <div className="relative w-full overflow-hidden rounded-xl shadow-2xl transform rotate-1 group">
                    <div className="absolute inset-0 bg-yellow-500 opacity-10 rounded-xl"></div>
                    <img
                        src={image6}
                        alt="Delicious meal from a local restaurant"
                        className="w-full h-auto object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute -bottom-2 -right-2 h-24 w-24 bg-yellow-500 rounded-full opacity-60 blur-xl"></div>
                </div>
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="h-px w-12 bg-yellow-500"></div>
                    <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Culinary Journey</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                    Savor Every <span className="text-yellow-500">Flavor</span>
                </h1>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                    Discover the tastiest spots around – from bold eats to secret treasures.
                    Menus, reviews, and more await you.
                </p>
                
                <div className="flex items-center">
                    <button className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg flex items-center space-x-2">
                        <span>Craving something? Let's feast!</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
                
                <div className="mt-12 flex items-center space-x-4">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-yellow-600"></div>
                        <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
                        <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                    </div>
                    <span className="text-gray-400 text-sm">Thousands of restaurants waiting for you</span>
                </div>
            </div>
        </div>
    )
}

export default Home3