
const Banner = () => {
    const bannerImg = 'https://i.ibb.co/YbDFf1M/3.png'

    return (
        <div className="w-full h-[450px]"
            style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex">
                <div className="col-md-6  w-[50%]"></div>
                <div className="col-md-6 w-[50%] h-[450px] flex items-center ">
                    <div className="w-[90%]">
                        <h1 className="text-4xl font-bold ">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="text-lg pt-3">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <p className="text-2xl font-bold inline-block bg-first mt-3 rounded-sm ">
                            <button className="px-3 text-third">
                                 Learn More
                            </button>
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;