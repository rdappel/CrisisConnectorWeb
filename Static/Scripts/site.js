import { renderHotlineListPage } from './Modules/HotlineList.js';
import { renderResourceList } from './Modules/ResourceList.js';

window.addEventListener('load', () => {
  const url = window.location.href.split("/"); // Getting the user's location
  const pageName = url.pop();
  
  if (pageName === "Resources") {
    renderResourceList();
  } else if(pageName === "Hotlines"){
    renderHotlineListPage();
  } else if(pageName === "ResourceDetail") {
    
  }
  
});
