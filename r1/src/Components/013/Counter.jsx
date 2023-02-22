import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"
import Fenix from "./Fenix";

function Counter() {

    const [count, setCount] = useState(10);
    const [stars, setStars] = useState('');

    const a = useRef(1);
    const start = useRef(false);

    
    useEffect(() => {

        if (start.current) {
            console.log('count changed');
        } else {
            start.current = true;
        };

    }, [count]);

    useEffect(() => {
        setStars(''.padStart(count, '*'))
    }, [count, stars])

    const add = _ => {
        setCount(c => c + 1);
        //setStars(''.padStart(count, '*'));
    }
    const rem = _ => {
        setCount(c => c - 1);
        //setStars(''.padStart(count, '*'));
    }


    const addToVar = _ => {
        console.log(++a.current);
    }


    return (
        <>
        <h1>{count}</h1>
        <h2>{stars}</h2>
        {
            count > 15 ? <Fenix/> : null
        }
        <div className="sq-bin">
            <button className="blue" onClick={add}>+1</button>
            <button className="red" onClick={rem}>-1</button>
            <button className="coral" onClick={addToVar}>+1</button>
        </div>
        </>
    )
}

export default Counter;