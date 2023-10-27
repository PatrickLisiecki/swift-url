import axios from 'axios';

export const getUrls = async () => {
	try {
		// Get all urls
		const response = await axios.get(`/api/url`);

		// Extract the data from the response
		return response.data;
	} catch (error) {
		console.log('Error fetching urls:', error);
	}
};

export const createUrl = async (data) => {
	try {
		// Create a new entry
		const response = await axios.post(`/api/url`, {
			origin: data,
		});

		// Extract the data from the response
		return response.data;
	} catch (error) {
		console.log('Error creating url:', error);
	}
};

export const deleteUrl = async (id) => {
	try {
		// Delete an entry
		await axios.delete(`/api/url/${id}`);
	} catch (error) {
		console.log('Error deleting url:', error);
	}
};
