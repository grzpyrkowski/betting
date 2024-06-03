import arrow from "../data/landing-page/arrow.png";
import banner from "../data/landing-page/banner.jpg";

export default function LandingPage() {

    const InfoPanel = (props) => {
        return (
            <>
            <div className="mt-2 mb-1.5 mx-0.5 flex bg-slate-600 p-3 shadow-slate-500 shadow-fullShadow-3">
                <span className="text-center left-0 right-0 mx-auto">{props.content}</span>
            </div>
            </>
        );
    }

    return (
        <>
            <div className="mx-auto flex place-content-center">
                <img className="mt-3" src={banner} alt="background-banner"/>
            </div>
            <main>
                <InfoPanel content="Create a free account or login if you have one already"/>
                <img className="w-1/6 mx-auto" src={arrow} alt="down-arrow"/>
                <InfoPanel content="Get your first 50 points on profile site"/>
                <img className="w-1/6 mx-auto" src={arrow} alt="down-arrow"/>
                <InfoPanel content="Go to 'matches', choose a match and bet"/>
                <img className="w-1/6 mx-auto" src={arrow} alt="down-arrow"/>
                <InfoPanel content="Check scores and compare to other players"/>
            </main>
        </>
    );
}
