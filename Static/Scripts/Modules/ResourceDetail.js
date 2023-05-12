
const getDataFromResourceDetail = () => {
    
    console.log(title, description, details)
    const container = document.getElementById("detailsContainer");
    container.style.width = "80%";
    container.style.margin = "auto";
    container.style.paddingTop = "20px";

    const resourceHeading = document.createElement('h1');
    resourceHeading.innerHTML = title;
    container.appendChild(resourceHeading);

    const resourceDescription = document.createElement('p');
    resourceDescription.innerHTML = description;
    container.appendChild(resourceDescription);

    const resourceDetails = document.createElement('p');
    resourceDetails.innerHTML = details;
    container.appendChild(resourceDetails);

    const resourceLink = document.createElement('a');
    resourceLink.href = link;
    resourceLink.innerHTML = "Visit Resource";
    resourceLink.target = "_blank";
    container.appendChild(resourceLink);
    
}
// document.addEventListener("DOMContentLoaded", () => {
//     // Call the getDataFromResourceDetail function here with the appropriate arguments
//     const title = "Resource Title";
//     const description = "Resource description";
//     const details = "Resource details";
//     const link = "https://example.com/resource";
//     getDataFromResourceDetail(title, description, details, link);
// });


export default getDataFromResourceDetail;