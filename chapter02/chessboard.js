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
