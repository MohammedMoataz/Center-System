import AttendanceService from '../services/attendance.service.js'

export const create = async (req, res) => {
    const new_attendance = req.body
    AttendanceService.create(new_attendance)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const updateById = async (req, res) => {
    const updated_attendance = req.body
    AttendanceService.updateById(updated_attendance)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getAll = async (req, res) => {
    AttendanceService.getAll()
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getLectureAttendees = async (req, res) => {
    const lecture_id = req.query.id
    AttendanceService.getLectureAttendees(lecture_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getStudentAttendees = async (req, res) => {
    const student_id = req.query.id
    AttendanceService.getStudentAttendees(student_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}
