import React from 'react';
import ProductCard from '../VideoCard';
import { css } from "./Main.css";
export default function Main() {
return (
    <>
        <ProductCard
            videoURL="https://www.example.com/video1.mp4"
            onPlay={() => console.log("Playing Apple Pie video")}
        />
        <ProductCard
            videoURL="https://www.example.com/video2.mp4"
            onPlay={() => console.log("Playing Lemon Meringue Pie video")}
        />
        <ProductCard
            videoURL="https://www.example.com/video3.mp4"
            onPlay={() => console.log("Playing Apple Pie video")}
        />
        <ProductCard
            videoURL="https://www.example.com/video4.mp4"
            onPlay={() => console.log("Playing Lemon Meringue Pie video")}
        />
        <ProductCard
            videoURL="https://www.example.com/video5.mp4"
            onPlay={() => console.log("Playing Apple Pie video")}
        />
        <ProductCard
            videoURL="https://www.example.com/video6.mp4"
            onPlay={() => console.log("Playing Chocolate Cake video")}
        />
    </>
);
 }