import SubjectRepository from "../repositories/subject.repository.js"
import SubjectDTO from "../dtos/subject.dto.js"
import SubjectModel from "../models/subject.model.js"
import { getCurrentTimestamp } from "../common/helper.js"

export default {
    create: async (subject) => {
        subject._created_at = getCurrentTimestamp()
        SubjectModel.set(subject)

        return SubjectRepository.create(SubjectModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    updateById: async (subject) => {
        subject._updated_at = getCurrentTimestamp()
        SubjectModel.set(subject)

        return SubjectRepository.updateById(SubjectModel.get())
            .then((data) => data[0])
            .catch(console.error)
    },

    getById: async (id) =>
        SubjectRepository.getById(id)
            .then((data) => {
                SubjectDTO.set(data[0][0][0])

                return SubjectDTO.get()
            })
            .catch(console.error),

    getAll: async () =>
        SubjectRepository.getAll()
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(subject => SubjectDTO.addAll(subject))

                return SubjectDTO.getAll()
            })
            .then((data) => {
                SubjectDTO.clear()
                return data
            })
            .catch(console.error),

    deleteById: async (id) => {
        let timestamp = getCurrentTimestamp()

        return SubjectRepository.deleteById(id, timestamp)
            .then((data) => data[0])
            .catch(console.error)
    },
}
