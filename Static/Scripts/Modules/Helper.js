/* This function was created to prevent the repetition of creating 
elements and appending it. This function, take's bunch of parameters 
and then creates an elements and appends it to the DOM. 
Note: The function will return a element */
const createElementAndAppend = (parent, tag, id, text, classes = []) => {
    const element = document.createElement(tag);
    parent.appendChild(element);
    if (id) element.id = id;
    if (text) element.innerText = text;
    if(tag == "img") element.src = text; 
    classes.forEach(className => element.classList.add(className));
    return element;
} 

export { createElementAndAppend };
