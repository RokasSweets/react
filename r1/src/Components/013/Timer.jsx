import { useEffect } from "react";
import { useState } from "react"

function Timer() {

    const [seconds, setSeconds] = useState(0);

    //setInterval(() => setSeconds(s => s + 1), 1000);

    useEffect(() => {
        const timerId = setInterval(() => setSeconds(s => s + 1), 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="sq-bin">
            <div className="sq" style={{
                backgroundColor: '#9adc3270',
                borderColor: '#9adc32',
            }}>
                {seconds}

            </div>
        </div>
    )

}

export default Timer;