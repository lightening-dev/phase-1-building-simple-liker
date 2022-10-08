// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likeButton = document.getElementsByClassName('like-glyph')

//console.log(likeButton)

for (const eachHeart of likeButton) {
  eachHeart.addEventListener('click',(event) => { 
    renderLike(event)

  })

 // console.log(eachHeart);

}
const hiddenAlertMessage = document.getElementById('modal')

function renderLike(event) {
 console.log(event.target.textContent);
  mimicServerCall()
 .then(() => { 
  if( event.target.textContent == EMPTY_HEART) {
    event.target.textContent = FULL_HEART;
    event.target.className = 'activated-heart'
  }

  else if (event.target.textContent == FULL_HEART) {
    event.target.textContent = EMPTY_HEART;
    event.target.className = '';

}

 }).catch((error) => { 
  
  hiddenAlertMessage.classList.remove('hidden');
  hiddenAlertMessage.innerHTML += `<p> ${error} <p>`

    
    function addHiddenClass() {

      hiddenAlertMessage.classList.add('hidden')
    }
    setTimeout(addHiddenClass, 3000)
    console.log(addHiddenClass)
 })

//  Action Plan:
//  1. google setTimeout
//  2. look at the fist 3 links to see how it works
//  3. then watch 2 short videos
//  4. Try it!!
//  REMINDER: do all of this in the catch



  // const like = likeButton.textContent;

  // if(like == EMPTY_HEART) {
  //   likeButton.textContent = FULL_HEART;
  // }
  // else {
  //   likeButton.textContent = EMPTY_HEART;
  // }


}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
