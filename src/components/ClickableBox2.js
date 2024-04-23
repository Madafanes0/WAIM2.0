import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';


const ClickableBox2 = ({ size = [3, 3, 3], rotationSpeed = 0.0015, images, onClick , }) => {
    const meshRef = useRef();

    const textureMaterials = images.map(image => new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(image) }));

    const geometry = new THREE.BoxGeometry(...size);
    const mesh = new THREE.Mesh(geometry, textureMaterials);

    useFrame(() => {
        meshRef.current.rotation.y += rotationSpeed;
    });

    const handleFaceClick = (faceIndex) => {
        if (onClick) {
            onClick(faceIndex);
        }
    };

    return (
        <Suspense fallback={null}>
            <ambientLight color="#000000" intensity={2} />
            <primitive
                ref={meshRef}
                object={mesh}
                onClick={(event) => {
                    const intersections = event.intersections;
                    if (intersections.length > 0) {
                        const faceIndex = intersections[0].faceIndex;
                        handleFaceClick(faceIndex);
                    }
                }}
            />
        </Suspense>
    );
};

export default ClickableBox2;
