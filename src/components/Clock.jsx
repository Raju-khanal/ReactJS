import { useState, useEffect } from "react"
import style from "./Clock.module.css"
import "./Clock.css"
function Clock() {
    const [running, setRunning] = useState(false);
    const [color, setColor] = useState("red");
    const [time, setTime] = useState(0);
    useEffect(() => {
        let timing;
        if (running) {
            timing = setInterval(() => {
                setTime(new Date().toLocaleTimeString());
                const colors = ["red", "green", "blue", "pink", "black", "brown"];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                setColor(randomColor);
            }, 1000);
        }
        return () => { clearInterval(timing); }
    }, [running]);

    return (
        <>
            <h2 className={style.h2} style={{ color: color }}>{time}</h2>
            <button onClick={() => setRunning(true)}>start</button >
            <button onClick={() => setRunning(false)}>Stop</button>

        </>
    )
}
export default Clock;