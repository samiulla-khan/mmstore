import '../App.css';
import { NavLink, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

function Header({isLoggedIn, setIsLoggedIn}) {
    const {cartItems,clearCart} = useContext(ProductContext);
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            navigate(`/search?q=${search}`);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        clearCart();
        
        localStorage.removeItem("auth");
        localStorage.removeItem("cart");

        navigate('/');
    };

    const user = JSON.parse(
        localStorage.getItem("auth")
    );

    const firstLetter = user?.email.charAt(0).toUpperCase();

    return (
        <div className="header-section fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-md">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav mx-2 gap-4">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/mens-clothing">Men</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/womens-clothing">Women</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/electronics">Electronics</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/jewelery">Jewelery</NavLink>
                        </li>
                    </ul>
                    <div className="px-2 px-sm-3">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" search={search} onChange={(e)=>setSearch(e.target.value)} onKeyDown={handleSearch} />
                    </div>
                    <div className="mx-2">
                        
                        {
                            isLoggedIn ?<div className='login-user-icon-block'>
                                <div>
                                    <p className='user-icon' style={{margin:0}}>{firstLetter} </p>
                                </div>
                                |
                                <div>
                                    <button className='btn-logout' onClick={handleLogout}> Logout </button>
                                </div>
                            </div>  : <NavLink className="nav-link d-inline" to="/login">Login</NavLink>
                        }
                    </div>
                    <div className="mx-2">
                        <NavLink className="nav-link d-inline" to="/cart">Cart</NavLink>
                        <span className="mx-2">
                            {
                                cartItems.length > 0 ? cartItems.length : 0
                            }
                        </span>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;