// zdog-demo.js

// rotating flag variable
let isSpinning = true;

// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: ".zdog-canvas",
  // zoom up 4x
  zoom: 4,
  dragRotate: true,
  onDragStart: function () {
    isSpinning = false;
  },
});

// add circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 20,
  // position closer
  translate: { z: 10 },
  stroke: 5,
  color: "#636",
});

new Zdog.Rect({
  addTo: illo,
  width: 20,
  height: 20,
  // position further back
  translate: { z: -10 },
  stroke: 3,
  color: "#E62",
  fill: true,
});
// update & render

// Animate
function animate() {
  // rotate
  if (isSpinning) {
    illo.rotate.y += 0.03;
  }
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
// start animation
animate();
