var arr = ['appa','amala','apple','banana','pizza']

var newarr = arr.filter(ele => (ele[0] === 'a' && ele[ele.length-1] === 'a'));

// for(var i =0 ; i<newarr.length;i++){
//     console.log(newarr[i]);
// }

newarr.forEach(ele => console.log(ele));