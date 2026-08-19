function addLogout(){
  const side=document.querySelector('aside');
  if(!side||side.querySelector('[data-logout]'))return;
  const button=document.createElement('button');
  button.dataset.logout='true';button.className='logout-button';button.textContent='Logout';
  button.addEventListener('click',()=>{localStorage.removeItem('js_token');localStorage.removeItem('js_user');location.reload()});
  side.append(button);
}
new MutationObserver(addLogout).observe(document.documentElement,{childList:true,subtree:true});addLogout();
