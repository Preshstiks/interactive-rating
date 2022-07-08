var content_1 = document.querySelector('.card-1');
var content_2 = document.querySelector('.card-2');
var ratingBtns = document.querySelectorAll('.rating-btn');
var score = document.querySelector('.score');
let scores = 3

ratingBtns.forEach( btn => {
  btn.addEventListener('click', handleRatingBtnClick);
});


document.querySelector('#enter-rating').addEventListener('click', function(){
  content_1.classList.add('hide');
  content_2.classList.remove('hide');
  score.textContent = scores;
  

});
function handleRatingBtnClick(event) {
  ratingBtns.forEach( btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  scores = event.target.textContent;
  
}
