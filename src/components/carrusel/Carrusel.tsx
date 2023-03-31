import React, { useContext, useState } from 'react'
import ThemeContext from "../../context/ThemeContext"
import certificates from "../../assets/json/cetificates.json";
import style from "./Carrusel.module.css";
import { useEffect } from 'react';
import { useRef } from 'react';


export default function Carrusel() {
    
    const { theme } = useContext(ThemeContext);

    const [position, setPosition] = useState(0);

    const imageRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if(position > certificates.length - 2) setPosition(0);
            else setPosition(position + 1);
        },10000)

        return () => {
            clearInterval(interval);
        }
    },[position])

return <div className={`${style.container} ${style[theme]}`}>
        <img className={style.image} ref={imageRef} src={certificates[position]} alt="certificado"/>
  </div>
}
