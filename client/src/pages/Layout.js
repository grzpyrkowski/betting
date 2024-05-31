import {Link, Outlet} from "react-router-dom";
import facebook from "../data/layout/facebook.png";
import instagram from "../data/layout/instagram.png";
import twitter from "../data/layout/twitter.png";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import bezkolor from "../data/layout/bezkolor.png";
import kolor from "../data/layout/kolor.png";
import duze from "../data/layout/duze.png";

export default function Layout() {
    const { login, register, logout, isAuthenticated, getPermissions } = useKindeAuth();

    const FooterButton = (props) => {
        if (props.url) {
            return (
                <div className="my-3">
                    <span className="top-0 bottom-0 my-auto ml-3 flex">
                        <img src={props.url} alt={props.value} className="mr-3"/>
                        {props.value}
                    </span>
                </div>
            );
        } else {
            return (
                <div className="my-3">
                    <p className="p-auto">{props.value}</p>
                </div>
            );
        }
    }

    return (
        <>
            <header className="sticky w-full top-0">
                <div className="header-btns z-10 mx-auto flex place-content-between">
                    <div>
                    <button><Link to={'/scores'}>Scores</Link></button>
                    <button><Link to={'/matches'}>Matches</Link></button>
                    </div>
                    <button>
                        <Link to={'/'}>
                            <img className="" src={duze}  alt="s"/>
                        </Link>
                    </button>
                    {isAuthenticated ?
                        <div>
                            {
                                getPermissions().orgCode === "org_5f796b31434" ?
                                    <button><Link to={'/admin'}>Admin</Link></button>
                                    : <></>
                            }
                            <button><Link to={'/profile'}>Profile</Link></button>
                            <button onClick={logout}>Log Out</button>
                        </div> :
                        <div>
                            <button onClick={register}>Register</button>
                            <button onClick={login}>Log In</button>
                        </div>
                    }
                </div>
            </header>
            <Outlet/>
            <footer className="mt-8 bg-slate-600">
                <div className="footer-btns mx-auto flex py-8">
                <div className="w-1/2 border-black border-r-2">
                        <FooterButton url={facebook} value="Facebook"/>
                        <FooterButton url={instagram} value="Instagram"/>
                        <FooterButton url={twitter} value="Twitter"/>
                    </div>
                    <div className="w-1/2 px-10">
                        <FooterButton value="Policy"/>
                        <FooterButton value="FAQ"/>
                        <FooterButton value="Contact"/>
                    </div>
                </div>
            </footer>
        </>
    );
}