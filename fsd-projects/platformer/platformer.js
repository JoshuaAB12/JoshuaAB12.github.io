$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


     // TODO 2 - Create Platforms
    // cat face lmao
    createPlatform(35,20,10,20, "black")
    createPlatform(65,20,10,20, "black")
    createPlatform(30,60,20,10, "black")
    createPlatform(60,60,20,10, "black")
    createPlatform(50,50,10,10, "black")
    createPlatform(20,50,10,10, "black")
    createPlatform(80,50,10,10, "black")
    // actual platforms
    createPlatform(300,150,10,600, "white")
    createPlatform(100,0,10,600, "white")
    createPlatform(100,600,50,10, "blue")
    createPlatform(290,700,10,10, "blue")
    createPlatform(400,600,100,10, "green")
    createPlatform(100,470,50,10, "blue")
    createPlatform(200,340,50,10, "blue")
    createPlatform(100,210,50,10, "blue")
    createPlatform(1100,550,300,10, "green")




    // TODO 3 - Create Collectables
    createCollectable("steve",500,500,0.01,1)
    createCollectable("steve",200,100,0,1,100,300,2)
    createCollectable("steve",200,600,0,1,1300,1300,2)
    createCollectable("steve",200,100,0,1,930,930,2)



    
    // TODO 4 - Create Cannons
    createCannon("top",300,1000)
    createCannon("right",700,10000)


    // EVIL Platforms
    createBadPlatform(310,700,1100,60,"red")

    // moving Platforms
    createPlatform(600, 650, 300, 10, "yellow", 500, 1300, 3, 200, 700, 0)
    createPlatform(900,500,100,10, "yellow", 0,900,0, 200, 500, 2)

    // different sized projectiles
    
    // Moving Cannon
    createCannon("top",200,5000,20,10,200,350,3)
    createCannon("top",600,2000,20,10,600,1200,2)
    createCannon("top",600,3000,20,10,600,1200,4)
    createCannon("top",1100,1000,20,10,1100,1300,1)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
