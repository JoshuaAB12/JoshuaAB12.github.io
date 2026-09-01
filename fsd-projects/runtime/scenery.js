// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [
      { x: 400, width: 100, height: 300, speedX: -2 },
      { x: 100, width: 100, height: 200, speedX: -2 },
      { x: 200, width: 100, height: 300, speedX: -3 },
      { x: 150, width: 100, height: 200, speedX: -2 },
      { x: 700, width: 100, height: 340, speedX: -2 },
      { x: 750, width: 100, height: 200, speedX: -2 },
      { x: 470, width: 100, height: 300, speedX: -3 },
      { x: 630, width: 80, height: 200, speedX: -3 },
      { x: 920, width: 100, height: 300, speedX: -4 },
      { x: 900, width: 100, height: 200, speedX: -4 },
      { x: 1000, width: 100, height: 400, speedX: -3 },
      { x: 1200, width: 110, height: 200, speedX: -4 },
    ],
    
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [
      { x: 100, width: 50, height: 150, speedX: -5 },
      { x: 300, width: 50, height: 150, speedX: -5 },
      { x: 500, width: 50, height: 150, speedX: -5 },
      { x: 700, width: 50, height: 150, speedX: -5 },
      { x: 900, width: 50, height: 150, speedX: -5 },
      { x: 1100, width: 50, height: 150, speedX: -5 },
    ],
  },
};
