import banner from "../data/landing-page/banner.jpg";
import arrow from "../data/landing-page/down_arrow.svg";
import {Link} from "react-router-dom";

export default function LandingPage() {

    const MainButton = (props) => {
        if (props.link) {
            return (
                <Link to={`/${props.link}`}
                      className="m-auto uppercase max-sm:text-xs bg-slate-700 p-1.5 md:p-3 rounded-2xl border-amber-100 border-2">
                    {props.value}
                </Link>
            )
        } else {
            return (
                <button
                      className="m-auto uppercase max-sm:text-xs bg-slate-700 p-1.5 md:p-3 rounded-2xl border-amber-100 border-2">
                    {props.value}
                </button>
            )
        }
    }

    const InfoPanel = (props) => {
        return (
            <div className="my-3 mx-0.5 flex bg-slate-600 p-5 shadow-slate-500 shadow-fullShadow-3">
                <span className="text-center left-0 right-0 mx-auto">{props.content}</span>
            </div>
        )
    }

    const scrollDown = () => {
        window.scrollTo({
            top: 2000,
            behavior: 'smooth',
        });
    }

    return (
        <>
            <div className="relative mb-8">
                <div className="absolute top-0 left-0 bottom-1/4 right-0 flex">
                    <MainButton value="Matches" link="matches"/>
                    <MainButton value="Scores" link="scores"/>
                </div>
                <div className="absolute left-0 -bottom-1.5 md:bottom-0 right-0 flex">
                    <div className="m-auto" onClick={scrollDown}>
                        <MainButton value="Read more"/>
                        <img className="w-1/3 lg:1/2 m-auto cursor-pointer" src={arrow} alt="down-arrow"/>
                    </div>
                </div>
                <img className="w-full" src={banner} alt="background-banner"/>
            </div>
            <div className="font-inter">
                <InfoPanel content="Create a free account or login if you have one already"/>
                <img className="w-1/12 mx-auto" src={arrow} alt="down-arrow"/>

                <InfoPanel content="Go to 'matches' and bet"/>
                <img className="w-1/12 mx-auto" src={arrow} alt="down-arrow"/>

                <InfoPanel content="Check scores and compare to another players!"/>
            </div>
        </>
    )
}
