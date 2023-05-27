import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { CalendarProvider } from './common/context/Calendar'
import AnimatedRoutes from './AnimatedRoutes';

function Routes() {
    return (
        <CalendarProvider>
            <Router>
                <AnimatedRoutes />
            </Router>
        </CalendarProvider>
    )
}

export default Routes