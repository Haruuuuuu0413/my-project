let myBirthTime = new Date('2009-4-13 14:00');
function updateParagraph(){
let now = new Date();
let seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
document.getElementById('birth-time').innerText =
  '生まれてから' + seconds + '秒経過。';
}
setInterval(updateParagraph, 60);

function area0fCircle(r){
  let area = r*r*3.14 ;
  return area;
}
document.write('<p>半径 5cm の円の面積は'+ area0fCircle(5) + 'です。<p>')
document.write('<p>半径 10cm の円の面積は'+ area0fCircle(10) + 'です。<p>')
document.write('<p>半径 15cm の円の面積は'+ area0fCircle(15) + 'です。<p>')

function collatz(n){
  document.write(`Nの値が ${n} になりました。<br>`);
  if(n===1){
    console.log(`終了`);
  }
  else if(n% 2===0){
    collatz(n/2);
  } else{
    collatz(n*3+1);
  }

}
collatz(9999);