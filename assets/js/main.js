document.addEventListener('DOMContentLoaded', ()=> {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if(btn && nav){
    btn.addEventListener('click', ()=> {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '8px';
    });
  }
});
