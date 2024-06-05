import {Link} from "react-router-dom";

export default function ErrorBoundary() {
    return (
        <div className="notification mt-48">
            <p>Something unexpected happened :(</p>
            <p className="mb-12">Please come back to</p>
            <Link className="btn scores-panel" to="/">Main site</Link>
        </div>
    )
}