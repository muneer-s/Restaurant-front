

import image6 from "../../public/assets/6.jpg"

const Home3 = () => {
    return (
        <div className="bg-black flex flex-col md:flex-row min-h-screen">
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                    src={image6}
                    alt="Delicious meal from a local restaurant"
                    className="w-full h-auto object-cover rounded-3xl"
                />
            </div>
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4 text-yellow-500">Savor Every Flavor</h1>
                <p className="text-lg text-white">
                    Discover the tastiest spots around – from bold eats to secret treasures.
                    Menus, reviews, and more await you. Craving something? Let’s feast!
                </p>
            </div>
        </div>)
}

export default Home3