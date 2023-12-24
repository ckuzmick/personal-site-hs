'use client'

import React from "react";
import Image from "next/image";
import '@/app/globals.css';

const Skill = ({ url, index, func, alt }) => {
    return (
        <Image className='skill-icon' alt={alt} src={url} width={50} height={50} onClick={() => func(index)}/>
    );
};

export default Skill;