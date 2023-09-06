import AttendanceService from '../services/attendance.service.js'

export const create = async (req, res) => {
    const new_attendance = req.body
    AttendanceService.create(new_attendance)
        .then(() => res.status(201).send({ message: "Created successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const updateById = async (req, res) => {
    const updated_attendance = req.body
    AttendanceService.updateById(updated_attendance)
        .then(() => res.status(201).send({ message: "Updated successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getAll = async (req, res) => {
    AttendanceService.getAll()
        .then(data => res.status(200).send({ data, message: "Got all successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getLectureAttendees = async (req, res) => {
    const lecture_id = req.query.lecture_id
    AttendanceService.getLectureAttendees(lecture_id)
        .then(data => res.status(200).send({ data, message: "Got successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getStudentAttendees = async (req, res) => {
    const student_id = req.query.student_id
    AttendanceService.getStudentAttendees(student_id)
        .then(data => res.status(200).send({ data, message: "Got successfully!" }))
        .catch(err => res.send({ error: err.message }))
}
