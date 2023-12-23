'use client'

import React from "react";
import Image from "next/image";
import '@/app/globals.css';
import changeSkill from "@/functions/changeSkill";

const Skill = ({ url, index }) => {
    return (
        <Image className='skill-icon' src={url} width={50} height={50} onClick={() => changeSkill(index)}/>
    );
};

export default Skill;