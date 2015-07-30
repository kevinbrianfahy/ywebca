Exer.min = function (a,b,c) {
  if (a<b && a<c){
    return a;
  } else if (a==b && a<c) {
    return a;
  } else if (a==b && a==c) {
    return a;
  } else if (a==c && a<b) {
    return a;  
  } else if (b<a && b<c) {
    return b;
  } else if (b==a && b<c) {
    return b;
  } else if (b==c && b<a) {
    return b;
  } else if (c<a && c<b){
    return c;
  } else if (c==a && c<b) {
    return c;
  } else if (c==b && c<a) {
    return c;  
  } else if (c==undefined && a<b) {
    return a;
  } else if (c==undefined && b<a) {
    return b;
  } else if (c==undefined && a==b){
    return a;
  }
};

Exer.min3 = function (a,b,c) {
  if (a<b && a<c){
    return a;
  } else if (a==b && a<c) {
    return a;
  } else if (a==b && a==c) {
    return a;
  } else if (a==c && a<b) {
    return a;  
  } else if (b<a && b<c) {
    return b;
  } else if (b==a && b<c) {
    return b;
  } else if (b==c && b<a) {
    return b;
  } else if (c<a && c<b){
    return c;
  } else if (c==a && c<b) {
    return c;
  } else if (c==b && c<a) {
    return c;  
  }  
};

/* First Step
Exer.min = function (a,b) {
  if (a<b) {
    return a;
  } else if (b<a) {
    return b;
  } else if (a==b){
    return a;
 } else if (b==undefined) {
    return a;
  }
};
Exer.min2=function (a, b)
*/

