;(function(){
  if (typeof Hanoi === "undefined"){
    window.Hanoi = {};
  };

  var View = Hanoi.View = function($el) {
    this.game = new Hanoi.Game();
    this.$el = $el;
    this.render();
    this.clickTower();
    this.fromTower = null;
  };

  View.prototype.clickTower = function () {
    this.$el.find("li").on("click", function(event) {
      console.log(event.currentTarget);
      var tower = $(event.currentTarget).data("tower")
        if (this.fromTower === null) {
          this.fromTower = tower;
        } else {
          if (!this.game.move(this.fromTower, tower)){
            alert("YOU CAN'T DO THAT :(");
          }
          this.fromTower = null;
        }
        this.render();
        this.win();
    }.bind(this));
  }

  View.prototype.win = function () {
    if (this.game.isWon()){
      alert("you won. woohoo.");
      this.game = new Hanoi.Game();
      this.render();
    }
  }

  View.prototype.render = function () {
    var towers = this.game.towers;
    this.$el.find(".disc").detach();

    for (var towerIndex = 0 ; towerIndex < towers.length; towerIndex++) {
      var towerI = towerIndex + 1;
      if (towers[towerIndex].indexOf(1) !== -1){
        var $tower = this.$el.find(".towers li:nth-child("+ towerI +")");
        $tower.append('<h1 class="disc"></h1>');
      }
      if (towers[towerIndex].indexOf(2) !== -1){
        var $tower = this.$el.find(".towers li:nth-child("+ towerI +")");
        $tower.append('<h2 class="disc"></h2>');
      }
      if (towers[towerIndex].indexOf(3) !== -1){
        var $tower = this.$el.find(".towers li:nth-child("+ towerI +")");
        $tower.append('<h3 class="disc"></h3>');
      }
    }
  };





})();
