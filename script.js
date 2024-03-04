import * as CANNON from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/+esm";

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.getElementById("canvas").appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.001,
  1000000
);
camera.position.set(0, 8, 7);

const orbit = new THREE.OrbitControls(camera, renderer.domElement);
orbit.update();

const ambientLight = new THREE.AmbientLight("white");
scene.add(ambientLight);

const spotLight = new THREE.SpotLight("white", 10);
spotLight.power = 4000;
scene.add(spotLight);
// spotLight.angle = 4;
spotLight.distance = 40;
spotLight.position.set(0, 20, 0);
const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;


const axis = new THREE.AxesHelper(20);
scene.add(axis);

const groundGeo = new THREE.PlaneGeometry(50, 50);
const groundMat = new THREE.MeshStandardMaterial({
  color: "gray",
  transparent:true,
  opacity:0,
  side: THREE.DoubleSide,
});
const groundMesh = new THREE.Mesh(groundGeo, groundMat);
groundMesh.receiveShadow = true;
scene.add(groundMesh);


// mat for all
const envMat = new THREE.MeshStandardMaterial({
  color: "red",
  transparent: true,
  opacity: 0,
});


const leftB = new THREE.BoxGeometry(.5, 3, 41);
const leftBMesh = new THREE.Mesh(leftB, envMat);
leftBMesh.position.set(-20.5,0,1)
scene.add(leftBMesh);

const rightB = new THREE.BoxGeometry(.5, 3, 41);
const rightBMesh = new THREE.Mesh(rightB, envMat);
rightBMesh.position.set(20.5,0,1)
scene.add(rightBMesh);

const topB = new THREE.BoxGeometry(40, 3, .5);
const topBMesh = new THREE.Mesh(topB, envMat);
topBMesh.position.set(0,0,-19.4)
scene.add(topBMesh);

const bottomB = new THREE.BoxGeometry(40, 3, .5);
const bottomBMesh = new THREE.Mesh(bottomB, envMat);
bottomBMesh.position.set(0,0,21.2)
scene.add(bottomBMesh);

const home1 = new THREE.BoxGeometry(5, 3, 5);
const home1Mesh = new THREE.Mesh(home1, envMat);
home1Mesh.position.set(-17.3,0,-15.9)
scene.add(home1Mesh);

const home2 = new THREE.BoxGeometry(10, 3, 5);
const home2Mesh = new THREE.Mesh(home2, envMat);
home2Mesh.position.set(14.8,0,-15.9)
scene.add(home2Mesh);

const home2_1 = new THREE.BoxGeometry(5, 3, 5);
const home2_1Mesh = new THREE.Mesh(home2_1, envMat);
home2_1Mesh.position.set(17.4,0,-12.2)
scene.add(home2_1Mesh);

const home3 = new THREE.BoxGeometry(5.6, 3, 5.2);
const home3Mesh = new THREE.Mesh(home3, envMat);
home3Mesh.position.set(17,0,2.3)
scene.add(home3Mesh);

const wiz = new THREE.BoxGeometry(.6, 3, .6);
const wizMesh = new THREE.Mesh(wiz, envMat);
wizMesh.position.set(-18.7,0,-12.8)
scene.add(wizMesh);

const pot = new THREE.BoxGeometry(1.8, 3, 1.8);
const potMesh = new THREE.Mesh(pot, envMat);
potMesh.position.set(-11.9,0,-14.8)
scene.add(potMesh);

const chest1 = new THREE.BoxGeometry(4, 3, 1);
const chest1Mesh = new THREE.Mesh(chest1, envMat);
chest1Mesh.position.set(-7.4,0,-15)
chest1Mesh.rotateY(.25)
scene.add(chest1Mesh);

const chest2 = new THREE.BoxGeometry(2, 3, 1);
const chest2Mesh = new THREE.Mesh(chest2, envMat);
chest2Mesh.position.set(18.4,0,18.4)
chest2Mesh.rotateY(-.9)
scene.add(chest2Mesh);

const portal = new THREE.BoxGeometry(3, 3, 1.4);
const portalMesh = new THREE.Mesh(portal, envMat);
portalMesh.position.set(1,0,-15)
scene.add(portalMesh);

const tree1 = new THREE.BoxGeometry(.5, 3, .5);
const tree1Mesh = new THREE.Mesh(tree1, envMat);
tree1Mesh.position.set(-12.6,0,-18.5)
scene.add(tree1Mesh);

const tree2 = new THREE.BoxGeometry(.5, 3, .5);
const tree2Mesh = new THREE.Mesh(tree2, envMat);
tree2Mesh.position.set(7.2,0,-18.4)
scene.add(tree2Mesh);

const tree3 = new THREE.BoxGeometry(.5, 3, .5);
const tree3Mesh = new THREE.Mesh(tree3, envMat);
tree3Mesh.position.set(-2.2,0,-7.6)
scene.add(tree3Mesh);

const tree4 = new THREE.BoxGeometry(.5, 3, .5);
const tree4Mesh = new THREE.Mesh(tree4, envMat);
tree4Mesh.position.set(17.5,0,-8)
scene.add(tree4Mesh);

const tree5 = new THREE.BoxGeometry(.5, 3, .5);
const tree5Mesh = new THREE.Mesh(tree5, envMat);
tree5Mesh.position.set(-18.5,0,1.4)
scene.add(tree5Mesh);

const tree6 = new THREE.BoxGeometry(.5, 3, .5);
const tree6Mesh = new THREE.Mesh(tree6, envMat);
tree6Mesh.position.set(-17.6,0,12.6)
scene.add(tree6Mesh);

const tree7 = new THREE.BoxGeometry(.5, 3, .5);
const tree7Mesh = new THREE.Mesh(tree7, envMat);
tree7Mesh.position.set(-17.6,0,15.8)
scene.add(tree7Mesh);

const tree8 = new THREE.BoxGeometry(.5, 3, .5);
const tree8Mesh = new THREE.Mesh(tree8, envMat);
tree8Mesh.position.set(-17.4,0,18.2)
scene.add(tree8Mesh);

const tree9 = new THREE.BoxGeometry(.5, 3, .5);
const tree9Mesh = new THREE.Mesh(tree9, envMat);
tree9Mesh.position.set(-14.2,0,18.2)
scene.add(tree9Mesh);

const tree10 = new THREE.BoxGeometry(.5, 3, .5);
const tree10Mesh = new THREE.Mesh(tree10, envMat);
tree10Mesh.position.set(-7.6,0,18.2)
scene.add(tree10Mesh);

const tree11 = new THREE.BoxGeometry(.5, 3, .5);
const tree11Mesh = new THREE.Mesh(tree11, envMat);
tree11Mesh.position.set(-11.5,0,16.5)
scene.add(tree11Mesh);

const tree12 = new THREE.BoxGeometry(.5, 3, .5);
const tree12Mesh = new THREE.Mesh(tree12, envMat);
tree12Mesh.position.set(-12.8,0,13.4)
scene.add(tree12Mesh);

const tree13 = new THREE.BoxGeometry(.5, 3, .5);
const tree13Mesh = new THREE.Mesh(tree13, envMat);
tree13Mesh.position.set(10.4,0,10)
scene.add(tree13Mesh);

const tree14 = new THREE.BoxGeometry(.5, 3, .5);
const tree14Mesh = new THREE.Mesh(tree14, envMat);
tree14Mesh.position.set(7.6,0,13.8)
scene.add(tree14Mesh);

const tree15 = new THREE.BoxGeometry(.5, 3, .5);
const tree15Mesh = new THREE.Mesh(tree15, envMat);
tree15Mesh.position.set(8.2,0,18)
scene.add(tree15Mesh);

const tree16 = new THREE.BoxGeometry(.5, 3, .5);
const tree16Mesh = new THREE.Mesh(tree16, envMat);
tree16Mesh.position.set(14,0,14.8)
scene.add(tree16Mesh);

const tree17 = new THREE.BoxGeometry(.5, 3, .5);
const tree17Mesh = new THREE.Mesh(tree17, envMat);
tree17Mesh.position.set(15.8,0,10.2)
scene.add(tree17Mesh);

const well1 = new THREE.BoxGeometry(1.4, 3, 1.4);
const well1Mesh = new THREE.Mesh(well1, envMat);
well1Mesh.position.set(16,0,-5.6)
scene.add(well1Mesh);

const well2 = new THREE.BoxGeometry(1.4, 3, 1.4);
const well2Mesh = new THREE.Mesh(well2, envMat);
well2Mesh.position.set(-18.2,0,5.8)
scene.add(well2Mesh);

const barrel1 = new THREE.BoxGeometry(3.8, 3, 2);
const barrel1Mesh = new THREE.Mesh(barrel1, envMat);
barrel1Mesh.position.set(7,0,-14.7)
scene.add(barrel1Mesh);

const barrel2 = new THREE.BoxGeometry(1.6, 3, 1.2);
const barrel2Mesh = new THREE.Mesh(barrel2, envMat);
barrel2Mesh.position.set(-17.8,0,8.5)
scene.add(barrel2Mesh);

const barrel3 = new THREE.BoxGeometry(1.6,3, 2.4);
const barrel3Mesh = new THREE.Mesh(barrel3, envMat);
barrel3Mesh.position.set(13,0,6.8)
scene.add(barrel3Mesh);

const cart1 = new THREE.BoxGeometry(4.2, 3, 1.6);
const cart1Mesh = new THREE.Mesh(cart1, envMat);
cart1Mesh.position.set(-17,0,-4.2)
cart1Mesh.rotateY(-.35)
scene.add(cart1Mesh);

const cart2 = new THREE.BoxGeometry(4.2, 3, 1.6);
const cart2Mesh = new THREE.Mesh(cart2, envMat);
cart2Mesh.position.set(-7.4,0,10.5)
cart2Mesh.rotateY(-.35)
scene.add(cart2Mesh);

const pole1 = new THREE.BoxGeometry(.4, 3, .4);
const pole1Mesh = new THREE.Mesh(pole1, envMat);
pole1Mesh.position.set(-.8,0,14.8)
scene.add(pole1Mesh);

const pole2 = new THREE.BoxGeometry(.4, 3, .4);
const pole2Mesh = new THREE.Mesh(pole2, envMat);
pole2Mesh.position.set(.8,0,14.8)
scene.add(pole2Mesh);


const box = new THREE.BoxGeometry(1, 3, 1);
const boxMesh = new THREE.Mesh(box, envMat);
boxMesh.position.set(0,4,0)
scene.add(boxMesh);




const loadingManager = new THREE.LoadingManager();

const loader = new THREE.GLTFLoader(loadingManager);
let mixer;
let man;
loader.load("./character2.glb", function (gltf) {
  man = gltf.scene;
  man.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
    }
  });
  scene.add(man);
  man.scale.set(1, 1, 1);
  man.position.set(0, -4, 0);
  mixer = new THREE.AnimationMixer(man);
  const clips = gltf.animations;
  // console.log("animas are ",clips);
  // Play a certain animation
  const clip = THREE.AnimationClip.findByName(clips, "running");
  const action = mixer.clipAction(clip);
  action.play();

  // Play all animations at the same time
  // clips.forEach(function (clip) {
  //   const action = mixer.clipAction(clip);
  //   action.play();
  // });

  // swimmer.visible = false
});


loader.load("./env.glb", function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.scale.set(1, 1, 1);
  model.position.set(0, 0, 0);
  model.receiveShadow = true;

});


let portalAnime
loader.load("./portal.glb", function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  portalAnime = new THREE.AnimationMixer(model);
  const clips = gltf.animations;
  // console.log("animas are ",clips);
   clips.forEach(function (clip) {
    const action = portalAnime.clipAction(clip);
    action.play();
  });
  model.scale.set(.8, .8, .8);
  model.position.set(1, 0, -15);
});






const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.81, 0),
});

const cannon_mat=new CANNON.Material();

// const groundPhysMat = new CANNON.Material();
const groundBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(25, 25, 0.1)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(groundBody);
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);


const leftBBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 20.5)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(leftBBody);

const rightBBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 20.5)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(rightBBody);

const topBBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(20, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(topBBody);

const bottomBBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(20, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(bottomBBody);

const home1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(2.5, 1.5, 2.5)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(home1Body);

const home2Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(5, 1.5, 2.5)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(home2Body);

const home2_1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(2.5, 1.5, 2.5)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(home2_1Body);

const home3Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(2.8, 1.5, 2.6)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(home3Body);

const wizBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.3, 1.5, .3)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(wizBody);

const potBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.9, 1.5, .9)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(potBody);

const chest1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(2, 1.5, .5)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(chest1Body);

const chest2Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(1, 1.5, .5)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(chest2Body);

const portalBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(1.5, 1.5, .7)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(portalBody);

const tree1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree1Body);

const tree2Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree2Body)

const tree3Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree3Body)

const tree4Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree4Body)

const tree5Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree5Body)

const tree6Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree6Body)

const tree7Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree7Body)

const tree8Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree8Body)

const tree9Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree9Body)

const tree10Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree10Body)

const tree11Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree11Body)

const tree12Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree12Body)

const tree13Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree13Body)

const tree14Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree14Body)

const tree15Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree15Body)

const tree16Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree16Body)

const tree17Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.25, 1.5, .25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree17Body)

const well1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.7, 1.5, .7)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(well1Body);

const well2Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.7, 1.5, .7)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(well2Body);

const barrel1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(1.9, 1.5, 1)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(barrel1Body);

const barrel2Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.8, 1.5, .6)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(barrel2Body);

const barrel3Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.8, 1.5, 1.2)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(barrel3Body);

const cart1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(2.1, 1.5, .8)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(cart1Body);

const cart2Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(2.1, 1.5, .8)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(cart2Body);

const pole1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.2, 1.5, .2)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(pole1Body);

const pole2Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(.2, 1.5, .2)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(pole2Body);


const manBody = new CANNON.Body({
  mass: 100,
  shape: new CANNON.Box(new CANNON.Vec3(0.5, 1.5, 0.5)),
  position: new CANNON.Vec3(0, 4, 0),
  material: cannon_mat,
});
world.addBody(manBody);

const timeStep = 1 / 60;

// const meshes = [];
// const bodies = [];

// document.getElementById("btn").addEventListener("click", function () {
//   const boxGeo = new THREE.BoxGeometry(2, 2, 2);
//   const boxMat = new THREE.MeshStandardMaterial({
//     color: "red",
//   });
//   const boxMesh = new THREE.Mesh(boxGeo, boxMat);
//   scene.add(boxMesh);

//   const boxPhysMat = new CANNON.Material();
//   const boxBody = new CANNON.Body({
//     mass: 1,
//     shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
//     position: new CANNON.Vec3(0, 20, 0),
//     material: boxPhysMat,
//   });
//   world.addBody(boxBody);

//   meshes.push(boxMesh);
//   bodies.push(boxBody);
// });


let w = false;
let a = false;
let s = false;
let d = false;
let jump = false;
// let tween=new TWEEN
let current = 0; // Keep track of current rotation
let targetRotationY = 3.2;
let high = true;
let val = 4;

const tl = gsap.timeline();

// const mousePosition = new THREE.Vector2();

// const raycaster = new THREE.Raycaster();
// let intersects
// window.addEventListener('mousemove', function(e) {
//   mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
//   mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
//   raycaster.setFromCamera(mousePosition, camera);
//   intersects = raycaster.intersectObject(man);
//   console.log("val: ",intersects)
// });

const clock = new THREE.Clock();
const portalClock = new THREE.Clock();
let vel=.02
function animate() {
  if (portalAnime) {
    portalAnime.update(portalClock.getDelta());
  }

  
  groundMesh.position.copy(groundBody.position);
  groundMesh.quaternion.copy(groundBody.quaternion);

  leftBBody.position.copy(leftBMesh.position);
  rightBBody.position.copy(rightBMesh.position);
  topBBody.position.copy(topBMesh.position);
  bottomBBody.position.copy(bottomBMesh.position);
  home1Body.position.copy(home1Mesh.position);
  home2Body.position.copy(home2Mesh.position);
  home2_1Body.position.copy(home2_1Mesh.position);
  home3Body.position.copy(home3Mesh.position);
  wizBody.position.copy(wizMesh.position);
  potBody.position.copy(potMesh.position);
  chest1Body.position.copy(chest1Mesh.position);
  chest1Body.quaternion.copy(chest1Mesh.quaternion);
  chest2Body.position.copy(chest2Mesh.position);
  chest2Body.quaternion.copy(chest2Mesh.quaternion);
  portalBody.position.copy(portalMesh.position);
  tree1Body.position.copy(tree1Mesh.position);
  tree2Body.position.copy(tree2Mesh.position);
  tree3Body.position.copy(tree3Mesh.position);
  tree4Body.position.copy(tree4Mesh.position);
  tree5Body.position.copy(tree5Mesh.position);
  tree6Body.position.copy(tree6Mesh.position);
  tree7Body.position.copy(tree7Mesh.position);
  tree8Body.position.copy(tree8Mesh.position);
  tree9Body.position.copy(tree9Mesh.position);
  tree10Body.position.copy(tree10Mesh.position) ;
  tree11Body.position.copy(tree11Mesh.position);
  tree12Body.position.copy(tree12Mesh.position);
  tree13Body.position.copy(tree13Mesh.position);
  tree14Body.position.copy(tree14Mesh.position);
  tree15Body.position.copy(tree15Mesh.position);
  tree16Body.position.copy(tree16Mesh.position);
  tree17Body.position.copy(tree17Mesh.position);
  well1Body.position.copy(well1Mesh.position);
  well2Body.position.copy(well2Mesh.position);
  barrel1Body.position.copy(barrel1Mesh.position);
  barrel2Body.position.copy(barrel2Mesh.position);
  barrel3Body.position.copy(barrel3Mesh.position);
  cart1Body.position.copy(cart1Mesh.position);
  cart1Body.quaternion.copy(cart1Mesh.quaternion);
  cart2Body.position.copy(cart2Mesh.position);
  cart2Body.quaternion.copy(cart2Mesh.quaternion);
  pole1Body.position.copy(pole1Mesh.position);
  pole2Body.position.copy(pole2Mesh.position);

  if (
    3.5 > manBody.position.x &&
    manBody.position.x > -1.5 &&
    -13 > manBody.position.z &&
    manBody.position.z > -17
  ) {
    // console.log("done");
  }
  if (
    -17.5 > manBody.position.x &&
    manBody.position.x > -22 &&
    -11 > manBody.position.z &&
    manBody.position.z > -15
  ) {
    console.log("wiz");
  }

  camera.position.set(manBody.position.x, 5, manBody.position.z+5);
  // tl.to(camera.position,{
  //       z:40,
  //       y:10,
  //       x:0,
  //       duration:1,
  //       onUpdate:function(){
  //           camera.lookAt(0,0,0)
  //       }
  //   })
  // console.log(cubeBody.position.x)
  if (man) {
    // Update current rotation smoothly based on a fixed step (adjust as needed)
    //  currentRotationY += (targetRotationY - currentRotationY) * .03; // Adjust the factor for desired speed
    //   // Apply the updated rotation to the model
    //   man.rotation.y = currentRotationY;

    // if (jump) {

    //     cubeBody.position.y=4;
    //     jump=false
    //     // if(val<8){
    //       //   val+=.1
    //       //   cubeBody.position.y=val;
    //       // }

    //   //     setTimeout(()=>{
    //   //   cubeBody.position.y=2;
    //   //   // jump=false
    //   // },400)
    // }

    man.position.x = manBody.position.x;
    man.position.y = manBody.position.y-1.5;
    man.position.z = manBody.position.z;
    // man.quaternion.copy(cubeBody.quaternion);

    if (w && d && !a && !s) {
      manBody.position.z -= vel
      manBody.position.x += vel
      man.rotation.y = 2.4;
    } else if (w && a && !d && !s) {
      manBody.position.z -= vel
      manBody.position.x -= vel
      man.rotation.y = 4;
    } else if (s && d && !a && !w) {
      manBody.position.z += vel
      manBody.position.x += vel
      man.rotation.y = 0.8;
    } else if (s && a && !d && !w) {
      manBody.position.z += vel
      manBody.position.x -= vel
      man.rotation.y = 5.6;
    } else if (w && !a && !d && !s) {
      manBody.position.z -= vel
      man.rotation.y = 3.2;
      // console.log("y is ",man.rotation.y)
    } else if (s && !d && !a && !w) {
      manBody.position.z += vel
      man.rotation.y = 0;
    } else if (a && !s && !d && !w) {
      manBody.position.x -= vel
      man.rotation.y = 4.8;
    } else if (d && !a && !s && !w) {
      manBody.position.x += vel
      man.rotation.y = 1.6;
    }
  }

  // new TWEEN.update();

  if (mixer && (w || a || s || d)) {
    mixer.update(clock.getDelta());
  }

  

  world.step(timeStep);


  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth / window.innerHeight);
});

window.addEventListener("keydown", (e) => {
  // console.log('Key pressed:', e.key);
  // console.log("cam pos ", camera.position);
  if (e.key == "w" || e.key == "ArrowUp") {
    w = true;
  }
  if (e.key == "a" || e.key == "ArrowLeft") {
    a = true;
  }
  if (e.key == "s" || e.key == "ArrowDown") {
    s = true;
  }
  if (e.key == "d" || e.key == "ArrowRight") {
    d = true;
  }
  // if (e.key == " ") {
  //   jump = true;
  // }
});
window.addEventListener("keyup", (e) => {
  if (e.key == "w" || e.key == "ArrowUp") {
    w = false;
  }
  if (e.key == "a" || e.key == "ArrowLeft") {
    a = false;
  }
  if (e.key == "s" || e.key == "ArrowDown") {
    s = false;
  }
  if (e.key == "d" || e.key == "ArrowRight") {
    d = false;
  }
});
