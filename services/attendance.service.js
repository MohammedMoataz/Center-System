import AttendanceRepository from "../repositories/attendance.repository.js"
import StudentRepository from "../repositories/student.repository.js"
import LectureRepository from "../repositories/lecture.repository.js"
import AttendanceDTO from "../dtos/attendance.dto.js"
import AttendanceModel from "../models/attendance.model.js"
import { getCurrentTimestamp } from "../common/helper.js"

export default {
    create: async (attendance) => {
        attendance._created_at = getCurrentTimestamp()
        attendance.attended = attendance.attended ? 1 : 0
        AttendanceModel.set(attendance)

        return AttendanceRepository.create(AttendanceModel.get())
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    updateById: async (attendance) => {
        attendance._updated_at = getCurrentTimestamp()
        AttendanceModel.set(attendance)

        return AttendanceRepository.updateById(AttendanceModel.get())
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    getAll: async () => {
        return AttendanceRepository.getAll()
            .then((data) => {
                let attendees = {}
                data[0][0].map(record => {
                    if (!attendees[`${record.a_id}`])
                        attendees[`${record.a_id}`] = AttendanceDTO.from(record)
                })

                return attendees
            })
            .catch(err => { throw Error(err.message) })
    },

    getLectureAttendees: async (lecture_id) => {
        return AttendanceRepository.getLectureAttendees(lecture_id)
            .then((data) => {
                let attendees = {}
                data[0][0].map(record => {
                    if (!attendees[`${record.a_id}`])
                        attendees[`${record.a_id}`] = AttendanceDTO.from(record)
                })

                return attendees
            })
            .catch(err => { throw Error(err.message) })
    },

    getStudentAttendees: async (student_id) => {
        return AttendanceRepository.getStudentAttendees(student_id)
            .then((data) => {
                let attendees = {}
                data[0][0].map(record => {
                    if (!attendees[`${record.a_id}`])
                        attendees[`${record.a_id}`] = AttendanceDTO.from(record)
                })

                return attendees
            })
            .catch(err => { throw Error(err.message) })
    },
}
