
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const GymGallery3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene with improved rendering
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Loading manager to track progress
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => setIsLoaded(true);

    // Create a cube with gym photos - higher quality images
    const textureLoader = new THREE.TextureLoader(loadingManager);
    const gymPhotos = [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48', // Front
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438', // Back
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e', // Top
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f', // Bottom
      'https://images.unsplash.com/photo-1576678927484-cc907957088c', // Right
      'https://images.unsplash.com/photo-1571388208497-71bedc66e932'  // Left
    ];

    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const materials = gymPhotos.map(photo => 
      new THREE.MeshBasicMaterial({ 
        map: textureLoader.load(photo)
      })
    );

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Enhanced glow effect with multiple layers
    const createGlow = (size: number, color: number, opacity: number) => {
      const glowGeometry = new THREE.BoxGeometry(size, size, size);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: opacity
      });
      return new THREE.Mesh(glowGeometry, glowMaterial);
    };

    // Create multiple glow layers for a more dramatic effect
    const primaryGlow = createGlow(3.2, 0x88ff88, 0.15);
    const secondaryGlow = createGlow(3.4, 0x4cafff, 0.1);
    const tertiaryGlow = createGlow(3.6, 0xff9850, 0.05);
    
    scene.add(primaryGlow);
    scene.add(secondaryGlow);
    scene.add(tertiaryGlow);

    // Add ambient light to enhance the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Position camera
    camera.position.z = 5;

    // Store mouse/touch position
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    // Handle mouse/touch events for interaction
    const handleMouseDown = (event: MouseEvent | TouchEvent) => {
      setIsInteracting(true);
      
      if ('touches' in event) {
        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
      } else {
        mouseX = event.clientX;
        mouseY = event.clientY;
      }
    };

    const handleMouseMove = (event: MouseEvent | TouchEvent) => {
      if (!isInteracting) return;
      
      let clientX, clientY;
      
      if ('touches' in event) {
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
      } else {
        clientX = event.clientX;
        clientY = event.clientY;
      }
      
      const deltaX = clientX - mouseX;
      const deltaY = clientY - mouseY;
      
      targetRotationY += deltaX * 0.01;
      targetRotationX += deltaY * 0.01;
      
      mouseX = clientX;
      mouseY = clientY;
    };

    const handleMouseUp = () => {
      setIsInteracting(false);
    };

    // Add interaction event listeners
    const element = containerRef.current;
    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('touchstart', handleMouseDown, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove, { passive: true });
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);

    // Animation with smooth rotation
    const animate = () => {
      requestAnimationFrame(animate);

      // Apply smooth rotation
      if (!isInteracting) {
        targetRotationY += 0.003;
      }
      
      cube.rotation.x += (targetRotationX - cube.rotation.x) * 0.05;
      cube.rotation.y += (targetRotationY - cube.rotation.y) * 0.05;
      
      // Synchronize glow rotation with cube
      primaryGlow.rotation.x = cube.rotation.x;
      primaryGlow.rotation.y = cube.rotation.y;
      secondaryGlow.rotation.x = cube.rotation.x * 0.9;
      secondaryGlow.rotation.y = cube.rotation.y * 0.9;
      tertiaryGlow.rotation.x = cube.rotation.x * 0.8;
      tertiaryGlow.rotation.y = cube.rotation.y * 0.8;

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
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      
      // Clean up objects
      scene.remove(cube);
      scene.remove(primaryGlow);
      scene.remove(secondaryGlow);
      scene.remove(tertiaryGlow);
      geometry.dispose();
      materials.forEach(material => material.dispose());
      
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] my-8">
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing relative"
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl">
            <div className="w-12 h-12 border-4 border-fitness-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      <div className="absolute -inset-4 bg-gradient-to-r from-fitness-green/20 via-fitness-blue/20 to-fitness-orange/20 rounded-3xl blur-xl -z-10"></div>
      <div className="absolute text-center bottom-2 left-0 right-0 text-sm text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full max-w-xs mx-auto py-1 px-3">
        Drag to rotate the cube
      </div>
    </div>
  );
};

export default GymGallery3D;
