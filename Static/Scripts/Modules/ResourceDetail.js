import { getHotlineData } from '../Modules/CrisisConnectorEndpoints.js';
/* This is function that takes parameters to append as the child on the UI */
const createElementAndAppend = (parent, tag, id, text, classes = []) => {
    const element = document.createElement(tag);
    parent.appendChild(element);
    if (id) element.id = id;
    if (text) element.innerHTML = text;
    if(tag == "img") element.src = text; 
    classes.forEach(className => element.classList.add(className));
    return element;
}
/* The resourceName is a parameter that is passed from site.js.
The goal is when the user types Resources/Depression, it'll 
take the depression and then check weather it is on the .json
and this display it accordingly */
const renderResourceDetail =  async (ResouceName) => {   
    (async () => {
        const displayResourceDetail = data => {
            if (!data) return;
            data.forEach(({ category, types }) => {
                types.forEach(({ title, description, details, link, image_path }) => {
                    if(ResouceName === title) {
                        const container = document.getElementById("detailsContainer");
                        container.style.width = "80%";
                        container.style.margin = "auto";
                        container.style.paddingTop = "20px";
                        createElementAndAppend(container,'h1',null,title);
                        createElementAndAppend(container,'p',null,description);
                        createElementAndAppend(container,'p',null,details);
                        const resourceLink =createElementAndAppend(container,'a',null,"Click Me");
                        resourceLink.href = link;
                        resourceLink.innerHTML = "Visit Resource";
                        resourceLink.target = "_blank";
                    }        
                });
            });
        }
        displayResourceDetail(await getHotlineData('resource'));
    })();
}
export { renderResourceDetail };