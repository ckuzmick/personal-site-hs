import React from "react";
import Image from "next/image";
import '@/app/globals.css';

export default function changeSkill({ skillId }) {
    const skillHTML = document.getElementById(skillId);

    skillHTML.classList.add('skill-icon-active');
}