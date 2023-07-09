import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

function RequireAuth({ children }) {
    let location = useLocation();
    let [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <p>pleace wait</p>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    

    return children;
}

export default RequireAuth;