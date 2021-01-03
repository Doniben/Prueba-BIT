const coursesCtrl = {};
const Course = require('../models/course');

coursesCtrl.getCourses = async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
};
coursesCtrl.createCourse = async (req,res) => {
    const newCourse =  new Course(req.body)
    await newCourse.save();
    console.log(newCourse);
    res.send({message: 'Nuevo curso creado'});
};
coursesCtrl.getCourse = async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.send(course);
};
coursesCtrl.updateCourse = async (req, res) => {
    await Course.findByIdAndUpdate(req.params.id, req.body)
    res.json('Curso Actualizado')
};
coursesCtrl.deleteCourse = async (req, res, next) => {
    await Course.findByIdAndRemove(req.params.id);
    res.json({ status: "Curso Eliminado" });
}

module.exports = coursesCtrl;