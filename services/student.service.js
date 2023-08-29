import StudentRepository from "../repositories/student.repository.js"
import StudentDTO from "../dtos/student.dto.js"
import StudentModel from "../models/student.model.js"
import ParentModel from "../models/parent.model.js"

export default {
    create: async (student) => {
        student._created_at = new Date(Date.now())
            .toJSON()
            .replace('T', ' ')
            .replace('Z', '')
        StudentModel.set(student)

        return StudentRepository.create(StudentModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    addParent: async (parent) => {
        ParentModel.set(parent)

        return StudentRepository.addParent(ParentModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    updateById: async (student) => {
        student._updated_at = new Date(Date.now())
            .toJSON()
            .replace('T', ' ')
            .replace('Z', '')
        StudentModel.set(student)

        return StudentRepository.updateById(StudentModel.get())
            .then((data) => data[0])
            .catch(console.error)
    },

    updateParent: async (parent) => {
        ParentModel.set(parent)

        return StudentRepository.updateParent(ParentModel.get())
            .then((data) => data[0])
            .catch(console.error)
    },

    getById: async (id) =>
        StudentRepository.getById(id)
            .then((data) => {
                StudentDTO.set(data[0][0][0])

                return StudentDTO.get()
            })
            .catch(console.error),

    getAll: async () =>
        StudentRepository.getAll()
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(student => StudentDTO.addAll(student))

                return StudentDTO.getAll()
            })
            .then((data) => {
                StudentDTO.clear()
                return data
            })
            .catch(console.error),

    getParents: async (student_id) =>
        StudentRepository.getParents(student_id)
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(parent => StudentDTO.addParents(parent))

                return StudentDTO.getParents()
            })
            .then((data) => {
                StudentDTO.clearParents()
                return data
            })
            .catch(console.error),

    deleteById: async (id) => {
        let timestamp = new Date(Date.now())
            .toJSON()
            .replace('T', ' ')
            .replace('Z', '')

        return StudentRepository.deleteById(id, timestamp)
            .then((data) => data[0])
            .catch(console.error)
    },

    deleteParent: async (parent_id) => {
        let timestamp = new Date(Date.now())
            .toJSON()
            .replace('T', ' ')
            .replace('Z', '')

        return StudentRepository.deleteParent(parent_id, timestamp)
            .then((data) => data[0])
            .catch(console.error)
    },
}
