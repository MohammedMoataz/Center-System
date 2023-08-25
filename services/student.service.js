import StudentRepository from "../repositories/student.repository.js"
import StudentDTO from "../dtos/student.dto.js"
import StudentModel from "../models/student.model.js"

export default {
    create: async (student) => {
        student._created_at = `2006-02-15 04:46:27`
        StudentModel.set(student)

        return StudentRepository.create(StudentModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    updateById: async (student) => {
        student._updated_at = `2006-02-15 04:46:27`
        StudentModel.set(student)

        return StudentRepository.updateById(StudentModel.get())
            .then((data) => data[0])
            .catch(console.error)
    },

    getById: async (id) => {
        return StudentRepository.getById(id)
            .then((data) => {
                StudentDTO.set(data[0][0][0])

                return StudentDTO.get()
            })
            .catch(console.error)
    },

    getAll: async () => {
        return StudentRepository.getAll()
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(student => {
                        StudentDTO.addAll(student)
                    })
                return StudentDTO.getAll()
            })
            .then((data) => {
                StudentDTO.clear()
                return data
            })
            .catch(console.error)
    },

    deleteById: async (id, deleted_at) => {
        return StudentRepository.deleteById(id, deleted_at)
            .then((data) => {
                return data[0]
            })
            .catch(console.error)
    },
}
