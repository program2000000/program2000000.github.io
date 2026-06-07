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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid(); 
    


    // TODO 2 - Create Platforms
    createPlatform(700, 300, 20, 200, "blue");
    createPlatform(700, 500, 100, 20, "blue");
    createPlatform(300, 700, 200, 30, "blue");
    createPlatform(500, 600, 100, 30, "blue");  
    createPlatform(300, 500, 100, 30, "blue");
    createBadPlatform(100, 400, 100, 30, "red");
    createPlatform(200, 400, 100, 30,"blue");
    createPlatform(300, 275, 60, 30, "blue");
    createPlatform(500, 300, 100, 30, "brown",375,600)
    createPlatform(700, 200, 100, 30, "blue");
    createPlatform(800, 400, 100, 30, "brown", 800,800,1,200, 475, 1);
    createPlatform( 1000, 500, 300, 30, "blue");
    createPlatform(1000, 200, 200, 30, "blue");
    createPlatform(150, 200, 50, 30, "blue");
    createPlatform(1300, 300, 100, 30, "blue"); 
    createPlatform(1300, 475, 100, 30, "blue"); 
    createBadPlatform(775, 200, 25, 30, "red");
  
    
   






    // TODO 3 - Create Collectables
    createCollectable("kennedi", 750, 450, 0.3, 0.9); 
    createCollectable("grace", 550, 550)
    createCollectable("steve", 1250, 450, 0.3, 0.9, 1000, 1250, 4);
    createCollectable("max", 150, 150);
    createCollectable("diamond", 1150, 150, 0, 1, 1000,1200,5);
    
    



    
    // TODO 4 - Create Cannons
    createCannon("top", 850, 2000);
    createCannon("right", 250, 3000);
    createCannon("bottom", 900, 1000, 20, 10, 900, 1300, 4); 
    


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
