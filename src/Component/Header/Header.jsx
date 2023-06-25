
const Header = () => {
    const backgroundImg = 'https://i.ibb.co/nQJmKZm/15.jpg'
    const headerLogo = 'https://i.ibb.co/7C3xftg/logo1.png'
    return (
        <div style={{
            backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '70px'
        }} className="flex justify-center" >
            <div className="flex items-center">
                <img className="w-[40px] mr-2" src={headerLogo} />
                <h1 className="text-3xl font-bold">Espresso Emporium1</h1>
            </div>
        </div>
    );
};

export default Header;