import img from "../../images/profile.png"
const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 mx-4 border-b-2">
            <h1 className="text-4xl font-bold">Hello from header</h1>
            <img src={img} alt="" />
        </header>
    );
};

export default Header;