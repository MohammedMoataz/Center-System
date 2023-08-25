import TeacherRepository from "../repositories/teacher.repository.js"
import TeacherDTO from "../dtos/teacher.dto.js"
import TeacherModel from "../models/teacher.model.js"

export default {
    create: async (teacher) => {
        teacher._created_at = `2006-02-15 04:46:27`
        TeacherModel.set(teacher)

        return TeacherRepository.create(TeacherModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    updateById: async (teacher) => {
        teacher._updated_at = `2006-02-15 04:46:27`
        TeacherModel.set(teacher)

        return TeacherRepository.updateById(TeacherModel.get())
            .then((data) => data[0])
            .catch(console.error)
    },

    getById: async (id) => {
        return TeacherRepository.getById(id)
            .then((data) => {
                TeacherDTO.set(data[0][0][0])

                return TeacherDTO.get()
            })
            .catch(console.error)
    },

    getAll: async () => {
        return TeacherRepository.getAll()
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(teacher => {
                        TeacherDTO.addAll(teacher)
                    })
                return TeacherDTO.getAll()
            })
            .then((data) => {
                TeacherDTO.clear()
                return data
            })
            .catch(console.error)
    },

    deleteById: async (id, deleted_at) => {
        return TeacherRepository.deleteById(id, deleted_at)
            .then((data) => {
                return data[0]
            })
            .catch(console.error)
    },
}
