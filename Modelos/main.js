import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

/* ======================
   ESCENA
====================== */

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(5, 4, 8);

const renderer = new THREE.WebGLRenderer({ antialias:true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* ======================
   LUCES
====================== */

const ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambient);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,10,5);
scene.add(light);

/* ======================
   CONTROLES
====================== */

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

/* ======================
   GLTF LOADER
====================== */

const loader = new GLTFLoader();

/* ===== FUNCION PARA CARGAR MODELOS ===== */

function cargarModelo(url, posicion, escala, rotacionY) {

  loader.load(url, (gltf) => {

    const modelo = gltf.scene;

    // TRANSFORMACIONES
    modelo.position.set(...posicion);
    modelo.scale.setScalar(escala);
    modelo.rotation.y = rotacionY;

    /* ======================
       TRAVERSE()
       acceder materiales
    ======================= */

    modelo.traverse((child) => {

      if (child.isMesh) {

        child.castShadow = true;

        // cambiar propiedades del material
        child.material.metalness = 0.5;
        child.material.roughness = 0.4;

        // prueba visual
        child.material.emissive = new THREE.Color(0x111111);

      }

    });

    scene.add(modelo);

  });
}

/* ======================
   CARGAR 3 MODELOS
====================== */

cargarModelo(
  "./models/Character.glb",
  [-3, 0, 0],
  1,
  Math.PI / 4
);

cargarModelo(
  "./models/Fox.glb",
  [0, 0, 0],
  0.8,
  0
);

cargarModelo(
  "./models/Rover.glb",
  [3, 0, 0],
  1.2,
  -Math.PI / 4
);

/* ======================
   RESIZE
====================== */

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* ======================
   ANIMACION
====================== */

function animate(){
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene,camera);
}

animate();
