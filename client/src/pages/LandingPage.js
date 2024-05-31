import arrow from "../data/landing-page/arrow.png";
import banner from "../data/landing-page/banner.jpg";

export default function LandingPage() {

    const InfoPanel = (props) => {
        return (
            <div className="my-3 mx-0.5 flex bg-slate-600 p-5 shadow-slate-500 shadow-fullShadow-3">
                <span className="text-center left-0 right-0 mx-auto">{props.content}</span>
            </div>
        );
    }

    return (
        <>
            <div className="mx-auto flex place-content-center">
                <img className="banner" src={banner} alt="background-banner"/>
            </div>
            <main className="mt-8 mx-auto">
                <div className="font-inter">
                    <InfoPanel content="Create a free account or login if you have one already"/>
                    <img className="mx-auto" src={arrow} alt="down-arrow"/>

                    <InfoPanel content="Go to 'matches' and bet"/>
                    <img className="mx-auto" src={arrow} alt="down-arrow"/>

                    <InfoPanel content="Check scores and compare to other players!"/>
                </div>
            </main>
        </>
    );
}
