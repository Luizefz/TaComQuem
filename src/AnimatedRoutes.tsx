import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";


function AnimatedRoutes() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/">
                <Route index element={<Home />} />
            </Route>

            {/* <Route path="*" element={<NaoEncontrada />} /> */}
        </Routes>
    )
}

export default AnimatedRoutes