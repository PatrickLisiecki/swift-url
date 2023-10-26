import axios from 'axios';

export const getUrls = async () => {
	try {
		// Get all urls
		const response = await axios.get(`/api/url/`);

		// Extract the data from the response
		return response.data;
	} catch (error) {
		console.log('Error fetching urls:', error);
	}
};

export const createUrl = async (link) => {
	await axios
		.post('/api/url/', {
			origin: link,
		})
		.then(function (response) {
			console.log(response);
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
};
