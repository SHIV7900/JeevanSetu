document.addEventListener('click',e=>{if(e.target.closest('[data-logout]'))sessionStorage.removeItem('js_auth_screen')},true);
