const { Router } = require('express');
const { getCourse } = require('../controllers/courses.controller');
const router = Router()
const coursesCtrl = require('../controllers/courses.controller')

router.get('/', coursesCtrl.getCourses);
router.post('/', coursesCtrl.createCourse);
router.get('/:id', coursesCtrl.getCourse);
router.put('/:id', coursesCtrl.updateCourse);
router.delete('/:id', coursesCtrl.deleteCourse);

module.exports = router