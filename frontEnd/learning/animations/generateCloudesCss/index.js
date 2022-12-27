let world = document.getElementById('world'),
  viewport = document.getElementById('viewport'),
worldXAngle = 0,
worldYAngle = 0,
d = 0;
/*
  objects is an array of cloud bases
  layers is an array of cloud layers
*/
var objects = [],
  layers = [];

window.addEventListener('mousemove', function (e) {
  worldYAngle = -(.5 - (e.clientX / window.innerWidth)) * 180;
  worldXAngle = (.5 - (e.clientY / window.innerHeight)) * 180;
  updateView();
});

function updateView() {
  world.style.transform = 'translateZ( ' + d + 'px ) \
    rotateX( ' + worldXAngle + 'deg) \
    rotateY( ' + worldYAngle + 'deg)';
}
/*
  Clears the DOM of previous clouds bases
  and generates a new set of cloud bases
*/
function generate() {
  objects = [];
  layers = [];
  if (world.hasChildNodes()) {
    while (world.childNodes.length >= 1) {
      world.removeChild(world.firstChild);
    }
  }
  for (let i = 0; i < 5; i++) {
    objects.push(createCloud());
  }
}
function getRandom(max, min) {
  let random = Math.round(Math.random() * (max - (min))) + (min)
  return random;
}
function getRandomScale() {
  let random = (Math.random() * (1 - (-1))) + (-1)
  return random
}
/*
  Creates a single cloud base: a div in 'world'
  that is translated randomly into world space.
  Each axis goes from -256 to 256 pixels.
*/
/*
  Creates a single cloud base and adds several cloud layers.
  Each cloud layer has random position ( x, y, z ), rotation (a)
  and rotation speed (s). layers[] keeps track of those divs.
*/
function createCloud() {
  let div = document.createElement('div');
  div.className = 'cloudBase';
  let t = 'translateX( ' + getRandom(256, -256) + 'px ) \
      translateY( ' + getRandom(256, -256) + 'px ) \
      translateZ( ' + getRandom(256, -256) + 'px )';
  div.style.transform = t;
  world.appendChild(div);
  for (let i = 0; i < 5 + Math.round(Math.random() * 10); i++) {
    let cloud = document.createElement('img');
    cloud.className = 'cloudLayer';
    cloud.setAttribute("src", "./cloud2.png")
    cloud.data = {
      x: getRandom(256, -256),
      y: getRandom(256, -256),
      z: getRandom(100, -100),
      a: getRandom(360, -360),
      s: getRandomScale(),
      speed: 0.1 * Math.random()
    };
    let t = 'translateX( ' + getRandom(256, -256) + 'px ) \
        translateY( ' + getRandom(256, -256) + 'px ) \
        translateZ( ' + getRandom(256, -256) + 'px ) \
        rotateZ( ' + getRandom(100, -100) + 'deg ) \
        scale( ' + getRandomScale + ')';
    cloud.style.transform = t;
    div.appendChild(cloud);
    layers.push(cloud);
  }
  return div;
}
/*
  Iterate layers[], update the rotation and apply the
  inverse transformation currently applied to the world.
  Notice the order in which rotations are applied.
*/
function update() {
  for (let i = 0; i < layers.length; i++) {
    let layer = layers[i];
    layer.data.a += layer.data.speed;
    let t = 'translateX( ' + layer.data.x + 'px ) \
        translateY( ' + layer.data.y + 'px ) \
        translateZ( ' + layer.data.z + 'px ) \
        rotateY( ' + (- worldYAngle) + 'deg ) \
        rotateX( ' + (- worldXAngle) + 'deg ) \
        rotateZ(' + (layer.data.a) + 'deg) \
        scale( ' + (layer.data.s) + ')';
    layer.style.transform = t;
  }

  requestAnimationFrame(update);

}
generate();
update();

window.addEventListener("mousewheel", onMouseWheel)

function onMouseWheel(event){
  event = event ? event : window.event;
  d = d - ( event.detail ? event.detail * -5 : event.wheelDelta / 8 );
  console.log(event.wheelDelta)
  updateView();
}