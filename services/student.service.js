import StudentRepository from "../repositories/student.repository.js"
import StudentDTO from "../dtos/student.dto.js"
import StudentModel from "../models/student.model.js"
import ParentModel from "../models/parent.model.js"
import { generateUniqueUsername, getCurrentTimestamp, getPhoneNumber } from "../common/helper.js"
import { hash } from "../common/auth.js"

export default {
    create: async (student) => {
        student._created_at = getCurrentTimestamp()
        student.username = generateUniqueUsername(student.email)
        student.phone_number = getPhoneNumber(student.phone_number)

        hash(student.password, async (err, hashedData) => {
            if (err) return err.message

            student.password = hashedData
            StudentModel.set(student)

            return StudentRepository.create(StudentModel.get())
                .then((data) => {
                    data = data[0][0][0]

                    Array.from(student.parents).forEach(async (parent) => {
                        parent.student_id = data.id
                        parent.parent_number = getPhoneNumber(parent.parent_number)
                        ParentModel.set(parent)

                        return StudentRepository.addParent(ParentModel.get())
                            .then((data) => data[0])
                            .catch(err => { throw Error(err.message) })
                    })
                })
                .catch(err => { throw Error(err.message) })
        })
    },

    addParent: async (parent) => {
        parent.parent_number = getPhoneNumber(parent.parent_number)
        ParentModel.set(parent)

        return StudentRepository.addParent(ParentModel.get())
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    updateById: async (student) => {
        student._updated_at = getCurrentTimestamp()
        student.phone_number = getPhoneNumber(student.phone_number)
        StudentModel.set(student)

        return StudentRepository.updateById(StudentModel.get())
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    updateParent: async (parent) => {
        parent.parent_number = getPhoneNumber(parent.parent_number)
        ParentModel.set(parent)

        return StudentRepository.updateParent(ParentModel.get())
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    getById: async (id) => {
        return StudentRepository.getById(id)
            .then((data) => {
                let student = {}
                data[0][0].map(record => {
                    if (!student[`${record.s_id}`])
                        student[`${record.s_id}`] = StudentDTO.from(record)

                    student[`${record.s_id}`].parents.push({ phone: record.parent_no, label: record.label })
                })

                return student
            })
            .catch(err => { throw Error(err.message) })
    },

    getAll: async () => {
        return StudentRepository.getAll()
            .then((data) => {
                let students = {}
                data[0][0].map(record => {
                    if (!students[`${record.s_id}`])
                        students[`${record.s_id}`] = StudentDTO.from(record)

                    students[`${record.s_id}`].parents.push({ phone: record.parent_no, label: record.label })
                })

                return students
            })
            .catch(err => { throw Error(err.message) })
    },

    getParents: async (student_id) => {
        return StudentRepository.getParents(student_id)
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(parent => StudentDTO.addParents(parent))

                return StudentDTO.getParents()
            })
            .then((data) => {
                StudentDTO.clearParents()
                return data
            })
            .catch(err => { throw Error(err.message) })
    },

    deleteById: async (id) => {
        let timestamp = getCurrentTimestamp()

        return StudentRepository.deleteById(id, timestamp)
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    deleteParent: async (parent_id) => {
        let timestamp = getCurrentTimestamp()

        return StudentRepository.deleteParent(parent_id, timestamp)
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },
}
