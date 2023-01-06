import { useSelector } from "react-redux";
import { Navigate } from "react-router"

const GuardRoute = () => {
    let { token } = useSelector((state) => state.auth)

    if (token) {
        return children;
    }

    return <Navigate to="/" />;
}

export default GuardRoute;