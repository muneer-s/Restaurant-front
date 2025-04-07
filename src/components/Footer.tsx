
const Footer = () => {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto text-center">

                <div className="mb-8">

                    <div className="flex justify-center items-center mb-4">
                        <img
                            src="../../assets/l-4.png"
                            alt="Website Logo"
                            className="w-40 h-12 object-contain"
                        />
                    </div>


                    <p className="text-sm max-w-xl mx-auto">
                        Savor the best dining experiences with our curated restaurant selection. Whether you’re craving a gourmet feast or a cozy meal, explore our diverse range of eateries – from upscale bistros to charming local gems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <h4 className="text-lg font-semibold mb-3">Our Links</h4>
                        <ul className="space-y-2">


                            <li>
                                <a href="/" className="hover:text-gray-400">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about"
                                    className="hover:text-gray-400"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("about-us");
                                    }}>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#contact"
                                    className="hover:text-gray-400"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("feedback");
                                    }}
                                >
                                    Feedbacks
                                </a>
                            </li>
                            <li>
                                <a href="#services"
                                    className="hover:text-gray-400"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("Services");
                                    }}
                                >
                                    How It Works
                                </a>
                            </li>


                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3">Other Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#faq" className="hover:text-gray-400">FAQ</a></li>
                            <li><a href="#support" className="hover:text-gray-400">Support</a></li>
                            <li><a href="#privacy" className="hover:text-gray-400">Privacy Policy</a></li>
                            <li><a href="#terms" className="hover:text-gray-400">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3">Mail</h4>
                        <p><a href="mailto:2wheeleee@gmail.com" className="hover:text-gray-400">restaurante@gmail.com</a></p>

                        <h4 className="text-lg font-semibold mt-4">Location</h4>
                        <p>Kerala</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3">Call Now</h4>
                        <p><a className="hover:text-gray-400">4400-258-6324</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;