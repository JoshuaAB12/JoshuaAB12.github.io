function moveScenery() {
  for (let i = 0; i < scenery.building.instances.length; i++) {
    const buildingInstance = scenery.building.instances[i];
    buildingInstance.x += buildingInstance.speedX - currentLevel.speed;
    if (buildingInstance.x + buildingInstance.width < 0) {
      buildingInstance.x = scenery.building.loopWidth;
    }
  }

  for (let i = 0; i < scenery.lamp.instances.length; i++) {
    const lampInstance = scenery.lamp.instances[i];
    lampInstance.x += lampInstance.speedX - currentLevel.speed;
    if (lampInstance.x + lampInstance.width < 0) {
      lampInstance.x = scenery.lamp.loopWidth;
    }
  }
}

function generateLevel() {
  // TODO 3: Generate the current level's game objects
  for (let i = 0; i < currentLevel.gameObjects.length; i++) {
    const currentObject = currentLevel.gameObjects[i];
    create(currentObject);
    console.log(currentObject.type);
    console.log(currentObject.kind);
  }
}

function create(obj) {
  if (obj.type === "obstacle") {
    makeObstacle(obj);
  } else if (obj.type === "enemy") {
    makeEnemy(obj);
  } else if (obj.type === "powerup") {
    makePowerup(obj);
  } else if (obj.type === "goal") {
    makeGoal(obj);
  } else if (obj.type === "platform") {
    makePlatform(obj);
  }
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
  const matchingObjects = [];
  for (let i = 0; i < gameObjects.length; i++) {
    if (gameObjects[i].type === type) {
      matchingObjects.push(gameObjects[i]);
    }
  }
  console.log(matchingObjects);
  return matchingObjects;
}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
  for (let i = 0; i < objectList.length; i++) {
    const currentObject = objectList[i];
    currentObject.x += currentObject.speedX - currentLevel.speed;
  }
}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
  for (var i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];
    for (var j = 0; j < projectiles.length; j++) {
      var currentProjectile = projectiles[j];
      if (isCollidingWithProjectile(currentObject, currentProjectile) === true) {
        handleProjectileObjectCollision(j, i);
      }
    }
  }
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
  for (var i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];
    if (currentObject.type !== "platform" && isGenericCollision(currentObject) === true) {
      handleHallebotGenericCollision(i);
      }
  }
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
  currentLevelIndex += 1;
  gameObjects = [];
  if (currentLevelIndex >= LEVELS.length) {
    player.winConditionMet = true;
    return;
  }
  currentLevel = LEVELS[currentLevelIndex];
  generateLevel();
}
