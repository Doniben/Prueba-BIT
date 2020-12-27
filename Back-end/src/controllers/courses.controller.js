const coursesCtrl = {}

coursesCtrl.getCourses = (req, res) => {
    res.send('get courses')
}
coursesCtrl.createCourse = (req,res) => {
    res.send('create courses')
}
coursesCtrl.getCourse = (req, res) => {
    res.send('get just one course')
}
coursesCtrl.updateCourse = (req, res) => {
    res.send('update a course')
}
coursesCtrl.deleteCourse = (req, res) => {
    res.send('delete a course')
}

module.exports = coursesCtrl