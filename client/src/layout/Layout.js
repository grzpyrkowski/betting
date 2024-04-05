import {Outlet} from "react-router-dom";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

export default function Layout() {

    const HeaderButton = (props) => {
        return (
            <button className="p-3 md:mx-2 xxl:m-2 4k:m-4 uppercase">{props.value}</button>
        )
    }

    const FooterButton = (props) => {
        if (props.url) {
            return (
                <div className="my-5 lg:my-8 xl:my-10 xxl:my-14 4k:my-20">
                    <span className="top-0 bottom-0 my-auto ml-3 flex">
                        <img src={props.url} alt={props.value} className="mr-3 max-sm:mr-1.5 w-5 xl:w-7 xxl:w-10"/>
                        {props.value}
                    </span>
                </div>
            )
        } else {
            return (
                <div className="my-5 lg:my-8 xl:my-10 xxl:my-14 4k:my-20">
                    <p className="p-auto">{props.value}</p>
                </div>
            )
        }
    }

    return (
        <>
            <header className="sticky w-full h-12 md:h-14 xl:h-16 xxl:h-20 4k:h-32 top-0 bg-slate-800 z-10">
                <div className="float-left mx-7 max-sm:mx-2">
                    <HeaderButton value={"Dark mode"}/>
                </div>
                <div className="float-right mx-7 max-sm:mx-2">
                    <HeaderButton value={"Login"}/>
                    <HeaderButton value={"Register"}/>
                </div>
            </header>
            <main className="w-3/4 mx-auto">
                <Outlet />
            </main>
            <footer className="mt-8 max-md:mt-28 bg-slate-800">
                <div className="w-3/4 mx-auto flex">
                    <div className="w-1/2 border-slate-900 max-sm:pl-0 border-r-2">
                        <FooterButton url={facebook} value="Facebook"/>
                        <FooterButton url={instagram} value="Instagram"/>
                        <FooterButton url={twitter} value="X"/>
                    </div>
                    <div className="w-1/2 max-md:px-3 px-10">
                        <FooterButton value="Policy"/>
                        <FooterButton value="FAQ"/>
                        <FooterButton value="Contact"/>
                    </div>
                </div>
            </footer>
        </>
    )
}