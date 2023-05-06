let dataTitle;
let dataDescription;
let dataDetails;
let dataLink;
const container = document.getElementById("detailsContainer");
const getDataFromResourceDetail = (title, description, details, link) => {
    dataTitle = title;
    dataDescription = description;
    dataDetails = details;
    dataLink = link;
}
document.addEventListener("DOMContentLoaded", () => {
    renderResourceDetails(dataTitle, dataDescription, dataDetails,dataLink);
  });
const renderResourceDetails =  (title, description, details, link) => {
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

export default getDataFromResourceDetail;