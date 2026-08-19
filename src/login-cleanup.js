function setReactValue(input,value){
  const setter=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;
  setter.call(input,value);input.dispatchEvent(new Event('input',{bubbles:true}));input.dispatchEvent(new Event('change',{bubbles:true}));
}
function cleanLogin(){
  const card=document.querySelector('.login-card');if(!card||card.dataset.cleaned)return;
  card.dataset.cleaned='true';
  card.querySelectorAll('h2').forEach(x=>{if(x.textContent.includes('Demo'))x.textContent='Login'});
  card.querySelectorAll('p').forEach(x=>{if(x.textContent.includes('Citizen:'))x.remove()});
  card.querySelectorAll('input').forEach(x=>setReactValue(x,''));
}
new MutationObserver(cleanLogin).observe(document.documentElement,{childList:true,subtree:true});cleanLogin();
