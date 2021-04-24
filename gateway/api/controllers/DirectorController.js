const axios = require("axios");

/**
 * DirectorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	getDirectors: function(request, response) {
		axios.get("http://directors:3000/").then((res) => {
			response.json(res.data);
		}).catch((error) => {
			response.json(error);
		});
	}
};

