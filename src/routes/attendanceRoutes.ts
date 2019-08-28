import { Router, Request, Response } from 'express'
import attendanceController from '../controllers/attendanceController'
import studentController from '../controllers/studentController'
import * as util from './../controllers/utilController'

import Attendance from '../entity/Attendance'
import { getRepository } from 'typeorm'
import Student from '../entity/Student'

let router = Router()

router.get('/attendance', (req: Request, res: Response) => {
	// let students = studentController.getAll(req,res)
	console.log(res.locals.id)
	res.render('attendance')
})

router.get('/test', async (req: Request, res: Response) => {
	const studentRepository = getRepository(Student)
	const students = await studentRepository.find()
	res.send(students)
})

export default router
