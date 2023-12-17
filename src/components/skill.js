import React from "react";
import Image from "next/image";
import '@/app/globals.css';

const Skill = ({ url }) => {
    return (
        <Image className='skill-icon' src={url} width={50} height={50} />
    );
};

export default Skill;