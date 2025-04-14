

import image3 from "../../public/assets/3.jpg"
const Home2 = () => {
    return (
        <div className="bg-black flex flex-col md:flex-row min-h-screen">

            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4 text-yellow-500">Find Your Perfect Bite</h1>
                <p className="text-lg text-white">
                    Uncover top restaurants nearby – from cozy favorites to trending spots.
                    Browse menus, ratings, and more, all here for you. Ready to eat? Dive in!
                </p>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                    src={image3}
                    alt="Delicious meal from a local restaurant"
                    className="w-full h-auto object-cover rounded-3xl"
                />
            </div>

        </div>
    )
}

export default Home2