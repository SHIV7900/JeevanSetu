// Keeps the original React demo form generic: incidents can be reported from any location.
const categories=['Road / street','Park / open area','Building / residence','Railway / transit area','River / canal','Lake / pond','Other location'];
function updateCategory(){
  document.querySelectorAll('label').forEach(label=>{
    if(label.childNodes[0]?.textContent?.trim()==='Water body') label.childNodes[0].textContent='Location category';
  });
  document.querySelectorAll('select').forEach(select=>{
    if(select.dataset.genericCategory)return;
    if([...select.options].some(x=>x.text==='River')){
      select.dataset.genericCategory='true';
      select.innerHTML=categories.map(x=>`<option value="${x}">${x}</option>`).join('');
      select.addEventListener('change',()=>select.dispatchEvent(new Event('input',{bubbles:true})));
    }
  });
}
new MutationObserver(updateCategory).observe(document.documentElement,{childList:true,subtree:true});
updateCategory();
