const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e){
  e.target.style.background = 'blue';
});

//btn.addEventListener('click', alertFunction);

function alertFunction(){
  alert("Hello, World!");
}
