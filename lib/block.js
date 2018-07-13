function Block(x, y) {
  this.x = x;
}

Block.prototype.moveRight = function () {
  this.x = this.x + 1;
  return this;
  // What other ways could you do this?
  // If the tests s
}
  
module.exports = Block;
