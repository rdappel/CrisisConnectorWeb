import getDataFromResourceDetail from './ResourceDetail.js';
import { getHotlineData } from '../Modules/CrisisConnectorEndpoints.js';

const renderResourceList = async ()  => {
    const container = document.getElementById("ResourcesMainContainer");

    (async () => {
    const displayHotlines = data => {
        if (!data) return;

        const createElementAndAppend = (parent, tag, id, text, classes = []) => {
        const element = document.createElement(tag);
        parent.appendChild(element);
        if (id) element.id = id;
        if (text) element.innerText = text;
        if(tag == "img") element.src = text; 
        classes.forEach(className => element.classList.add(className));
        return element;
        }

        data.forEach(({ category, types }) => {
        const categoryHeading = createElementAndAppend(container, 'h2', null , category, ['category-title']); 
        const resourceGrid = createElementAndAppend(container, 'div', null, null, ['resource-grid']); 
        types.forEach(({ title, description, details, link, image_path }) => {
            const resourceItem = createElementAndAppend(resourceGrid, 'div', null, null, ['resource-item']);
            createElementAndAppend(resourceItem, 'img', null, image_path); 
            const resourceInfo = createElementAndAppend(resourceItem, 'div', null, null, ['resource-info']); 
            createElementAndAppend(resourceInfo, 'h2', null, title, ['resource-title']);
            createElementAndAppend(resourceInfo, 'p', null, description, ['resource-desc']);
            let resourceAncor = createElementAndAppend(resourceInfo, 'a', null, "More Info", ['resource-link']);
            // resourceAncor.href = "Pages/ResourceList.html";
            //getDataFromResourceDetail(title, description, details, link);
            resourceAncor.addEventListener("click", (event) => {
                window.location.href = "Pages/ResourceList.html";
                event.preventDefault(); // prevent the default behavior of following the href link
                getDataFromResourceDetail(title, description, details, link);
            });   
            //resourceAncor.href = `ResourceDetail.html?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&details=${encodeURIComponent(details)}&link=${encodeURIComponent(link)}`;
            //resourceAncor.href = `/Resources/userParam?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&details=${encodeURIComponent(details)}&link=${encodeURIComponent(link)}`;
           // ResourceDetail(title, description, details, link); 
        });
        });
    }
        displayHotlines(await getHotlineData('resource'));
    })();
}
export { renderResourceList };