
// function showImage (){

//     document.getElementById('loadingImage').style.visibility="visible";
// }


// let text = document.getElementsByTagName('p')
// let mybtn = document.getElementById('btn')
// mybtn.addEventListener('click', () => {alert('welcome back')})


// function greeting (){
//     alert ('welcome back')
// }


// let text = document.getElementById('fgreet')
// let output = document.getElementById('p')
// text.addEventListener('keyup', greeting);

// function greeting () {
//     output.innerHTML = (`<p>${text.value}</p>`)
    
// }

let p = document.getElementById('p');
// let paragraph = document.querySelector('.vis')
// button.addEventListener('click', () => {p.style.visibility = 'hidden'})
function show() {
    p.classList.toggle('hideP');
  }
  document.getElementById('btn').addEventListener('click', show);