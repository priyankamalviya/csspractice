let bar = $('span');
let p = $('p');

let width = bar.attr('style');
width = width.replace("width:", "");

let start = 0;
let current = start;
let end = parseInt(width);
console.log(end);
let calculateProgress = function(){
  current++;
  p.html(current + '%'); 
  
  if(current === end){
    clearInterval(interval);
  }
}

interval = setInterval(calculateProgress, (1000/ (end+1)));
