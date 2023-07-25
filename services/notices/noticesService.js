const { Notice } = require("../../models");
const { User } = require("../../models");

class Notices {
	static addNotice(newNotice) {
		return Notice.create(newNotice);
	}

	static findNoticeById(id) {
		return Notice.findById(id);
	}

	static async findAll({
		search = "",
		category,
		page = 1,
		limit = 6,
		sort = "desc",
	}) {
		const perPage = page > 0 ? (page - 1) * limit : 0;
		const findOptions = search
			? {
					$or: [{ title: { $regex: search, $options: "i" } }],
			  }
			: {};

		if (category) {
			findOptions.category = category;
		}

		const notices = await Notice.find(findOptions)
			.skip(perPage)
			.limit(limit)
			.sort({
				category: sort,
				title: sort,
			});

		const total = await Notice.count(findOptions);

		return { notices, total };
	}

	static async findOwnerNotices({ owner }) {
		const notices = await Notice.find({ owner });

		const total = await Notice.count({ owner });

		return { notices, total };
	}

	static async findOwnerFavNotices({ favorites }) {
		const notices = await Notice.find({ favorites });

		const total = await Notice.count({ favorites });

		return { notices, total };
	}

  static updateUserFavs(id, data) {
    const key = Object.keys(data);
    return User.findByIdAndUpdate(id, { [key]: { faves: data[key] } });
  }

	static deleteNotice(id) {
		return Notice.findByIdAndDelete(id);
	}
}

module.exports = { Notices };
