
document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('a[download]');
  buttons.forEach(b => b.addEventListener('click', ()=>{
    // simple click feedback
    b.style.opacity = 0.6;
    setTimeout(()=> b.style.opacity = 1, 400);
  }));
});
