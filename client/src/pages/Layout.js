import {Link, Outlet} from "react-router-dom";
import facebook from "../data/layout/facebook.png";
import instagram from "../data/layout/instagram.png";
import twitter from "../data/layout/twitter.png";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import logo from "../data/layout/logo.png";

export default function Layout() {
    const { login, register, logout, isAuthenticated, getPermissions } = useKindeAuth();

    const FooterButton = (props) => {
        return (
            <div className="my-3">
                <span className="top-0 bottom-0 mx-8 flex items-center">
                    <img src={props.url} alt={props.value} className="mr-1"/>
                    {props.value}
                </span>
            </div>
        );
    }

    return (
        <>
            <header className="sticky top-0">
                <div className="header-btns z-10 mx-auto flex place-content-evenly items-center">
                    <div>
                        <button className="btn"><Link to={'/scores'}>Scores</Link></button>
                        <button className="btn"><Link to={'/matches'}>Matches</Link></button>
                    </div>
                    <button className="logo-btn">
                        <Link className="flex place-content-center" to={'/'}>
                            <img className="w-1/2" src={logo} alt="s"/>
                        </Link>
                    </button>
                    {isAuthenticated ?
                        <div>
                            {
                                getPermissions().orgCode === "org_5f796b31434" ?
                                    <button className="btn"><Link to={'/admin'}>Admin</Link></button>
                                    : <></>
                            }
                            <button className="btn"><Link to={'/profile'}>Profile</Link></button>
                            <button className="btn" onClick={logout}>Log Out</button>
                        </div> :
                        <div>
                            <button className="btn" onClick={register}>Register</button>
                            <button className="btn" onClick={login}>Log In</button>
                        </div>
                    }
                </div>
            </header>
            <Outlet/>
            <footer className="mt-20 bg-slate-600 relative -mb-96">
                <div className="footer-btns mx-auto p-8">
                    <div className="border-slate-800 flex place-content-center">
                            <FooterButton url={facebook} value="Facebook"/>
                            <FooterButton url={instagram} value="Instagram"/>
                            <FooterButton url={twitter} value="Twitter"/>
                    </div>
                </div>
            </footer>
        </>
    );
}