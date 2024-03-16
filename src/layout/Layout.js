import {Outlet} from "react-router-dom";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";


export default function Layout() {

    const HeaderButton = (props) => {
        return (
            <button className="p-2 md:mx-2 uppercase">{props.value}</button>
        )
    }

    return (
        <>
            <header className="sticky w-full h-10 md:h-14 top-0 bg-slate-800 z-10">
                <div className="float-left mx-7 max-sm:mx-2">
                    <HeaderButton value={"Dark mode"}/>
                </div>
                <div className="float-right mx-7 max-sm:mx-2">
                    <HeaderButton value={"Login"}/>
                    <HeaderButton value={"Register"}/>
                </div>
            </header>
            <main className="w-5/6 mx-auto">
                <Outlet />
            </main>
            <footer className="h-1/6 max-md:mt-28 mt-8 bg-slate-800 flex">
                <div className="w-1/2 border-slate-900 m-5 px-5 max-sm:pl-0 border-r-2">
                    <div>
                        <div className="flex"><img className="w-1/12 max-sm:w-2/12" src={facebook} alt="facebook"/><span className="top-0 bottom-0 my-auto ml-3">Facebook</span></div>
                        <div className="flex"><img className="w-1/12 max-sm:w-2/12" src={twitter} alt="twitter"/><span className="top-0 bottom-0 my-auto ml-3">X</span></div>
                        <div className="flex"><img className="w-1/12 max-sm:w-2/12" src={instagram} alt="instagram"/><span className="top-0 bottom-0 my-auto ml-3">Instagram</span></div>
                    </div>
                </div>
                <div className="w-1/2 px-5 flex">
                    <div className="top-0 bottom-0 my-auto">
                        <p className="p-auto xl:my-5">Policy</p>
                        <p className="p-auto xl:my-5">FAQ</p>
                        <p className="p-auto xl:my-5">Contact</p>
                    </div>
                </div>
            </footer>
        </>
    )
}