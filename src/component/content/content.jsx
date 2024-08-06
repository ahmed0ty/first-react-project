export default function Content() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 text-white content">
            <div className="text-center">
                <h1 className="text-4xl font-semibold">LOCATION</h1>
                <p className="py-5">2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-semibold">AROUND THE WEB</h1>
                <div className="flex justify-center p-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white m-3">
                        <i className="fa-brands fa-facebook text-white text-2xl"></i>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white m-3">
                        <i className="fa-brands fa-twitter text-white text-2xl"></i>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white m-3">
                        <i className="fa-brands fa-linkedin text-white text-2xl"></i>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white m-3">
                        <i className="fa-brands fa-google text-white text-2xl"></i>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-semibold">ABOUT FREELANCER</h1>
                <p className="py-5">
                    Freelance is a free to use, licensed Bootstrap theme created <br /> by Route
                </p>
            </div>
        </div>
    );
}