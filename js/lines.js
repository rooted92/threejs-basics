import * as THREE from 'three';

// Setup renderer, camera and scene

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

// Next define material for lines

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

// Next define geometry for lines

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

// Put points together to form a line

const line = new THREE.Line(geometry, material);

// Add line to scene and call render

scene.add(line);
renderer.render(scene, camera);