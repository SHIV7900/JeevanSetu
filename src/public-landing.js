function showLanding(){
  if(sessionStorage.getItem('js_auth_screen'))return;
  const card=document.querySelector('.login-card');if(!card||card.dataset.landing)return;
  card.dataset.landing='true';card.className='public-landing';
  card.innerHTML=`<div class="landing-brand"><span>♥</span>Jeevan<span>Setu</span></div><div class="landing-content"><div class="landing-copy"><p class="landing-tag">PUBLIC SAFETY PLATFORM</p><h1>Report. Respond.<br><em>Reconnect.</em></h1><p>One trusted platform connecting citizens, police authorities and authorized rescue teams for faster, accountable response.</p><div><button class="btn" id="sign-in">Sign in</button><button class="btn outline" id="create-account">Create account</button></div></div><div class="landing-visual"><div class="visual-pin">⌖</div><b>Every report reaches the right workflow.</b><span>Location • Verification • Response tracking</span></div></div>`;
  card.querySelector('#sign-in').onclick=()=>{sessionStorage.setItem('js_auth_screen','login');location.reload()};
  card.querySelector('#create-account').onclick=()=>{sessionStorage.setItem('js_auth_screen','register');location.reload()};
}
new MutationObserver(showLanding).observe(document.documentElement,{childList:true,subtree:true});showLanding();
