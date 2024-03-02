import * as CANNON from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/+esm";

const renderer = new THREE.WebGL1Renderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

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
spotLight.power = 10000;
scene.add(spotLight);
spotLight.angle = 4;
spotLight.distance = 40;
spotLight.position.set(20, 20, 0);

const spotLight2 = new THREE.SpotLight("white", 10);
spotLight2.power = 10000;
scene.add(spotLight2);
spotLight2.angle = 4;
spotLight2.distance = 40;
spotLight2.position.set(-20, 20, 0);

const axis = new THREE.AxesHelper(20);
scene.add(axis);

const groundGeo = new THREE.PlaneGeometry(20, 20);
const groundMat = new THREE.MeshStandardMaterial({
  color: "gray",
  side: THREE.DoubleSide,
});

const groundMesh = new THREE.Mesh(groundGeo, groundMat);
scene.add(groundMesh);

const coneGeo = new THREE.CylinderGeometry(0, 1, 1, 100);
const coneMat = new THREE.MeshStandardMaterial({
  color: "brown",
});

const coneMesh = new THREE.Mesh(coneGeo, coneMat);
scene.add(coneMesh);

const cubeGeo = new THREE.BoxGeometry(1, 3, 1);
const cubeMat = new THREE.MeshStandardMaterial({
  color: "green",
});

const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
scene.add(cubeMesh);

const loadingManager = new THREE.LoadingManager();

const loader = new THREE.GLTFLoader(loadingManager);
let mixer;
let man;
loader.load("./man.glb", function (gltf) {
  // const model = gltf.scene;
  man = gltf.scene;
  scene.add(man);
  man.scale.set(1, 1, 1);
  man.position.set(0, -4, 0);
  mixer = new THREE.AnimationMixer(man);
  const clips = gltf.animations;
  // console.log("animas are ",clips);
  // Play a certain animation
  const clip = THREE.AnimationClip.findByName(clips, "mixamo.com");
  const action = mixer.clipAction(clip);
  action.play();

  // Play all animations at the same time
  // clips.forEach(function (clip) {
  //   const action = mixer.clipAction(clip);
  //   action.play();
  // });

  // swimmer.visible = false
});

const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.81, 0),
});

const groundPhysMat = new CANNON.Material();
const groundBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(10, 10, 0.1)),
  type: CANNON.Body.STATIC,
  material: groundPhysMat,
});
world.addBody(groundBody);
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

// const conePhysMat = new CANNON.Material();
// const coneBody = new CANNON.Body({
//   mass: 10,
//   shape: new CANNON.Cylinder(0, 1, 1, 100),
//   position: new CANNON.Vec3(0, 4, 0),
//   material: conePhysMat,
// });
// world.addBody(coneBody);

const cubePhysMat = new CANNON.Material();
  const cubeBody = new CANNON.Body({
    mass: 100,
    shape: new CANNON.Box(new CANNON.Vec3(.5, 1.5, .5)),
    position: new CANNON.Vec3(0, 4, 0),
    material: cubePhysMat,
  });
world.addBody(cubeBody);

const timeStep = 1 / 60;

const meshes = [];
const bodies = [];

document.getElementById("btn").addEventListener("click", function () {
  const boxGeo = new THREE.BoxGeometry(2, 2, 2);
  const boxMat = new THREE.MeshStandardMaterial({
    color: "red",
  });
  const boxMesh = new THREE.Mesh(boxGeo, boxMat);
  scene.add(boxMesh);

  const boxPhysMat = new CANNON.Material();
  const boxBody = new CANNON.Body({
    mass: 1,
    shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
    position: new CANNON.Vec3(0, 20, 0),
    material: boxPhysMat,
  });
  world.addBody(boxBody);

  meshes.push(boxMesh);
  bodies.push(boxBody);
});
const clock = new THREE.Clock();
let run = false;
let w = false;
let a = false;
let s = false;
let d = false;
let jump = false;
let angle = 0;
// let tween=new TWEEN
let current = 0; // Keep track of current rotation
let targetRotationY = 3.2;
let high = true;
let val=4

const tl=gsap.timeline()

// window.addEventListener('mousedown',function(){
//   tl.to(camera.position,{
//       z:40,
//       y:10,
//       x:0,
//       duration:1,
//       onUpdate:function(){
//           camera.lookAt(0,0,0)
//       }
//   })
//   .to(camera.position,{
//       z:70,
//       y:40,
//       x:-50,
//       duration:3,
//       onUpdate:function(){
//           camera.lookAt(0,0,0)
//       }
//   })
//   .to(camera.position,{
//       z:0,
//       y:30,
//       x:-200,
//       duration:2,
//       onUpdate:function(){
//           camera.lookAt(0,0,0)
//       }
//   })
// })

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


function animate() {
  if(-4>cubeBody.position.x && cubeBody.position.x>-5 && -4>cubeBody.position.z && cubeBody.position.z>-5){
    alert("done")
  }
  
  camera.position.set(cubeBody.position.x, 8, cubeBody.position.z+5);
  
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

    if (jump) {

        cubeBody.position.y=4;
        jump=false
      // if(val<8){
      //   val+=.1
      //   cubeBody.position.y=val;
      // }

      // setTimeout(()=>{
      //   jump=false
      // },2000)
    }

    man.position.x=cubeBody.position.x;
    man.position.y=cubeBody.position.y-1.5;
    man.position.z=cubeBody.position.z;
  // man.quaternion.copy(cubeBody.quaternion);

    if (w && d && !a && !s) {
      cubeBody.position.z -= 0.02;
      cubeBody.position.x += 0.02;
      man.rotation.y = 2.4;
    } else if (w && a && !d && !s) {
      cubeBody.position.z -= 0.02;
      cubeBody.position.x -= 0.02;
      man.rotation.y = 4;
    } else if (s && d && !a && !w) {
      cubeBody.position.z += 0.02;
      cubeBody.position.x += 0.02;
      man.rotation.y = 0.8;
    } else if (s && a && !d && !w) {
      cubeBody.position.z += 0.02;
      cubeBody.position.x -= 0.02;
      man.rotation.y = 5.6;
    } else if (w && !a && !d && !s) {
      cubeBody.position.z -= 0.02;
      man.rotation.y = 3.2;
      // console.log("y is ",man.rotation.y)
    } else if (s && !d && !a && !w) {
      cubeBody.position.z += 0.02;
      man.rotation.y = 0;
    } else if (a && !s && !d && !w) {
      cubeBody.position.x -= 0.02;
      man.rotation.y = 4.8;
    } else if (d && !a && !s && !w) {
      cubeBody.position.x += 0.02;
      man.rotation.y = 1.6;
    }

    
  }

  // new TWEEN.update();

  if (mixer && (w || a || s || d)) {
    mixer.update(clock.getDelta());
  }

  world.step(timeStep);

  groundMesh.position.copy(groundBody.position);
  groundMesh.quaternion.copy(groundBody.quaternion);

  // coneMesh.position.copy(coneBody.position);
  // coneMesh.quaternion.copy(coneBody.quaternion);
  // cubeMesh.position.copy(cubeBody.position);
  // cubeMesh.quaternion.copy(cubeBody.quaternion);

  if(man){
    

  // console.log("quan is ",man.quaternion)
  }

  for (let i = 0; i < meshes.length; i++) {
    meshes[i].position.copy(bodies[i].position);
    meshes[i].quaternion.copy(bodies[i].quaternion);
  }

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
  if (e.key == " ") {
    jump = true;
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
