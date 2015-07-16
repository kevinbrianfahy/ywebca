// Student Workspace
Chess.start = function (n) {
var p
if (n==0)
  p=0;
else
   p = n || 8;
var t="";
for (var y=0; y<p; y++){
  for (var x = 0; x<p; x++){
  if ((y+x)%2==0)
  t+=" ";
  else
  t+="#";
  }
t+="\n";
}
  return t;
};

/* 1st part of exercise - the instructions from Eloquent JavaScript

var p = 8
var t="";
for (var y=0; y<p; y++){
  for (var x = 0; x<p; x++){
  if ((y+x)%2==0)
  t+=" ";
  else
  t+="#";
  }
t+="\n";
}
  console.log(t)
    */





/* finally figuring this out on my own, step one
var square = ""
for(x=0;x<8;x++){
    if(x%2==0){
      square +=" ";
    } else if (x%2!=0) {
      square += "#";
    }
}
console.log(square)
*/