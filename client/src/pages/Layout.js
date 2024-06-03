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
                <span className="mx-2 flex items-center">
                    <img className="w-1/4 mr-0.5" src={props.url} alt={props.value} />
                    {props.value}
                </span>
        );
    }

    return (
        <>
            <header className="sticky top-0">
                <button className="logo-btn">
                    <Link className="flex place-content-center" to={'/'}>
                        <img className="w-2/5" src={logo} alt="logo"/>
                    </Link>
                </button>
                <div className="header-btns mx-auto flex">
                    <div className="">
                        <button className="btn"><Link to={'/matches'}>Matches</Link></button>
                        <button className="btn"><Link to={'/scores'}>Scores</Link></button>
                    </div>
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
                            <div className="">
                                <button className="btn" onClick={register}>Register</button>
                                <button className="btn" onClick={login}>Log In</button>
                            </div>
                        }
                </div>
            </header>
            <Outlet/>
            <footer className="mt-14 bg-slate-600 relative -mb-96 text-sm">
                <div className="footer-btns mx-auto py-6">
                    <div className="border-slate-800 flex place-content-between">
                        <FooterButton url={facebook} value="Facebook"/>
                        <FooterButton url={instagram} value="Instagram"/>
                        <FooterButton url={twitter} value="Twitter"/>
                    </div>
                </div>
            </footer>
        </>
    );
}