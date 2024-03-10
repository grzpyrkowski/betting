import {Outlet} from "react-router-dom";

export default function Layout() {

    const HeaderButton = (props) => {
        return (
            <button className="p-2 text-2xl mx-2 uppercase">{props.value}</button>
        )
    }

    return (
        <>
            <header className="sticky w-full h-14 top-0 z-10">
                <div className="float-left mx-7">
                    <HeaderButton value={"Dark mode"}/>
                </div>
                <div className="float-right mx-7">
                    <HeaderButton value={"Login"}/>
                    <HeaderButton value={"Register"}/>
                </div>
            </header>
            <main className="bg-slate-700">
                <Outlet />
            </main>
            <footer className="h-72 flex">
                <div className="w-1/3 border-slate-900 my-6 border-r-2">
                    <div className="absolute m-auto">
                        <span className="p-auto">asdasdasd</span>
                    </div>
                </div>
                <div className="w-2/3">
                    <div>
                        <span className="p-auto">asdasdasd</span>
                    </div>
                </div>
            </footer>
        </>
    )
}