import homeImage from "../../public/assets/home-img.jpg"

const Home1 = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center order-2 md:order-1">
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-yellow-500 opacity-20 rounded-2xl"></div>
                    <img
                        src={homeImage}
                        alt="Delicious meal from a local restaurant"
                        className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center order-1 md:order-2">
                <span className="text-yellow-500 font-medium mb-2">FOOD EXPLORER</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Discover Your Next <span className="text-yellow-500">Favorite Meal</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Explore the best restaurants near you – from hidden gems to local hotspots.
                    Find menus, reviews, and more, all in one place.
                </p>
                <div className="mt-2">
                    <button className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg">
                        Hungry? Let's Dig In!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home1;