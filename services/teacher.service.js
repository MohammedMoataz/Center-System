import TeacherRepository from '../repositories/teacher.repository.js'
import TeacherDTO from '../dtos/teacher.dto.js'
import TeacherModel from '../models/teacher.model.js'
import TeacherPhoneModel from '../models/teacher_phone.model.js'
import { getCurrentTimestamp } from '../common/helper.js'

export default {
    create: async (teacher) => {
        teacher._created_at = getCurrentTimestamp()
        TeacherModel.set(teacher)

        return TeacherRepository.create(TeacherModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    addPhone: async (phone) => {
        TeacherPhoneModel.set(phone)

        return TeacherRepository.create(TeacherPhoneModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    updateById: async (teacher) => {
        teacher._updated_at = getCurrentTimestamp()
        TeacherModel.set(teacher)

        return TeacherRepository.updateById(TeacherModel.get())
            .then((data) => data[0])
            .catch(console.error)
    },

    updatePhone: async (phone) => {
        TeacherPhoneModel.set(phone)

        return TeacherRepository.updatePhone(TeacherPhoneModel.get())
            .then((data) => data[0])
            .catch(console.error)
    },

    getById: async (id) =>
        TeacherRepository.getById(id)
            .then((data) => {
                TeacherDTO.set(data[0][0][0])

                return TeacherDTO.get()
            })
            .catch(console.error),

    getPhones: async (teacher_id) =>
        TeacherRepository.getPhones(teacher_id)
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(phone => TeacherDTO.addPhones(phone))

                return TeacherDTO.getPhones()
            })
            .then((data) => {
                TeacherDTO.clearPhones()
                return data
            })
            .catch(console.error),

    getAll: async () =>
        TeacherRepository.getAll()
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(teacher => TeacherDTO.addAll(teacher))

                return TeacherDTO.getAll()
            })
            .then((data) => {
                TeacherDTO.clear()
                return data
            })
            .catch(console.error),

    deleteById: async (id) => {
        let timestamp = getCurrentTimestamp()

        return TeacherRepository.deleteById(id, timestamp)
            .then((data) => data[0])
            .catch(console.error)
    },

    deletePhone: async (id) => {
        let timestamp = getCurrentTimestamp()

        return TeacherRepository.deletePhone(id, timestamp)
            .then((data) => data[0])
            .catch(console.error)
    },
}
