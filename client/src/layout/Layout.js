import {Outlet} from "react-router-dom";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";


export default function Layout() {

    const HeaderButton = (props) => {
        return (
            <button className="p-2 md:mx-2 xxl:m-2 4k:m-4 uppercase">{props.value}</button>
        )
    }

    const FooterButton = (props) => {
        if (props.url) {
            return (
                <div className="flex my-1 md:my-2 lg:my-5 xl:my-8 xxl:my-12 4k:my-16">
                    <img src={props.url} alt={props.value} className="w-1/12 max-sm:w-2/12"/>
                    <span className="top-0 bottom-0 my-auto ml-3">{props.value}</span>
                </div>
            )
        } else {
            return (
                <div className="flex my-5 lg:my-8 xl:my-14 xxl:my-20 4k:my-24">
                    <p className="p-auto ">{props.value}</p>
                </div>
            )
        }
    }

    return (
        <>
            <header className="sticky w-full h-10 md:h-14 xxl:h-20 4k:h-32 top-0 bg-slate-800 z-10">
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
            <footer className="h-1/6 mt-8 max-md:mt-28 bg-slate-800">
                <div className="w-3/4 mx-auto flex">
                    <div className="w-1/2 border-slate-900 my-5 ml-5 max-sm:pl-0 border-r-2">
                        <FooterButton url={facebook} value="Facebook"/>
                        <FooterButton url={instagram} value="Instagram"/>
                        <FooterButton url={twitter} value="X"/>
                    </div>
                    <div className="w-1/2 px-10">
                        <FooterButton value="Policy"/>
                        <FooterButton value="FAQ"/>
                        <FooterButton value="Contact"/>
                    </div>
                </div>
            </footer>
        </>
    )
}