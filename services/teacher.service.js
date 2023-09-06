import TeacherRepository from '../repositories/teacher.repository.js'
import TeacherDTO from '../dtos/teacher.dto.js'
import TeacherModel from '../models/teacher.model.js'
import PhoneModel from '../models/phone.model.js'
import { getCurrentTimestamp, getPhoneNumber } from '../common/helper.js'

export default {
    create: async (teacher) => {
        teacher._created_at = getCurrentTimestamp()
        TeacherModel.set(teacher)

        return TeacherRepository.create(TeacherModel.get())
            .then((data) => {
                data = data[0][0][0]

                Array.from(teacher.phones).forEach(async (phone) => {
                    phone.teacher_id = data.id
                    phone.phone_number = getPhoneNumber(phone.phone_number)
                    PhoneModel.set(phone)

                    return TeacherRepository.addPhone(PhoneModel.get())
                        .then((data) => data[0])
                        .catch(err => { throw Error(err.message) })
                })
            })
            .catch(err => { throw Error(err.message) })
    },

    addPhone: async (phone) => {
        phone.phone_number = getPhoneNumber(phone.phone_number)
        PhoneModel.set(phone)

        return TeacherRepository.addPhone(PhoneModel.get())
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    updateById: async (teacher) => {
        teacher._updated_at = getCurrentTimestamp()
        TeacherModel.set(teacher)

        return TeacherRepository.updateById(TeacherModel.get())
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    updatePhone: async (phone) => {
        phone.phone_number = getPhoneNumber(phone.phone_number)
        PhoneModel.set(phone)

        return TeacherRepository.updatePhone(PhoneModel.get())
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    getById: async (id) => {
        return TeacherRepository.getById(id)
            .then((data) => {
                let teacher = {}
                data[0][0].map(record => {
                    if (!teacher[`${record.t_id}`])
                        teacher[`${record.t_id}`] = TeacherDTO.from(record)

                    teacher[`${record.t_id}`].phones.push(record.phone_no)
                })

                return teacher
            })
            .catch(err => { throw Error(err.message) })
    },

    getPhones: async (teacher_id) => {
        return TeacherRepository.getPhones(teacher_id)
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(phone => TeacherDTO.addPhones(phone))

                return TeacherDTO.getPhones()
            })
            .then((data) => {
                TeacherDTO.clearPhones()
                return data
            })
            .catch(err => { throw Error(err.message) })
    },

    getAll: async () => {
        return TeacherRepository.getAll()
            .then((data) => {
                let teachers = {}
                data[0][0].map(record => {
                    if (!teachers[`${record.t_id}`])
                        teachers[`${record.t_id}`] = TeacherDTO.from(record)

                    teachers[`${record.t_id}`].phones.push(record.phone_no)
                })

                return teachers
            })
            .catch(err => { throw Error(err.message) })
    },

    deleteById: async (id) => {
        let timestamp = getCurrentTimestamp()

        return TeacherRepository.deleteById(id, timestamp)
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    deletePhone: async (id) => {
        let timestamp = getCurrentTimestamp()

        return TeacherRepository.deletePhone(id, timestamp)
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },
}
