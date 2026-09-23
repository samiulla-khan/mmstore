import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";


const Login = ({ setIsLoggedIn }) => {
    const demoUser = {
        email: "sami@test.com",
        password: "sami",
    };

    const [email, setEmail] = useState('');
    const [pwd, setPWD] = useState('');

    const navigate = useNavigate();
    const { cartItems } = useContext(ProductContext);


    const handleLogin = (e) => {
        e.preventDefault();

        if (
            email.trim() === demoUser.email &&
            pwd.trim() === demoUser.password
        ) {
            setIsLoggedIn(true);

            localStorage.setItem(
                "auth",
                JSON.stringify({
                    isLoggedIn: true,
                    email
                })
            );

            localStorage.setItem(
                "cart",
                JSON.stringify(cartItems)
            );

            navigate("/");
        } else {
            alert("Please enter correct credentials");
        }
    };

    return (
        <div className="container main-content">
            <div className="login-container">
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={pwd} onChange={(e) => setPWD(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-view-product">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Login;