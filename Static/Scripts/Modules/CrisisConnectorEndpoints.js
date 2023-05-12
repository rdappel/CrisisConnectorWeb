const getHotlineData = async (url) => {
    try {
        const response = await fetch('/api/' + url);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export { getHotlineData };
