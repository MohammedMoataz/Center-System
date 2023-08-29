import AttendanceRepository from "../repositories/attendance.repository.js"
import AttendanceDTO from "../dtos/attendance.dto.js"
import AttendanceModel from "../models/attendance.model.js"

export default {
    create: async (attendance) => {
        attendance._created_at = new Date(Date.now())
            .toJSON()
            .replace('T', ' ')
            .replace('Z', '')
        AttendanceModel.set(attendance)

        return AttendanceRepository.create(AttendanceModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    updateById: async (attendance) => {
        attendance._updated_at = new Date(Date.now())
            .toJSON()
            .replace('T', ' ')
            .replace('Z', '')
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
