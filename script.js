import * as CANNON from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/+esm";
// const renderer = new THREE.WebGL1Renderer();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMap.enabled = true;
document.getElementById("canvas").appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.001,
  1000000
);
// camera.position.set(0, 6, 10);
camera.rotateX(-0.4);

// const orbit = new THREE.OrbitControls(camera, renderer.domElement);
// orbit.update();

const ambientLight = new THREE.AmbientLight("white");
scene.add(ambientLight);

const spotLight = new THREE.SpotLight("white", 10);
spotLight.power = 3000;
scene.add(spotLight);
spotLight.distance = 40;
spotLight.position.set(0, 20, 0);
// const spotLightHelper = new THREE.SpotLightHelper(spotLight);
// scene.add(spotLightHelper);
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

// const axis = new THREE.AxesHelper(20);
// scene.add(axis);

const groundGeo = new THREE.PlaneGeometry(50, 50);
const groundMat = new THREE.MeshStandardMaterial({
  color: "gray",
  transparent: true,
  opacity: 0,
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
const diff = new THREE.MeshStandardMaterial({
  color: "yellow",
  transparent: true,
  opacity: 0,
});

// adding 3d objects to add like static physical objects

const leftB = new THREE.BoxGeometry(0.5, 3, 41);
const leftBMesh = new THREE.Mesh(leftB, envMat);
leftBMesh.position.set(-20.5, 0, 1);
scene.add(leftBMesh);

const rightB = new THREE.BoxGeometry(0.5, 3, 41);
const rightBMesh = new THREE.Mesh(rightB, envMat);
rightBMesh.position.set(20.5, 0, 1);
scene.add(rightBMesh);

const topB = new THREE.BoxGeometry(40, 3, 0.5);
const topBMesh = new THREE.Mesh(topB, envMat);
topBMesh.position.set(0, 0, -19.4);
scene.add(topBMesh);

const bottomB = new THREE.BoxGeometry(40, 3, 0.5);
const bottomBMesh = new THREE.Mesh(bottomB, envMat);
bottomBMesh.position.set(0, 0, 21.2);
scene.add(bottomBMesh);

const home1 = new THREE.BoxGeometry(5, 3, 5);
const home1Mesh = new THREE.Mesh(home1, envMat);
home1Mesh.position.set(-17.3, 0, -15.9);
scene.add(home1Mesh);

const home2 = new THREE.BoxGeometry(10, 3, 5);
const home2Mesh = new THREE.Mesh(home2, envMat);
home2Mesh.position.set(14.8, 0, -15.9);
scene.add(home2Mesh);

const home2_1 = new THREE.BoxGeometry(5, 3, 5);
const home2_1Mesh = new THREE.Mesh(home2_1, envMat);
home2_1Mesh.position.set(17.4, 0, -12.2);
scene.add(home2_1Mesh);

const home3 = new THREE.BoxGeometry(5.6, 3, 5.2);
const home3Mesh = new THREE.Mesh(home3, envMat);
home3Mesh.position.set(17, 0, 2.3);
scene.add(home3Mesh);

const wiz = new THREE.BoxGeometry(0.6, 3, 0.6);
const wizMesh = new THREE.Mesh(wiz, envMat);
wizMesh.position.set(-18.7, 0, -12.8);
scene.add(wizMesh);

const pot = new THREE.BoxGeometry(1.8, 3, 1.8);
const potMesh = new THREE.Mesh(pot, envMat);
potMesh.position.set(-11.9, 0, -14.8);
scene.add(potMesh);

const chest1 = new THREE.BoxGeometry(4, 3, 1);
const chest1Mesh = new THREE.Mesh(chest1, envMat);
chest1Mesh.position.set(-7.4, 0, -15);
chest1Mesh.rotateY(0.25);
scene.add(chest1Mesh);

const chest2 = new THREE.BoxGeometry(2, 3, 1);
const chest2Mesh = new THREE.Mesh(chest2, envMat);
chest2Mesh.position.set(18.4, 0, 18.4);
chest2Mesh.rotateY(-0.9);
scene.add(chest2Mesh);

const portal = new THREE.BoxGeometry(3, 3, 1.4);
const portalMesh = new THREE.Mesh(portal, envMat);
portalMesh.position.set(1, 0, -15);
scene.add(portalMesh);

const tree1 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree1Mesh = new THREE.Mesh(tree1, envMat);
tree1Mesh.position.set(-12.6, 0, -18.5);
scene.add(tree1Mesh);

const tree2 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree2Mesh = new THREE.Mesh(tree2, envMat);
tree2Mesh.position.set(7.2, 0, -18.4);
scene.add(tree2Mesh);

const tree3 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree3Mesh = new THREE.Mesh(tree3, envMat);
tree3Mesh.position.set(-2.2, 0, -7.6);
scene.add(tree3Mesh);

const tree4 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree4Mesh = new THREE.Mesh(tree4, envMat);
tree4Mesh.position.set(17.5, 0, -8);
scene.add(tree4Mesh);

const tree5 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree5Mesh = new THREE.Mesh(tree5, envMat);
tree5Mesh.position.set(-18.5, 0, 1.4);
scene.add(tree5Mesh);

const tree6 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree6Mesh = new THREE.Mesh(tree6, envMat);
tree6Mesh.position.set(-17.6, 0, 12.6);
scene.add(tree6Mesh);

const tree7 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree7Mesh = new THREE.Mesh(tree7, envMat);
tree7Mesh.position.set(-17.6, 0, 15.8);
scene.add(tree7Mesh);

const tree8 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree8Mesh = new THREE.Mesh(tree8, envMat);
tree8Mesh.position.set(-17.4, 0, 18.2);
scene.add(tree8Mesh);

const tree9 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree9Mesh = new THREE.Mesh(tree9, envMat);
tree9Mesh.position.set(-14.2, 0, 18.2);
scene.add(tree9Mesh);

const tree10 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree10Mesh = new THREE.Mesh(tree10, envMat);
tree10Mesh.position.set(-7.6, 0, 18.2);
scene.add(tree10Mesh);

const tree11 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree11Mesh = new THREE.Mesh(tree11, envMat);
tree11Mesh.position.set(-11.5, 0, 16.5);
scene.add(tree11Mesh);

const tree12 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree12Mesh = new THREE.Mesh(tree12, envMat);
tree12Mesh.position.set(-12.8, 0, 13.4);
scene.add(tree12Mesh);

const tree13 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree13Mesh = new THREE.Mesh(tree13, envMat);
tree13Mesh.position.set(10.4, 0, 10);
scene.add(tree13Mesh);

const tree14 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree14Mesh = new THREE.Mesh(tree14, envMat);
tree14Mesh.position.set(7.6, 0, 13.8);
scene.add(tree14Mesh);

const tree15 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree15Mesh = new THREE.Mesh(tree15, envMat);
tree15Mesh.position.set(8.2, 0, 18);
scene.add(tree15Mesh);

const tree16 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree16Mesh = new THREE.Mesh(tree16, envMat);
tree16Mesh.position.set(14, 0, 14.8);
scene.add(tree16Mesh);

const tree17 = new THREE.BoxGeometry(0.5, 3, 0.5);
const tree17Mesh = new THREE.Mesh(tree17, envMat);
tree17Mesh.position.set(15.8, 0, 10.2);
scene.add(tree17Mesh);

const well1 = new THREE.BoxGeometry(1.4, 3, 1.4);
const well1Mesh = new THREE.Mesh(well1, envMat);
well1Mesh.position.set(16, 0, -5.6);
scene.add(well1Mesh);

const well2 = new THREE.BoxGeometry(1.4, 3, 1.4);
const well2Mesh = new THREE.Mesh(well2, envMat);
well2Mesh.position.set(-18.2, 0, 5.8);
scene.add(well2Mesh);

const barrel1 = new THREE.BoxGeometry(3.8, 3, 2);
const barrel1Mesh = new THREE.Mesh(barrel1, envMat);
barrel1Mesh.position.set(7, 0, -14.7);
scene.add(barrel1Mesh);

const barrel2 = new THREE.BoxGeometry(1.6, 3, 1.2);
const barrel2Mesh = new THREE.Mesh(barrel2, envMat);
barrel2Mesh.position.set(-17.8, 0, 8.5);
scene.add(barrel2Mesh);

const barrel3 = new THREE.BoxGeometry(1.6, 3, 2.4);
const barrel3Mesh = new THREE.Mesh(barrel3, envMat);
barrel3Mesh.position.set(13, 0, 6.8);
scene.add(barrel3Mesh);

const cart1 = new THREE.BoxGeometry(4.2, 3, 1.6);
const cart1Mesh = new THREE.Mesh(cart1, envMat);
cart1Mesh.position.set(-17, 0, -4.2);
cart1Mesh.rotateY(-0.35);
scene.add(cart1Mesh);

const cart2 = new THREE.BoxGeometry(4.2, 3, 1.6);
const cart2Mesh = new THREE.Mesh(cart2, envMat);
cart2Mesh.position.set(-7.4, 0, 10.5);
cart2Mesh.rotateY(-0.35);
scene.add(cart2Mesh);

const pole1 = new THREE.BoxGeometry(0.4, 3, 0.4);
const pole1Mesh = new THREE.Mesh(pole1, envMat);
pole1Mesh.position.set(-0.8, 0, 14.8);
scene.add(pole1Mesh);

const pole2 = new THREE.BoxGeometry(0.4, 3, 0.4);
const pole2Mesh = new THREE.Mesh(pole2, envMat);
pole2Mesh.position.set(0.8, 0, 14.8);
scene.add(pole2Mesh);

const statue = new THREE.BoxGeometry(2, 3, 2);
const statueMesh = new THREE.Mesh(statue, envMat);
statueMesh.position.set(-8, 0, -2);
scene.add(statueMesh);

const board1 = new THREE.BoxGeometry(1, 1.2, 0.4);
const board1Mesh = new THREE.Mesh(board1, envMat);
board1Mesh.position.set(-2.2, 0.8, 14.4);
scene.add(board1Mesh);

const board2 = new THREE.BoxGeometry(1, 1.2, 0.4);
const board2Mesh = new THREE.Mesh(board2, envMat);
board2Mesh.position.set(-3.4, 0.8, 14);
scene.add(board2Mesh);

const board3 = new THREE.BoxGeometry(1, 1.2, 0.4);
const board3Mesh = new THREE.Mesh(board3, envMat);
board3Mesh.position.set(-4.5, 0.8, 14.4);
scene.add(board3Mesh);

const skillChest = new THREE.BoxGeometry(1.5, 3, 1);
const skillChestMesh = new THREE.Mesh(skillChest, envMat);
skillChestMesh.position.set(3, 0, 6);
skillChestMesh.rotateY(-0.5);
scene.add(skillChestMesh);

const book_pillar = new THREE.BoxGeometry(0.8, 3, 0.8);
const book_pillarMesh = new THREE.Mesh(book_pillar, envMat);
book_pillarMesh.position.set(-15, 0, 3);
scene.add(book_pillarMesh);

// const balll = new THREE.SphereGeometry(.16);
// const balllMesh = new THREE.Mesh(balll, diff);
// balllMesh.position.set(0,0.2,0)
// scene.add(balllMesh);

// const box = new THREE.BoxGeometry(0.6, 2, 0.4);
// const boxMesh = new THREE.Mesh(box, diff);
// // boxMesh.position.set(0,1,0)
// scene.add(boxMesh);

const cylinder = new THREE.CylinderGeometry(0.4, 0.4, 1.6, 30);
const cylinderMesh = new THREE.Mesh(cylinder, diff);
scene.add(cylinderMesh);

//adding 3d models

const loadingManager = new THREE.LoadingManager();

const loader = new THREE.GLTFLoader(loadingManager);
let mixer;
let mixer2;
let action;
let action2;
let man;
let shirt;
let jeans;

let colorArr = [
  {
    s: "0xFFFFFF",
    j: "0x8B4513",
  },
  {
    s: "0x4682B4",
    j: "0x000000",
  },
  {
    s: "0xFF0000",
    j: "0xFFFFFF",
  },
  {
    s: "0x008000",
    j: "0x8B4513",
  },
  {
    s: "0xFFFF00",
    j: "0x808080",
  },
  {
    s: "0x800080",
    j: "0x6F7285",
  },
  {
    s: "0xFFA500",
    j: "0xC3B091",
  },
];

let colorNum = 1;

loader.load("./models/character4.glb", function (gltf) {
  man = gltf.scene;
  // man.traverse(function (node) {
  //   if (node.isMesh) {
  //     node.castShadow = true;
  //   }
  // });
  scene.add(man);
  man.scale.set(0.5, 0.5, 0.5);
  man.position.set(0, -4, 0);
  shirt =
    man.children[0].children[0].children[0].children[0].children[0].children[0].children[3].material.color.setHex(
      colorArr[0].s
    );
  jeans =
    man.children[0].children[0].children[0].children[0].children[0].children[0].children[2].material.color.setHex(
      colorArr[0].j
    );
  const clips = gltf.animations;
  const clip = THREE.AnimationClip.findByName(clips, "Armature|Run");
  const clip2 = THREE.AnimationClip.findByName(clips, "Armature|Idle");

  mixer = new THREE.AnimationMixer(man);
  mixer2 = new THREE.AnimationMixer(man);

  action = mixer.clipAction(clip);

  action2 = mixer2.clipAction(clip2);
});

loader.load("./models/env2.glb", function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.scale.set(1, 1, 1);
  model.position.set(0, 0, 0);
  model.receiveShadow = true;
});

let portalAnime;
loader.load("./models/portal.glb", function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  portalAnime = new THREE.AnimationMixer(model);
  const clips = gltf.animations;
  clips.forEach(function (clip) {
    const action = portalAnime.clipAction(clip);
    action.play();
  });
  model.scale.set(0.8, 0.8, 0.8);
  model.position.set(1, 0, -15);
});

let statueMixer1;
let statueMixer2;
let statueUpAction;
let statueRotateAction;
loader.load("./models/statue3.glb", function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.scale.set(0.8, 0.8, 0.8);
  model.position.set(-8, 0.2, -2);
  const clips = gltf.animations;
  const clip = THREE.AnimationClip.findByName(clips, "Object_2Action");
  const clip2 = THREE.AnimationClip.findByName(clips, "CylinderAction");
  statueMixer1 = new THREE.AnimationMixer(model);
  statueMixer2 = new THREE.AnimationMixer(model);

  statueUpAction = statueMixer1.clipAction(clip);
  statueRotateAction = statueMixer2.clipAction(clip2);
});

let ball;
loader.load("./models/low-poly_football.glb", function (gltf) {
  ball = gltf.scene;
  scene.add(ball);
  ball.scale.set(1, 1, 1);
  ball.position.set(0, 0.2, 0);
});

let signBoard;
loader.load("./models/signBoard2.glb", function (gltf) {
  signBoard = gltf.scene;
  scene.add(signBoard);
  signBoard.scale.set(0.5, 0.5, 0.5);
  signBoard.position.set(-2, 0, 14);
});

let skillChestMixer;
let skillChestAction;
loader.load("./models/skillChest.glb", function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.scale.set(0.15, 0.15, 0.15);
  model.position.set(3, 0.2, 6);
  model.rotateY(-0.5);

  const clips = gltf.animations;
  const clip = THREE.AnimationClip.findByName(clips, "Scene");
  skillChestMixer = new THREE.AnimationMixer(model);

  skillChestAction = skillChestMixer.clipAction(clip);
  skillChestAction.play();
});

loader.load("./models/book_pillar.glb", function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.scale.set(0.3, 0.3, 0.3);
  model.position.set(-15, 0.2, 3);
});

loader.load("./models/designStones.glb", function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.scale.set(1, 1, 1);
  model.position.set(7, 0, -1.5);
});

//adding physics

const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.81, 0),
});

const cannon_mat = new CANNON.Material();

const groundBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(25, 25, 0.1)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
groundBody.position.set(0, 0.2, 0);
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
  shape: new CANNON.Box(new CANNON.Vec3(20, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(topBBody);

const bottomBBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(20, 1.5, 0.25)),
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
  shape: new CANNON.Box(new CANNON.Vec3(0.3, 1.5, 0.3)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(wizBody);

const potBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.9, 1.5, 0.9)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(potBody);

const chest1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(2, 1.5, 0.5)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(chest1Body);

const chest2Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(1, 1.5, 0.5)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(chest2Body);

const portalBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(1.5, 1.5, 0.7)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(portalBody);

const tree1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree1Body);

const tree2Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree2Body);

const tree3Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree3Body);

const tree4Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree4Body);

const tree5Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree5Body);

const tree6Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree6Body);

const tree7Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree7Body);

const tree8Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree8Body);

const tree9Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree9Body);

const tree10Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree10Body);

const tree11Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree11Body);

const tree12Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree12Body);

const tree13Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree13Body);

const tree14Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree14Body);

const tree15Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree15Body);

const tree16Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree16Body);

const tree17Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 1.5, 0.25)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(tree17Body);

const well1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.7, 1.5, 0.7)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(well1Body);

const well2Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.7, 1.5, 0.7)),
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
  shape: new CANNON.Box(new CANNON.Vec3(0.8, 1.5, 0.6)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(barrel2Body);

const barrel3Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.8, 1.5, 1.2)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(barrel3Body);

const cart1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(2.1, 1.5, 0.8)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(cart1Body);

const cart2Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(2.1, 1.5, 0.8)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(cart2Body);

const pole1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.2, 1.5, 0.2)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(pole1Body);

const pole2Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.2, 1.5, 0.2)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(pole2Body);

const statueBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(1, 1.5, 1)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(statueBody);

const ballBody = new CANNON.Body({
  mass: 3,
  shape: new CANNON.Sphere(0.08),
  position: new CANNON.Vec3(-2, 4, 0),
  // type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(ballBody);

const board1Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.6, 0.2)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(board1Body);

const board2Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.6, 0.2)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(board2Body);

const board3Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.6, 0.2)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(board3Body);

const skillChestBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.75, 1.5, 0.5)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(skillChestBody);

const book_pillarBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(0.4, 1.5, 0.4)),
  type: CANNON.Body.STATIC,
  material: cannon_mat,
});
world.addBody(book_pillarBody);

const manBody = new CANNON.Body({
  mass: 1000,
  shape: new CANNON.Cylinder(0.4, 0.4, 1.6, 30),
  // shape: new CANNON.Box(new CANNON.Vec3(0.3, 1, 0.2)),
  position: new CANNON.Vec3(0, 4, 16),
  material: cannon_mat,
});
world.addBody(manBody);
manBody.fixedRotation = true;

// document.getElementById("enter").style.display="none"
let x;

loadingManager.onProgress = function (url, loaded, total) {
  x = Math.ceil((loaded / total) * 100);
  document.getElementById("loading").innerText = `${x}%`;
};

loadingManager.onLoad = function () {
  setTimeout(() => {
    document.getElementById("info").style.display = "grid";
    document.getElementById("loading").style.display = "none";
  }, 1000);
};

const timeStep = 1 / 60;

let w = false;
let a = false;
let s = false;
let d = false;

//adding raycaster

const mousePosition = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let intersects;
let board1Intersect;
let board2Intersect;
let board3Intersect;

window.addEventListener("mousemove", function (e) {
  mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mousePosition, camera);
  intersects = raycaster.intersectObject(cylinderMesh);
  board1Intersect = raycaster.intersectObject(board1Mesh);
  board2Intersect = raycaster.intersectObject(board2Mesh);
  board3Intersect = raycaster.intersectObject(board3Mesh);
  if (
    (intersects.length != 0 ||
      board1Intersect.length != 0 ||
      board2Intersect.length != 0 ||
      board3Intersect.length != 0) &&
    entered
  ) {
    document.body.style.cursor = "pointer";
  } else {
    document.body.style.cursor = "auto";
  }
});
let entered = false;

window.addEventListener("click", function () {
  if (entered) {
    if (intersects.length != 0 && shirt && jeans) {
      shirt.setHex(colorArr[colorNum].s);
      jeans.setHex(colorArr[colorNum].j);
      colorNum++;
      if (colorNum > 6) {
        colorNum = 0;
      }
    }
    if (board1Intersect.length != 0) {
      window.open("https://github.com/jahid28", "_blank");
    }
    if (board2Intersect.length != 0) {
      window.open("https://www.linkedin.com/in/jahidkhan2003/", "_blank");
    }
    if (board3Intersect.length != 0) {
      window.open("mailto:jahidkhan777367@gmail.com", "_blank");
    }
  }
});

//adding css2d elements

const labelRenderer = new THREE.CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.top = "0px";
labelRenderer.domElement.style.pointerEvents = "none";
document.body.appendChild(labelRenderer.domElement);

const p = document.createElement("p");
p.id = "linkP";
p.textContent = "Click the board to open the link";

const p2 = document.createElement("p");
p2.id = "mern";
p2.className = "skills";
p2.textContent = "MERN Stack";

const p3 = document.createElement("p");
p3.id = "nextjs";
p3.className = "skills";
p3.textContent = "Next JS";

const p4 = document.createElement("p");
p4.id = "threejs";
p4.className = "skills";
p4.textContent = "Three JS";

const skillDiv = document.createElement("div");
skillDiv.id = "skillDiv";
skillDiv.appendChild(p2);
skillDiv.appendChild(p3);
skillDiv.appendChild(p4);

const pLabel = new THREE.CSS2DObject(p);
scene.add(pLabel);
pLabel.position.set(-3.5, 1.5, 14);

const p2Lable = new THREE.CSS2DObject(p2);
scene.add(p2Lable);
p2Lable.position.set(2, 1.5, 5);

const p3Lable = new THREE.CSS2DObject(p3);
scene.add(p3Lable);
p3Lable.position.set(4.5, 1.5, 6);

const p4Lable = new THREE.CSS2DObject(p4);
scene.add(p4Lable);
p4Lable.position.set(3, 2, 7.5);

let wiz_div = false;
let portal_div = false;
let vol = true;
let info = true;

let statue_div = false;
let key = false;
let summoned = false;

let skillChest_div = false;
let skillChestAnimation = false;
let chestOpen = false;

let bookPillar_msg = false;

let ecom_msg = false;

let ohub_msg = false;

let chess_msg = false;

const clock = new THREE.Clock();
const clock2 = new THREE.Clock();
const portalClock = new THREE.Clock();
const statueUpClock = new THREE.Clock();
const statueRotateClock = new THREE.Clock();
const skillChestClock = new THREE.Clock();
let vel = 0.02;
let up = true;

camera.position.set(manBody.position.x, 5, manBody.position.z + 9);

//copying physics properties to 3d objects

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
tree10Body.position.copy(tree10Mesh.position);
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
statueBody.position.copy(statueMesh.position);
board1Body.position.copy(board1Mesh.position);
board2Body.position.copy(board2Mesh.position);
board3Body.position.copy(board3Mesh.position);
skillChestBody.position.copy(skillChestMesh.position);
skillChestBody.quaternion.copy(skillChestMesh.quaternion);
book_pillarBody.position.copy(book_pillarMesh.position);

function animate() {
  if (w || a || s || d) {
    camera.position.set(manBody.position.x, 5, manBody.position.z + 9);
  }

  if (portalAnime) {
    portalAnime.update(portalClock.getDelta());
  }

  if (statueMixer1 && summoned) {
    statueMixer1.update(statueUpClock.getDelta());
    if (up) {
      statueUpAction.play();
    } else {
      statueUpAction.paused = true;
    }
  }
  if (statueMixer2 && summoned) {
    statueMixer2.update(statueRotateClock.getDelta());
    statueRotateAction.play();
  }

  if (skillChestAnimation) {
    skillChestMixer.update(skillChestClock.getDelta());
    skillChestAction.play();
  }

  if (mixer && (w || a || s || d)) {
    mixer.update(clock.getDelta());
    action.play();
    action2.stop();
  }
  if (mixer2 && !w && !a && !s && !d) {
    mixer2.update(clock2.getDelta());
    action.stop();
    action2.play();
  }

  cylinderMesh.position.copy(manBody.position);
  // cylinderMesh.quaternion.copy(manBody.quaternion);

  if (ball) {
    ball.position.copy(ballBody.position);
    ball.quaternion.copy(ballBody.quaternion);
  }

  if (man) {
    man.position.x = manBody.position.x;
    man.position.y = manBody.position.y - 0.8;
    man.position.z = manBody.position.z;
    // man.quaternion.copy(manBody.quaternion);

    if (w && d && !a && !s) {
      manBody.position.z -= vel;
      manBody.position.x += vel;
      man.rotation.y = 2.4;
    } else if (w && a && !d && !s) {
      manBody.position.z -= vel;
      manBody.position.x -= vel;
      man.rotation.y = 4;
    } else if (s && d && !a && !w) {
      manBody.position.z += vel;
      manBody.position.x += vel;
      man.rotation.y = 0.8;
    } else if (s && a && !d && !w) {
      manBody.position.z += vel;
      manBody.position.x -= vel;
      man.rotation.y = 5.6;
    } else if (w && !a && !d && !s) {
      manBody.position.z -= vel;
      man.rotation.y = 3.2;
    } else if (s && !d && !a && !w) {
      manBody.position.z += vel;
      man.rotation.y = 0;
    } else if (a && !s && !d && !w) {
      manBody.position.x -= vel;
      man.rotation.y = 4.8;
    } else if (d && !a && !s && !w) {
      manBody.position.x += vel;
      man.rotation.y = 1.6;
    }
  }

  if (
    3.5 > manBody.position.x &&
    manBody.position.x > -1.5 &&
    -13 > manBody.position.z &&
    manBody.position.z > -17
  ) {
    portal_div = true;
  } else {
    portal_div = false;
  }

  if (
    -17.5 > manBody.position.x &&
    manBody.position.x > -22 &&
    -11 > manBody.position.z &&
    manBody.position.z > -15
  ) {
    // console.log("wiz");
    wiz_div = true;
  } else {
    wiz_div = false;
  }

  if (
    -6 > manBody.position.x &&
    manBody.position.x > -10 &&
    0 > manBody.position.z &&
    manBody.position.z > -4
  ) {
    // console.log("statue");
    statue_div = true;
  } else {
    statue_div = false;
  }

  if (
    4 > manBody.position.x &&
    manBody.position.x > 1 &&
    8 > manBody.position.z &&
    manBody.position.z > 5
  ) {
    // console.log("skillChest");
    skillChest_div = true;
  } else {
    skillChest_div = false;
  }

  if (
    -14 > manBody.position.x &&
    manBody.position.x > -16 &&
    4 > manBody.position.z &&
    manBody.position.z > 2
  ) {
    // console.log("bookPillar_msg");
    bookPillar_msg = true;
  } else {
    bookPillar_msg = false;
  }

  if (
    5.4 > manBody.position.x &&
    manBody.position.x > 3.6 &&
    -0.6 > manBody.position.z &&
    manBody.position.z > -2.1
  ) {
    // console.log("ecom");
    ecom_msg = true;
  } else {
    ecom_msg = false;
  }

  if (
    7.8 > manBody.position.x &&
    manBody.position.x > 6 &&
    -0.6 > manBody.position.z &&
    manBody.position.z > -2.1
  ) {
    ohub_msg = true;
  } else {
    ohub_msg = false;
  }
  if (
    10.2 > manBody.position.x &&
    manBody.position.x > 8.4 &&
    -0.6 > manBody.position.z &&
    manBody.position.z > -2.1
  ) {
    chess_msg = true;
  } else {
    chess_msg = false;
  }

  if (wiz_div && !key) {
    document.getElementById("wiz_msg").style.display = "grid";
  } else {
    document.getElementById("wiz_msg").style.display = "none";
  }

  if (portal_div) {
    document.getElementById("portal_msg").style.display = "grid";
  } else {
    document.getElementById("portal_msg").style.display = "none";
  }

  if (statue_div && !summoned) {
    document.getElementById("statue_msg").style.display = "grid";
  } else {
    document.getElementById("statue_msg").style.display = "none";
  }

  if (skillChest_div && !chestOpen) {
    document.getElementById("skillChest_msg").style.display = "grid";
  } else {
    document.getElementById("skillChest_msg").style.display = "none";
  }

  if (bookPillar_msg) {
    document.getElementById("bookPillar_msg").style.display = "grid";
  } else {
    document.getElementById("bookPillar_msg").style.display = "none";
  }
  if (ecom_msg) {
    document.getElementById("ecom_msg").style.display = "grid";
  } else {
    document.getElementById("ecom_msg").style.display = "none";
  }
  if (ohub_msg) {
    document.getElementById("ohub_msg").style.display = "grid";
  } else {
    document.getElementById("ohub_msg").style.display = "none";
  }
  if (chess_msg) {
    document.getElementById("chess_msg").style.display = "grid";
  } else {
    document.getElementById("chess_msg").style.display = "none";
  }

  world.step(timeStep);
  labelRenderer.render(scene, camera);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
// renderer.setAnimationLoop(animate);

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
});

//all audio

let bg_music3 = new Audio("/sounds/bg_music3.mp3");
bg_music3.loop = true;
bg_music3.volume = 0.15;
let welcomeAudio = new Audio("/sounds/welcome.wav");
let keyAudio = new Audio("/sounds/keys.wav");
let rockAudio = new Audio("/sounds/rock.mp3");
let chestAudio = new Audio("/sounds/chest.wav");
let stoneAudio = new Audio("/sounds/stone.wav");

window.addEventListener("keydown", (e) => {
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

if ("ontouchstart" in window) {
  // Touch screen device detected
  // console.log("Touch screen device detected.");
  document.getElementById("phoneControls").style.display = "grid";
}

document
  .getElementById("controlUp")
  .addEventListener("touchstart", function () {
    w = true;
  });
document.getElementById("controlUp").addEventListener("touchend", function () {
  w = false;
});

document
  .getElementById("controlLeft")
  .addEventListener("touchstart", function () {
    a = true;
  });
document
  .getElementById("controlLeft")
  .addEventListener("touchend", function () {
    a = false;
  });

document
  .getElementById("controlDown")
  .addEventListener("touchstart", function () {
    s = true;
  });
document
  .getElementById("controlDown")
  .addEventListener("touchend", function () {
    s = false;
  });

document
  .getElementById("controlRight")
  .addEventListener("touchstart", function () {
    d = true;
  });
document
  .getElementById("controlRight")
  .addEventListener("touchend", function () {
    d = false;
  });

let enterBtn = document.getElementById("enter");

enterBtn.addEventListener("click", function () {
  document.getElementById("loadingCont").style.top = "130vh";
  document.getElementById("transitionHelper").style.top = "130vh";
  // document.getElementById("transitionHelper").style.transition="all linear .6s";
  document.getElementById("transitionHelper").style.transitionDelay = ".1s";
  setTimeout(() => {
    document.getElementById("loadingCont").style.display = "none";
  }, 1000);
  entered = true;
  bg_music3.play();
});

enterBtn.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  let itemWidth = enterBtn.clientWidth;
  let itemHeight = enterBtn.clientHeight;
  let transX = x - itemWidth / 2;
  let transY = y - itemHeight / 2;

  enterBtn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
});

enterBtn.addEventListener("mouseout", (e) => {
  enterBtn.style.transform = ``;
});

document.getElementById("vol").addEventListener("click", function () {
  if (vol) {
    document.getElementById("volon").style.display = "none";
    document.getElementById("voloff").style.display = "block";
    vol = false;
    bg_music3.pause();
    // welcomeAudio.pause()
  } else {
    document.getElementById("volon").style.display = "block";
    document.getElementById("voloff").style.display = "none";
    vol = true;
    bg_music3.play();
    // welcomeAudio.play()
  }
});

document.getElementById("infoBtn").addEventListener("click", function () {
  if (info) {
    document.getElementById("infoon").style.display = "none";
    document.getElementById("infooff").style.display = "block";
    document.getElementById("infoCont").style.top = "0";
    document.getElementById("infoCont").style.transitionDelay = ".4s";
    document.getElementById("transitionHelper").style.top = "0vh";
    document.getElementById("transitionHelper").style.transitionDelay = "0s";
    // document.getElementById("transitionHelper").style.transition="all linear .1s";
    info = false;
    entered = false;
  } else {
    document.getElementById("infoon").style.display = "block";
    document.getElementById("infooff").style.display = "none";
    document.getElementById("infoCont").style.top = "130vh";
    document.getElementById("infoCont").style.transitionDelay = "0s";
    document.getElementById("transitionHelper").style.top = "130vh";
    // document.getElementById("transitionHelper").style.transition="all linear .6s";
    document.getElementById("transitionHelper").style.transitionDelay = ".2s";
    info = true;
    entered = true;
  }
});

document.getElementById("keyBtn").addEventListener("click", function () {
  document.getElementById("keyImg").style.display = "block";
  key = true;
  keyAudio.play();
});

document.getElementById("statueBtn").addEventListener("click", function () {
  if (!key) {
    document.getElementById("noKeyMsg").style.display = "block";
    setTimeout(() => {
      document.getElementById("noKeyMsg").style.display = "none";
    }, 3000);
  } else {
    document.getElementById("congrats").style.display = "grid";
    setTimeout(() => {
      document.getElementById("congrats").style.display = "none";
    }, 5000);
    summoned = true;
    document.getElementById("keyImg").style.display = "none";
    rockAudio.play();

    setTimeout(() => {
      up = false;
      rockAudio.pause();
    }, 2400);
  }
});

document.getElementById("skillChestBtn").addEventListener("click", function () {
  skillChestAnimation = true;
  chestOpen = true;
  setTimeout(() => {
    chestAudio.play();
    chestAudio.volume = 0.3;
    document.getElementById("mern").style.opacity = 1;
    document.getElementById("nextjs").style.opacity = 1;
    document.getElementById("threejs").style.opacity = 1;
  }, 1500);
  setTimeout(() => {
    skillChestAnimation = false;
  }, 5000);
});
