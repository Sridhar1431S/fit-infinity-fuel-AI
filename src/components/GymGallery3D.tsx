
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GymGallery3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a cube with gym photos
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const materials = [
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1534438327276-14e5300c3a48')}),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')}),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e')}),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1571902943202-507ec2618e8f')}),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1576678927484-cc907957088c')}),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1534438327276-14e5300c3a48')})
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Add glow effect
    const glowGeometry = new THREE.BoxGeometry(3.2, 3.2, 3.2);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x88ff88,
      transparent: true,
      opacity: 0.2
    });
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowMesh);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      glowMesh.rotation.x += 0.005;
      glowMesh.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-[400px] my-8" />;
};

export default GymGallery3D;
