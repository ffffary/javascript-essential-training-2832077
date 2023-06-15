/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

console.log("before-left:", backpack.strapLength.left);
// 更改是通过更改函数内部的parameters，但是实际output的时候还是需要从对象里面的属性来调用
backpack.newStrapLength(10, 30);
// console.log("after-left:", backpack.newStrapLength.left);
console.log("after-left:", backpack.strapLength.left);
