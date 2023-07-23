const { Notice } = require("../../models");

class Notices {
	static getAllNotices() {
		return Notice.find();
	}

	static addNotice(newNotice) {
		return Notice.create(newNotice);
	}

	static findNoticeById(id) {
		return Notice.findById(id);
	}

	static findNoticeByQuery(data) {
		const [key] = Object.keys(data);
		const query = { [key]: data[key] };

		return Notice.find(query);
	}

	static async findAll({ search, category, title }) {
		const findOptions = search
			? {
					$or: [
						{ category: { $regex: search, $options: "i" } },
						{ title: { $regex: search, $options: "i" } },
					],
			  }
			: {};

		if (search && title && category) {
			findOptions.$or.forEach((item) => {
				item.title = title;
				item.category = category;
			});
		} else if (search && title) {
			findOptions.$or.forEach((item) => {
				item.title = title;
			});
		} else if (search && category) {
			findOptions.$or.forEach((item) => {
				item.category = category;
			});
		}

		const notices = await Notice.find(findOptions).sort({
			category: "desc",
			title: "desc",
		});

		const total = await Notice.count(findOptions);

		return { notices, total };
	}
}

module.exports = { Notices };
