import Image from 'next/image';
import React from 'react';

function Skill(image, alt) {
    return (
        <div>
            <Image src={image} alt={alt} width={100} height={100} />
        </div>
    );
}

export default Skill;
