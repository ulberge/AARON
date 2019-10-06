import p5 from 'p5';

import AARON from './AARON';

/* global document */

let aaron;
function sketch(p) {
  p.setup = function setup() {
    p.createCanvas(600, 400);
    p.background(255);
    p.noLoop();
    p.strokeWeight(2);

    aaron = new AARON(p);
  };

  p.draw = function draw() {
    // for (let i = 0; i < 10; i++) {
    //   p.stroke(111);
    //   p.fill(254);
    //   p.circle(Math.random() * p.width, Math.random() * p.height, 100);
    // }

    // p.stroke(111);
    // p.fill(254);
    // p.circle(350, 300, 40);
    aaron.drawPicture();
  };
}

new p5(sketch, document.getElementById('graphicsArea'));
