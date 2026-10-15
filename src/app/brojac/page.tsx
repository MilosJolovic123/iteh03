"use client";
import React, { useEffect } from "react";

interface CardProps {
    title: string;
    color: string;
}

const Card = (props: CardProps) => {
    return <div className={`${props.color} h-[20vh]`}>{`${props.title}`}</div>
}

export default function Brojac(){

    const [count, setCount] = React.useState(0);
    const [counterOver20, setCounterOver20] = React.useState(false);

    useEffect(()=>{
        setCounterOver20(count > 20);

    },[count]);


    /*
    useEffect(() => {
    const socket = new WebSocket(`wss://server/chat/${roomId}`);

    return () => socket.close();
},  [roomId]);
    */

return (
<div className={"bg-blue-500 text-white h-[90vh]"}>
    <p className={"text-[32px]"}>Brojac: {count}</p>
    <button 
    className={"bg-amber-300"}
    onClick={()=>{setCount(prev => prev + 1)}}>
        Povecaj brojac
    </button>
    {counterOver20 && <p className={"text-[32px]"}>Brojac je veci od 20!</p>}

    <Card color={"bg-red-500"} title="Crvena"/>
    <Card color={"bg-green-500"} title="Zelena"/>
    <Card color={"bg-yellow-500"} title="Zuta"/>

</div>
);}
