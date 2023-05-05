const container = document.getElementById("ResourcesMainContainer");

(async () => {
  const getHotlineData = async () => {
		try {
			const url = '/api/resource';
			const response = await fetch(url);
			return await response.json();
		} catch (error) {
			console.error(error);
		}
	}

  
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
        //resourceAncor.href = `ResourceDetail.html?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&details=${encodeURIComponent(details)}&link=${encodeURIComponent(link)}`;
        resourceAncor.href = `/Resources/userParam?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&details=${encodeURIComponent(details)}&link=${encodeURIComponent(link)}`;
      });
    });
  }
    displayHotlines(await getHotlineData());
})();

// function displayHotlines(data) {  
//   console.log(data);
//   data?.forEach(({category, types}) => {
//     const resourceGrid = document.createElement('div');
//     resourceGrid.className = "resource-grid";
//     const categoryHeading = document.createElement('h2');
//     categoryHeading.innerHTML = category;
//     categoryHeading.className = "category-title";
//     container.appendChild(categoryHeading);
//     container.appendChild(resourceGrid);
//     types.forEach(({title, description, details, link, image_path}) => {
//       const resourceItem = document.createElement('div');
//       resourceItem.className = "resource-item";
//       const resourceImage = document.createElement('img');
//       resourceImage.src = image_path;
//       console.log(image_path);
//       const resourceInfo = document.createElement('div');
//       resourceInfo.className = "resource-info";
//       resourceGrid.appendChild(resourceItem);
//       resourceItem.appendChild(resourceImage);
//       resourceItem.appendChild(resourceInfo);
//       const resourceHeading = document.createElement('h2');
//       resourceHeading.className = "resource-title";
//       const resourceParagraph = document.createElement('p');
//       resourceParagraph.className = "resource-desc"
//       const resourceAncor = document.createElement('a');
//       resourceAncor.className = "resource-link";
//       resourceHeading.innerHTML = title;
//       resourceParagraph.innerHTML = description;
//       resourceAncor.innerHTML = "More Info";
//       resourceAncor.href = `ResourceDetail.html?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&details=${encodeURIComponent(details)}&link=${encodeURIComponent(link)}`; // In the url adding the differnt values
//       resourceAncor.target = '_blank';
//       resourceInfo.appendChild(resourceHeading);
//       resourceInfo.appendChild(resourceParagraph);
//       resourceInfo.appendChild(resourceAncor);
//     });
//   });
// }
