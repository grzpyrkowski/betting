import banner from "./banner.jpg";
import arrow from "./down_arrow.svg";
import football from "./football.jpg";

export default function LandingPage() {

    const MainButton = (props) => {
        return (
            <button
                className="text-5xl m-auto uppercase bg-slate-700 p-3 rounded-2xl border-amber-100 border-2">
                {props.value}
            </button>
        )
    }

    const InfoPanelLeft = () => {
        return (
            <section className="mx-72 py-10">
                <div className="flex bg-slate-600 p-10 rounded-xl shadow-slate-500 shadow-fullShadow-3">
                    <img src={football} alt="football"/>
                    <div className="px-10 text-4xl relative my-auto">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum augue et luctus finibus. Sed vitae nunc scelerisque, mattis dolor non, blandit metus.</span>
                    </div>
                </div>
            </section>
        )
    }

    const InfoPanelRight = () => {
        return (
            <section className="mx-72 py-10">
                <div className="flex bg-slate-600 p-10 rounded-xl shadow-slate-500 shadow-fullShadow-3">
                    <div className="px-10 text-4xl relative my-auto">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum augue et luctus finibus. Sed vitae nunc scelerisque, mattis dolor non, blandit metus.</span>
                    </div>
                    <img src={football} alt="football"/>
                </div>
            </section>
        )
    }

    return (
        <>
            <div className="relative mb-10">
                <div className="absolute top-0 left-0 bottom-1/4 right-0 flex">
                    <MainButton value="Matches"/>
                    <MainButton value="Scores"/>
                </div>
                <div className="absolute left-0 bottom-0 right-0 flex">
                    <div className="m-auto">
                        <MainButton value="Read more"/>
                        <img className="m-auto cursor-pointer" src={arrow} alt="down-arrow"/>
                    </div>
                </div>
                <img className="w-full" src={banner} alt="background-banner"/>
            </div>
            <InfoPanelLeft />
            <InfoPanelRight />
            <InfoPanelLeft />
            <InfoPanelRight />
        </>
    )
}
