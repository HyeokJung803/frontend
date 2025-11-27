// [CanvasWrapper.jsx] 파일 전체 내용 (변경 없음 - 배경색 및 조명 유지)

import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber'; 
import { OrbitControls, Html } from '@react-three/drei'; 
import PerfumeVault from './PerfumeVault'; 
import * as THREE from 'three'; 


export default function CanvasWrapper({ recipes, onSelectPerfume, selectedId, onDeactivate }) { 
    
    const dpr = Math.min(window.devicePixelRatio, 2); 

    function SceneEffects({ selectedId }) { 
        const { invalidate } = useThree();
        const spotlightRef = useRef();

        useFrame(() => {
            if (spotlightRef.current) {
                spotlightRef.current.intensity = selectedId ? 500 : 0; 
            }
        });

        const controlsRef = useRef();
        useEffect(() => {
            invalidate(); 
        }, [selectedId, invalidate]);

        return (
            <>
                <spotLight 
                    ref={spotlightRef}
                    position={[2.5, 4, 2]} 
                    angle={0.5} 
                    penumbra={1} 
                    intensity={0} 
                    castShadow 
                    decay={2}
                />
                
                 <OrbitControls 
                    ref={controlsRef}
                    enablePan={false} 
                    minPolarAngle={Math.PI / 4} 
                    maxPolarAngle={Math.PI / 1.5} 
                    minDistance={2} 
                    maxDistance={8} 
                    onChange={invalidate} 
                />
            </>
        );
    }

    function CanvasContent({ recipes, onSelectPerfume, selectedId }) {
        
        return (
            <>
                {/* 배경색은 현재의 따뜻한 Light Taupe 톤으로 유지 */}
                <color attach="background" args={['#CFC7B9']} /> 
                
                {/* 조명 강도도 유지 */}
                <ambientLight intensity={selectedId ? 0.6 : 1.2} /> 
                <directionalLight position={[0, 10, 5]} intensity={selectedId ? 0.3 : 0.6} /> 
                
                <PerfumeVault 
                    recipes={recipes} 
                    onSelectPerfume={onSelectPerfume} 
                    selectedId={selectedId} 
                />
                
                <SceneEffects selectedId={selectedId} /> 
            </>
        );
    }


    return (
        <Canvas
            dpr={dpr} 
            gl={{ antialias: true }} 
            frameloop={selectedId ? "always" : "demand"} 
            camera={{ position: [0, 2, 6], fov: 50 }} 
            shadows 
            // 캔버스 배경 스타일도 통일
            style={{ background: '#CFC7B9', borderRadius: '10px' }}
        >
            <Suspense fallback={null}>
                <CanvasContent 
                    recipes={recipes} 
                    onSelectPerfume={onSelectPerfume} 
                    selectedId={selectedId} 
                />
            </Suspense>
        </Canvas>
    );
}