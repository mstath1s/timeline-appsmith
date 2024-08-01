export default {

	getData () {
		let dataToReturn = getData.data.list;

		return dataToReturn;
	},


	sortJSONByDate(jsonArray , order ) {
		return jsonArray.sort((a, b) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);

			if (order === "A") {
				return dateA - dateB;
			} else if (order === "D") {
				return dateB - dateA;
			} else {
				throw new Error("Order must be 'A' for ascending or 'D' for descending.");
			}
		});
	}
}