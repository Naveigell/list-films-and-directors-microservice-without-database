const axios = require("axios");

/**
 * FilmController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	getFilms: function(request, response) {
		axios.get("http://films:2000").then((res) => {
			response.json(res.data);
		}).catch((error) => {
			response.json(error);
		});
	}
};

