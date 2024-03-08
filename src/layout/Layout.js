
export default function Layout() {

    const HeaderButton = (props) => {
        return (
            <button className="p-2 text-2xl mx-2 uppercase">{props.value}</button>
        )
    }

    return (
        <header className="bg-slate-800 absolute w-full top-0">
            <div className="float-left mx-7">
                <HeaderButton value={"Dark mode"}/>
            </div>
            <div className="float-right mx-7">
                <HeaderButton value={"Login"}/>
                <HeaderButton value={"Register"}/>
            </div>
        </header>
    )
}