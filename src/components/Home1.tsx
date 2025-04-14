const Home1 = () => {
    return (
        <div className="bg-black flex flex-col md:flex-row min-h-screen">
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                    src="../../public/assets/home-img.jpg"
                    alt="Delicious meal from a local restaurant"
                    className="w-full h-auto object-cover rounded-3xl"
                />
            </div>
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4 text-yellow-500">Discover Your Next Favorite Meal</h1>
                <p className="text-lg text-white">
                    Explore the best restaurants near you – from hidden gems to local hotspots.
                    Find menus, reviews, and more, all in one place. Hungry? Let’s dig in!
                </p>
            </div>
        </div>
    );
};

export default Home1;