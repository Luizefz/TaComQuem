import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { CalendarProvider } from './common/context/Calendar'
import AnimatedRoutes from './AnimatedRoutes';
import { CardsProvider } from './common/context/Cards';

function Routes() {
    return (
        <CalendarProvider>
            <CardsProvider>
                <Router>
                    <AnimatedRoutes />
                </Router>
            </CardsProvider>
        </CalendarProvider>
    )
}

export default Routes