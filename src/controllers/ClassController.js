const classService = require('../services/ClassService')
const { isValidClass } = require('../utils/Validates');

const ClassesController = {
    async createClass(req, res, next) {
        try {
            const {value: data, error: error} = isValidClass(req.body);
            if (error) {
                return res.status(500).send(new Error(error.message || error));;
            }
            return res.json({
                data: await classService.createClass(data),
                status: 'success',
                statusCode: 200,
            });
        } catch (err) {
            res.status(400).send({
                error: err.message || err,
                status: 'error',
                statusCode: 400,
            });
        }
    },
   
};

module.exports = ClassesController;