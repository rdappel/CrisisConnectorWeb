const renderHotlineListPage = async ()  => {
    const getHotlineData = async () => {
		try {
			const url = '/api/hotline'
			const response = await fetch(url);
			return await response.json();
		} catch (error) {
			console.error(error);
		}
	}
	const displayHotlines = data => {
		if (!data) return;
		/* This function was created to prevent the repetition of creating 
		elements and appending it. This function, take's bunch of parameters 
		and then creates an elements and appends it to the DOM. 
		
		Note: The function will return a element */
		const createElementAndAppend = (parent, tag, id, text, classes = []) => {
			const element = document.createElement(tag);
			parent.appendChild(element);
			if (id) element.id = id;
			if (text) element.innerText = text;
			classes.forEach(className => element.classList.add(className));
			return element;
		}
		/* This code takes the .json file and starts to deserialize the file.
		It is going thought the json file and appropriately append to the DOM. */
		data.forEach(({ title, types }) => {
			const hotlineList = createElementAndAppend(document.body, 'div', 'hotlineList', null, [ 'searchHotline' ]);
			const hotlineTitle = createElementAndAppend(hotlineList, 'div', 'hotlineTitle')
			createElementAndAppend(hotlineTitle, 'h2', null, title)
			const hotlineName = createElementAndAppend(hotlineTitle, 'div', 'hotlineName')
			types.forEach(({ name, link }) => {
				createElementAndAppend(hotlineName, 'a', null, name).href = link;
			});
		});
	}

	/* The code below handles the search. The search will run every 200ms for performace reasons.
	The code gets the user input, and then it lowercases it. Afterwards it get's the text from certain elements
	then lowcases those text, and then checks if any of thoses matches. 

	-- How the serach is displaying it
	At the start, it will set all display to none, if it finds the match it will set 
	parnet to display, we are getting the parnet with the code element.closest
	*/

	let searchTimeout = null;
	const searchInput = document.querySelector('#search');
	searchInput.addEventListener('keyup', ({ target }) => {
		const runSearch = () => {
			const searchText = target.value.toLowerCase().trim();
			const hasText = searchText !== ''
			document.querySelectorAll('.searchHotline').forEach(element => {
				element.style.display = hasText ? 'none' : 'block';
			});
			if (!hasText) return;
			const searchElements = '.searchHotline *';
			const elements = document.querySelectorAll(searchElements);
			elements.forEach(element => {
				const text = element.innerText.toLowerCase();
				const found = text.indexOf(searchText) > -1;
				if (!found) return
				const parent = element.closest('.searchHotline')
				parent.style.display = 'block';
			});
		}
		if (searchTimeout) clearTimeout(searchTimeout);
		searchTimeout = setTimeout(runSearch, 200);
	});

	/* Since getHotline is an aync function, we need to do await to call it. 
	The only way to do await is when the function is inside a async, that's why
	it is nested async arrow function */

	displayHotlines(await getHotlineData());
};

export { renderHotlineListPage };
