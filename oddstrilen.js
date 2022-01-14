var arr = ['apple','banana','pink','yellow','red']

var odd = arr.filter(ele => (ele.length%2 !== 0))

var sum = odd.reduce((total,ele) => total+ele.length,0);

console.log(sum);