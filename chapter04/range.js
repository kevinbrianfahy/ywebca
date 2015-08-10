var range = function(a, b, c) {
  var x = [];
  if (arguments.length ==3 && c>0) {
    for (var y = a; y<=b; y+=c) {
    x.push(y);
  	}
  } else if (arguments.length ==3 && c<0) {
    for (var y = a; y>=b; y+=c) {
    x.push(y);
    }

  } else if (arguments.length==2) {
    	for (var y = a; y<=b; y++) {
    	x.push(y);
    	}
  }
return x;
}

var sum = function(a) {
  var add = 0;
  for (var i= 0; i<a.length; i++) {
    add+=a[i];
  }
  return add;
}










/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if(!Exer) Exer = {};
for (value in this)
  Exer[value] = this[value];
if(module) module.exports = Exer;
