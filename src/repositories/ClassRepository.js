const Class = require("../models/class");
const Student = require("../models/student");

class ClassRepository{
    static create(data, transaction) {
        return ClassesModel.create(data, { transaction, returning: true });
      }
}
module.exports=ClassRepository;