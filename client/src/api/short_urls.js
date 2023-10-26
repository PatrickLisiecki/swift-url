import axios from 'axios';

export const handleAddShortUrl = (link) => {
	axios
		.post('/api/url', {
			longUrl: link,
		})
		.then(function (response) {
			console.log(response);
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
};
