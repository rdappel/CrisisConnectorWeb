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
        createElementAndAppend(container, 'h2', null , category, ['category-title']); 
        const resourceGrid = createElementAndAppend(container, 'div', null, null, ['resource-grid']); 
        types.forEach(({ title, description, details, link, image_path }) => {
            const resourceItem = createElementAndAppend(resourceGrid, 'div', null, null, ['resource-item']);
            createElementAndAppend(resourceItem, 'img', null, image_path); 
            const resourceInfo = createElementAndAppend(resourceItem, 'div', null, null, ['resource-info']); 
            createElementAndAppend(resourceInfo, 'h2', null, title, ['resource-title']);
            createElementAndAppend(resourceInfo, 'p', null, description, ['resource-desc']);
            let resourceAncor = createElementAndAppend(resourceInfo, 'a', null, "More Info", ['resource-link']);
            resourceAncor.href = "/Resources/" + title;
        });
        });
    }
        displayHotlines(await getHotlineData('resource'));
    })();
}
export { renderResourceList };