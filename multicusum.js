var arr = [1,3,6,4,9,10,18];

var three = arr.filter(ele => (ele%3 === 0))
//console.log(three);
var sum = three.reduce((total,ele) => total+(ele**3),0);

console.log(sum);