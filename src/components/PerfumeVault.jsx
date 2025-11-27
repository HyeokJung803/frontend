//최종 수정

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei'; 

const CASE_WIDTH = 4.0; 
const CASE_HEIGHT = 3.5; 
const CASE_DEPTH = 1.5; 
const WALL_THICKNESS = 0.05;

const BOTTLE_BODY_HEIGHT = 0.6; // 바디 높이
const CAP_HEIGHT = 0.3; // 캡 높이
const TOTAL_BOTTLE_HEIGHT = BOTTLE_BODY_HEIGHT + CAP_HEIGHT; // 총 높이 0.90

const NUMBER_OF_SHELVES = 3; 
const SHELF_GAP = (CASE_HEIGHT - WALL_THICKNESS * 2) / NUMBER_OF_SHELVES;
const SHELF_START_Y = -CASE_HEIGHT / 2 + WALL_THICKNESS + 0.1; 


const MATERIAL_MAP = [
    { color: '#FF97C4', roughness: 0.0, metalness: 0.1, shape: 'round' }, // 짙은 핑크 -> 채도 낮춘 핑크
    { color: '#FFEC55', roughness: 0.0, metalness: 0.1, shape: 'square' }, // 진한 골드 옐로우 -> 채도 낮춘 옐로우
    { color: '#64B5FF', roughness: 0.0, metalness: 0.1, shape: 'round' }, // 진한 파란색 -> 채도 낮춘 파랑
    { color: '#C18EDC', roughness: 0.0, metalness: 0.1, shape: 'square' }, // 진한 보라색 -> 채도 낮춘 보라
    { color: '#FF7C4D', roughness: 0.0, metalness: 0.1, shape: 'round' }, // 주황색 -> 채도 낮춘 주황
    { color: '#5DB55D', roughness: 0.0, metalness: 0.1, shape: 'square' }, // 숲의 녹색 -> 채도 낮춘 녹색
];

// Active View 시 보관함과 병이 이동할 위치 및 크기 재정의
const VAULT_ACTIVE_POSITION = [-0.8, 0, -0.1]; 
const FOREGROUND_POSITION = [2.0, 0, 0]; 
const VAULT_ACTIVE_SCALE = 0.9; 
const FOREGROUND_SCALE = 1.1; 


// --- [컴포넌트 1] PerfumeBottle (디자인 유지 및 위치 재조정) ---
function PerfumeBottle({ id, name, position, rotation, isSelected, onSelect, scale = 1 }) {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);
    
    const baseScale = isSelected ? 1.05 : 1; 
    const hoverScale = useRef(1);

    const modelIndex = id % MATERIAL_MAP.length;
    const modelProps = MATERIAL_MAP[modelIndex];
    const bottleShape = modelProps.shape;
    const bottleColor = modelProps.color; 
    
    //  고급 유리/크리스탈 재질 
    const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(bottleColor),
        transparent: true,
        opacity: 0.8, 
        roughness: 0.05, 
        metalness: 0.01,
        transmission: 0.99, 
        ior: 1.5,
        clearcoat: 1, 
        clearcoatRoughness: 0.01, 
    });

    // 캡의 투명 크리스탈 재질
    const capGlassMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#FFFFFF'), 
        transparent: true,
        opacity: 0.9,
        roughness: 0.05,
        metalness: 0.01,
        transmission: 0.99,
        ior: 1.5,
        clearcoat: 1,
        clearcoatRoughness: 0.01,
    });

    // 금색 링 재질
    const collarMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#FFD700'), 
        roughness: 0.1,
        metalness: 0.9,
    });


    useFrame(() => {
        if (meshRef.current) {
            const currentScale = hoverScale.current * baseScale * scale;
            meshRef.current.scale.set(currentScale, currentScale, currentScale);
            
            if (scale === 1) { 
                meshRef.current.position.y = position[1] + (isSelected ? 0.05 : 0) + (hoverScale.current - 1) * 0.2;
            } else {
                 meshRef.current.position.y = position[1];
            }
        }
    });

    return (
        <group 
            ref={meshRef} 
            position={position}
            rotation={rotation}
            onClick={(e) => { e.stopPropagation(); onSelect(id); }}
            onPointerOver={(e) => { 
                e.stopPropagation();
                document.body.style.cursor = 'pointer'; 
                hoverScale.current = 1.03; 
                setHovered(true);
                onSelect(id, true);
            }}
            onPointerOut={() => { 
                e.stopPropagation();
                document.body.style.cursor = 'default';
                hoverScale.current = 1; 
                setHovered(false); 
                onSelect(id, false);
            }}
            castShadow
        >
            {/* 2D 이름 라벨 */}
            {(hovered || isSelected) && (
                <Html position={[0, TOTAL_BOTTLE_HEIGHT / 2 + 0.1, 0]} center >
                    <div style={{ color: 'white', fontSize: '12px', padding: '3px 6px', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                        {name}
                    </div>
                </Html>
            )}

            {/* 바디: 각진 병 (디자인 다양화 반영) */}
            <mesh position={[0, -CAP_HEIGHT / 2 - 0.025, 0]} material={glassMaterial}> 
                {bottleShape === 'round' ? (
                    <cylinderGeometry args={[0.25, 0.25, BOTTLE_BODY_HEIGHT, 32]} /> 
                ) : (
                    <boxGeometry args={[0.45, BOTTLE_BODY_HEIGHT, 0.35]} />
                )}
            </mesh>

            {/* 캡 아래 금색 링 (Collar) */}
            <mesh position={[0, BOTTLE_BODY_HEIGHT / 2 - 0.025, 0]} material={collarMaterial}>
                <cylinderGeometry args={[0.26, 0.26, 0.05, 32]} />
            </mesh>

            {/* 캡 상단: 크리스탈 커팅 디자인 */}
            <group position={[0, BOTTLE_BODY_HEIGHT / 2 + 0.05, 0]}>
                {/* 캡의 하단 원통 부분 */}
                <mesh material={capGlassMaterial}>
                    <cylinderGeometry args={[0.28, 0.28, 0.1, 8]} /> 
                </mesh>
                {/* 캡의 중앙 부분 (크리스탈 재질, 옥타헤드론) */}
                <mesh position={[0, 0.05 + 0.08, 0]} material={capGlassMaterial}>
                    <octahedronGeometry args={[0.2, 0]} /> 
                </mesh>
                {/* 캡의 가장 위쪽 작은 부분 (크리스탈 재질, 더 작은 옥타헤드론) */}
                <mesh position={[0, 0.05 + 0.08 + 0.1, 0]} material={capGlassMaterial}>
                    <octahedronGeometry args={[0.1, 0]} /> 
                </mesh>
            </group>
        </group>
    );
}

// --- [컴포넌트 2] 투명 아크릴 진열장 모델 (유지) ---
function AcrylicDisplayCase() {
    const wallMaterial = new THREE.MeshPhysicalMaterial({ 
        color: new THREE.Color('#ffffff'), 
        transparent: true, 
        opacity: 0.2, 
        roughness: 0.05, 
        metalness: 0.0, 
        transmission: 0.99, 
        ior: 1.5, 
        clearcoat: 1,
        clearcoatRoughness: 0.05,
    });
    const baseMaterial = new THREE.MeshStandardMaterial({ color: new THREE.Color('#F5F5DC'), roughness: 0.6, metalness: 0.1, });
    
    const caseWidth = CASE_WIDTH; 
    const caseHeight = CASE_HEIGHT; 
    const caseDepth = CASE_DEPTH; 
    const wallThickness = WALL_THICKNESS;
    
    const shelfGap = (CASE_HEIGHT - WALL_THICKNESS * 2) / NUMBER_OF_SHELVES;
    const shelfStartY = -CASE_HEIGHT / 2 + WALL_THICKNESS + 0.1;

    const shelfPositions = Array.from({ length: NUMBER_OF_SHELVES }).map((_, i) => shelfStartY + (shelfGap * i));

    return (
        <group position={[0, -0.1, 0]}> 
            {/* 바닥, 상단, 벽들 - 높이 CASE_HEIGHT 사용 */}
            <mesh position={[0, -caseHeight / 2 - wallThickness / 2, 0]} material={baseMaterial} receiveShadow><boxGeometry args={[caseWidth, wallThickness, caseDepth]} /></mesh>
            <mesh position={[0, caseHeight / 2 + wallThickness / 2, 0]} material={baseMaterial}><boxGeometry args={[caseWidth, wallThickness, caseDepth]} /></mesh>
            <mesh position={[0, 0, -caseDepth / 2 - wallThickness / 2]} material={wallMaterial} castShadow receiveShadow><boxGeometry args={[caseWidth, caseHeight + wallThickness * 2, wallThickness]} /></mesh>
            <mesh position={[0, 0, caseDepth / 2 + wallThickness / 2]} material={wallMaterial} castShadow receiveShadow><boxGeometry args={[caseWidth, caseHeight + wallThickness * 2, wallThickness]} /></mesh>
            <mesh position={[-caseWidth / 2 - wallThickness / 2, 0, 0]} material={wallMaterial} castShadow receiveShadow><boxGeometry args={[wallThickness, caseHeight + wallThickness * 2, caseDepth + wallThickness * 2]} /></mesh>
            <mesh position={[caseWidth / 2 + wallThickness / 2, 0, 0]} material={wallMaterial} castShadow receiveShadow><boxGeometry args={[wallThickness, caseHeight + wallThickness * 2, caseDepth + wallThickness * 2]} /></mesh>
            
            {/* 3단 선반 배치 */}
            {shelfPositions.map((y, index) => (
                <mesh key={index} position={[0, y, 0]} material={baseMaterial} receiveShadow>
                    <boxGeometry args={[caseWidth - wallThickness * 2, wallThickness, caseDepth - wallThickness * 2]} />
                </mesh>
            ))}
            
            {/* LED 조명 효과 */}
            <group position={[0, caseHeight / 2 - wallThickness / 2 - 0.1, 0]}> 
                <pointLight intensity={10} distance={10} color="#fff" /> 
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[caseWidth - 0.5, 0.05, caseDepth - 0.5]} />
                    <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={5} /> 
                </mesh>
            </group>
        </group>
    );
}

// --- [컴포넌트 3] PerfumeVault ---
export default function PerfumeVault({ recipes, onSelectPerfume, selectedId }) {
    
    const activeRecipe = recipes.find(r => r.id === selectedId);

    // 향수 배치 로직 (3단 선반 위치 및 총 9개 수납에 맞게 조정)
    const getPosition = (index, total) => {
        const bottleHeight = TOTAL_BOTTLE_HEIGHT; 
        const shelfGap = SHELF_GAP; 
        const shelfStartY = SHELF_START_Y;
        
        let yOffset = 0; 

        const shelfIndex = Math.floor(index / 3); 
        const itemIndex = index % 3; 
        
        // X축 위치 계산
        let xPosition;
        if (itemIndex === 0) {
            xPosition = -1.2;
        } else if (itemIndex === 1) {
            xPosition = 0;
        } else {
            xPosition = 1.2;
        }

        // 병의 중심 위치 계산
        const bottleBottomY = shelfStartY + (shelfGap * shelfIndex); 
        yOffset = bottleBottomY + (bottleHeight / 2); 
        
        if (shelfIndex >= NUMBER_OF_SHELVES) {
            return [99, 99, 99]; 
        }

        return [xPosition, yOffset, 0];
    };


    return (
        <group>
            {/* 1. Vault Group: Active 상태일 때 왼쪽으로 축소 이동 */}
            <group 
                scale={activeRecipe ? VAULT_ACTIVE_SCALE : 1} 
                position={activeRecipe ? VAULT_ACTIVE_POSITION : [0, 0, 0]}
            >
                <AcrylicDisplayCase />
                
                {(recipes || []).map((recipe, index) => {
                    const isCurrentlySelected = recipe.id === selectedId;

                    // 선택된 병은 이 그룹에서 제거 (전경에 따로 배치)
                    if (isCurrentlySelected) {
                        return null; 
                    }
                    
                    return (
                        <PerfumeBottle
                            key={recipe.id}
                            id={recipe.id}
                            name={recipe.name} 
                            position={getPosition(index, recipes.length)}
                            rotation={[0, Math.PI / 8 * index, 0]} 
                            isSelected={false} // Group 내부에서는 선택 강조 해제
                            onSelect={onSelectPerfume}
                        />
                    );
                })}
            </group>

            {/* 2. Foreground Bottle: 선택된 경우에만 오른쪽으로 확대 이동 */}
            {activeRecipe && (
                <PerfumeBottle
                    key={activeRecipe.id}
                    id={activeRecipe.id}
                    name={activeRecipe.name} 
                    position={FOREGROUND_POSITION}
                    rotation={[0, 0, 0]} 
                    isSelected={true} 
                    scale={FOREGROUND_SCALE} // 확대
                    onSelect={onSelectPerfume}
                />
            )}
        </group>
    );
}