const Footer = () => {
    return (
        <footer className="py-4 px-4 md:px-6 mt-6">
            <div className="max-w-6xl mx-auto bg-primary-light px-6 py-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div>
                        <h2 className="font-semibold text-green-900">
                            Warung Q
                        </h2>
                        <p className="text-sm text-green-800">
                            Jl. Merdeka No. 12, Palembang — 0812-3456-7890
                        </p>
                    </div>

                    <p className="text-sm text-green-900">
                        Buka setiap hari 08.00 – 21.00
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;