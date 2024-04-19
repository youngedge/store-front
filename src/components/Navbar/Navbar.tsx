import './Navbar.css';


export const Navbar = () => {
    return (
        <div className='wrapper'>
            <div className="search">
                <input type="text" placeholder='Search products, supplier, order' />
            </div>
        </div>
    );
}
export default Navbar;