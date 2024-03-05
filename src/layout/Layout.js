import banner from "./baner.jpg"

export default function Layout() {

    return (
        <>
            <header>
                <img className="banner" src={banner} alt="background-baner" style={{maxWidth: "100%"}}/>
                <div className="gradient">
                </div>
                <nav className="nav-header">
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}