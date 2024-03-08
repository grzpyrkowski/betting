import banner from "../layout/banner.jpg";

export default function LandingPage() {

    const MainButton = (props) => {
        return (
            <button className="text-5xl mx-5 uppercase">{props.value}</button>
        )
    }

    return (
        <main className="">
            <div className="relative align-middle top-96 flex">
                <MainButton value="Bets"/>
                <MainButton value="Scores"/>
            </div>
            <img className="w-full" src={banner} alt="background-banner"/>
        </main>
    )
}
