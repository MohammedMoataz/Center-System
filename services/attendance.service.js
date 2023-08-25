import AttendanceRepository from "../repositories/attendance.repository.js"
import AttendanceDTO from "../dtos/attendance.dto.js"
import AttendanceModel from "../models/attendance.model.js"

export default {
    create: async (attendance) => {
        attendance._created_at = `2006-02-15 04:46:27`
        AttendanceModel.set(attendance)

        return AttendanceRepository.create(AttendanceModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    updateById: async (attendance) => {
        attendance._updated_at = `2006-02-15 04:46:27`
        AttendanceModel.set(attendance)

        return AttendanceRepository.updateById(AttendanceModel.get())
            .then((data) => data[0])
            .catch(console.error)
    },

    getById: async (id) => {
        return AttendanceRepository.getById(id)
            .then((data) => {
                AttendanceDTO.set(data[0][0][0])

                return AttendanceDTO.get()
            })
            .catch(console.error)
    },

    getAll: async () => {
        return AttendanceRepository.getAll()
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(attendance => {
                        AttendanceDTO.addAll(attendance)
                    })
                return AttendanceDTO.getAll()
            })
            .then((data) => {
                AttendanceDTO.clear()
                return data
            })
            .catch(console.error)
    },
}
