import {Link, Outlet} from "react-router-dom";
import facebook from "../data/layout/facebook.svg";
import twitter from "../data/layout/twitter.svg";
import instagram from "../data/layout/instagram.svg";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

export default function Layout() {
    const { login, register, logout, isAuthenticated, getPermissions } = useKindeAuth();

    const FooterButton = (props) => {
        if (props.url) {
            return (
                <div className="my-5 lg:my-8 xl:my-10 xxl:my-14 4k:my-20">
                    <span className="top-0 bottom-0 my-auto ml-3 flex">
                        <img src={props.url} alt={props.value} className="mr-3 max-sm:mr-1.5 w-5 xl:w-7 xxl:w-10"/>
                        {props.value}
                    </span>
                </div>
            );
        } else {
            return (
                <div className="my-5 lg:my-8 xl:my-10 xxl:my-14 4k:my-20">
                    <p className="p-auto">{props.value}</p>
                </div>
            );
        }
    }

    return (
        <>
            <header className="sticky w-full h-12 md:h-14 xl:h-16 xxl:h-20 4k:h-32 top-0 bg-slate-800 z-10 flex place-content-between">
                <div className="float-left mx-7 max-sm:mx-2">
                    <button>Dark mode</button>
                </div>
                <div className="">
                    <Link to={'/'}><button>Main</button> </Link>
                </div>
                <div className="right-0 mx-7 max-sm:mx-2">
                    { isAuthenticated ?
                        <div>
                            {
                                getPermissions().orgCode === "org_5f796b31434" ?
                                    <Link to={'/admin'}><button>Admin</button></Link>
                                    : <></>
                            }
                            <Link to={'/profile'}><button>Profile</button></Link>
                            <button onClick={logout}>Log Out</button>
                        </div> :
                        <div>
                            <button onClick={register}>Register</button>
                            <button onClick={login}>Log In</button>
                        </div>
                    }
                </div>
            </header>
            <main className="w-3/4 mx-auto">
                <Outlet/>
            </main>
            <footer className="mt-8 max-md:mt-28 bg-slate-800">
                <div className="w-3/4 mx-auto flex">
                    <div className="w-1/2 border-slate-900 max-sm:pl-0 border-r-2">
                        <FooterButton url={facebook} value="Facebook"/>
                        <FooterButton url={instagram} value="Instagram"/>
                        <FooterButton url={twitter} value="Twitter"/>
                    </div>
                    <div className="w-1/2 max-md:px-3 px-10">
                        <FooterButton value="Policy"/>
                        <FooterButton value="FAQ"/>
                        <FooterButton value="Contact"/>
                    </div>
                </div>
            </footer>
        </>
    );
}