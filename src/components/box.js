'use client'

import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const HomeBox = () => {
    const ref = useRef(null);

    useEffect(() => {
        const width = window.innerWidth;
        const height = 2 * window.innerHeight;

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
            camera.position.z = 2;
            camera.position.y = -.8;
        var renderer = new THREE.WebGLRenderer();
            renderer.setSize(width, height)

        ref.current && ref.current.append(renderer.domElement);

        // const geometry = new THREE.BoxGeometry(3, 3, 3);
        const geometry = new THREE.SphereGeometry()
        const material = new THREE.MeshNormalMaterial({ wireframe: true });
        const cube = new THREE.Mesh(geometry, material);

        scene.add(cube);

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera)
        };

        animate();

        // renderer.render(scene, camera);
    });
    
    return(
        <div ref={ref}/>
    )
}

export default HomeBox;