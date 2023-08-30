import AttendanceRepository from "../repositories/attendance.repository.js"
import AttendanceDTO from "../dtos/attendance.dto.js"
import AttendanceModel from "../models/attendance.model.js"
import { getCurrentTimestamp } from "../common/helper.js"

export default {
    create: async (attendance) => {
        attendance._created_at = getCurrentTimestamp()
        AttendanceModel.set(attendance)

        return AttendanceRepository.create(AttendanceModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    updateById: async (attendance) => {
        attendance._updated_at = getCurrentTimestamp()
        AttendanceModel.set(attendance)

        return AttendanceRepository.updateById(AttendanceModel.get())
            .then((data) => data[0])
            .catch(console.error)
    },

    getAll: async () =>
        AttendanceRepository.getAll()
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(attendance => AttendanceDTO.addAll(attendance))
                    
                return AttendanceDTO.getAll()
            })
            .then((data) => {
                AttendanceDTO.clear()
                return data
            })
            .catch(console.error),

    getLectureAttendees: async (lecture_id) =>
        AttendanceRepository.getLectureAttendees(lecture_id)
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(attendance => AttendanceDTO.addAll(attendance))

                return AttendanceDTO.getAll()
            })
            .then((data) => {
                AttendanceDTO.clear()
                return data
            })
            .catch(console.error),

    getStudentAttendees: async (student_id) =>
        AttendanceRepository.getStudentAttendees(student_id)
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(attendance => AttendanceDTO.addAll(attendance))

                return AttendanceDTO.getAll()
            })
            .then((data) => {
                AttendanceDTO.clear()
                return data
            })
            .catch(console.error),
}
