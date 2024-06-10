import {Link, Outlet} from "react-router-dom";
import facebook from "../data/layout/facebook.png";
import instagram from "../data/layout/instagram.png";
import twitter from "../data/layout/twitter.png";
import logo from "../data/layout/logo.png";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

export default function Layout() {
    const { login, register, logout, isAuthenticated, getPermissions } = useKindeAuth();

    const FooterButton = (props) => {
        return (
                <span className="mx-2 flex items-center">
                    <img className="w-1/4 mr-0.5" src={props.url} alt={props.value} />
                    {props.value}
                </span>
        );
    }

    return (
        <>
            <header className="sticky top-0">
                <div className="header-btns flex place-content-evenly">
                    <div className="small-header-btns">
                        <button className="btn"><Link to={'/matches'}>Matches</Link></button>
                        <button className="btn"><Link to={'/scores'}>Scores</Link></button>
                    </div>
                    <button className="logo-btn">
                        <Link className="flex" to={'/'}>
                            <img className="logo" src={logo} alt="logo"/>
                        </Link>
                    </button>
                    {isAuthenticated ?
                        <div className="small-header-btns">
                            {
                                getPermissions().orgCode === "org_5f796b31434" ?
                                    <button className="btn"><Link to={'/admin'}>Admin</Link></button>
                                    : <></>
                            }
                            <button className="btn"><Link to={'/profile'}>Profile</Link></button>
                            <button className="btn" onClick={logout}>Logout</button>
                        </div> :
                        <div className="small-header-btns">
                            <button className="btn" onClick={register}>Register</button>
                            <button className="btn" onClick={login}>Login</button>
                        </div>
                    }
                </div>
            </header>
            <Outlet/>
            <footer className="mt-14 relative -mb-96 text-sm">
                <div className="footer-btns mx-auto py-6">
                    <div className="border-slate-800 flex place-content-between sm:place-content-evenly">
                        <FooterButton url={facebook} value="Facebook"/>
                        <FooterButton url={instagram} value="Instagram"/>
                        <FooterButton url={twitter} value="Twitter"/>
                    </div>
                </div>
            </footer>
        </>
    );
}