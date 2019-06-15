const mongoose = require('mongoose'),
  Model = mongoose.model('Posts');

exports.index = (req, res) => {
	const paginateOptions = {
		page: req.query.page || 1,
		limit: 5,
		sort: {created_at: 'desc'},
		collation: {
			locale: 'en'
		}
	}

	delete req.query.page

	Model.paginate(req.query || {}, paginateOptions, (err, records) => {
		err ? res.send(err) : res.json(records);
	})
}

exports.create = (req, res) => {
	let new_record = new Model(req.body);

	new_record.save((err, record) => {
		err ? res.send(err) : res.json(record);
	})
}

exports.show = (req, res) => {
	Model.findById(req.params.id, (err, record) => {
		err ? res.send(err) : res.json(record);
	})
}

exports.update = (req, res) => {
	Model.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, record) => {
		err ? res.send(err) : res.json(record);
	})
}

exports.delete = (req, res) => {
	Model.remove({_id: req.params.id}, (err, record) => {
		err ? res.send(err) : res.json({message: 'Post succesfuly deleted.'});
	})
}
