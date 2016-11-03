class Boot {
    preload() {
     this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
     this.scale.pageAlignHorizontally = true;                                                  this.scale.pageAlignVertically = true;
                    }
  create() {
    this.state.start("Load")
  }
 class Load {
     preload() {
           console.log("Loading...");
             }
               create() {
                     console.log("Loaded");
                     this.load.image("bg","assets/background.png")
                       }



}

var game = new Phaser.Game(568,320);
game.state.add("Boot",Boot);
game.state.start("Boot");

