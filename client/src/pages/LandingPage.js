import arrow from "../data/landing-page/arrow.png";
import banner from "../data/landing-page/banner.jpg";

export default function LandingPage() {

    const InfoPanel = (props) => {
        return (
            <>
            <div className="panel mt-2 mb-1.5 flex bg-slate-600 p-3 shadow-slate-500 shadow-fullShadow-3">
                <span className="text-center mx-auto">{props.content}</span>
            </div>
            </>
        );
    }

    return (
        <>
            <div className=" flex place-content-center">
                <img src={banner} alt="background-banner"/>
            </div>
            <main>
                <InfoPanel content="Create a free account or login if you have one already"/>
                <img className="down-arrow" src={arrow} alt="down-arrow"/>
                <InfoPanel content="Get your first 50 points on 'profile' site"/>
                <img className="down-arrow" src={arrow} alt="down-arrow"/>
                <InfoPanel content="Go to 'matches', choose a match and bet"/>
                <img className="down-arrow" src={arrow} alt="down-arrow"/>
                <InfoPanel content="Check scores and compare to other players"/>
            </main>
        </>
    );
}
