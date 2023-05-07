import React from 'react'
import Calendar from '../components/Calendar'

function Home() {

    // useEffect(() => {
    //     document.title = "Ta com quem?"
    // }, [])

    return (
        <div>
            <Calendar month={4} year={2023} />
        </div>
    )
}

export default Home