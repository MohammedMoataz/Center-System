import LectureRepository from "../repositories/lecture.repository.js"
import LectureDTO from "../dtos/lecture.dto.js"
import LectureModel from "../models/lecture.model.js"

export default {
    create: async (lecture) => {
        lecture._created_at = new Date(Date.now())
            .toJSON()
            .replace('T', ' ')
            .replace('Z', '')
        LectureModel.set(lecture)

        return LectureRepository.create(LectureModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    updateById: async (lecture) => {
        lecture._updated_at = new Date(Date.now())
            .toJSON()
            .replace('T', ' ')
            .replace('Z', '')
        LectureModel.set(lecture)

        return LectureRepository.updateById(LectureModel.get())
            .then((data) => data[0])
            .catch(console.error)
    },

    getById: async (id) =>
        LectureRepository.getById(id)
            .then((data) => {
                LectureDTO.set(data[0][0][0])

                return LectureDTO.get()
            })
            .catch(console.error),

    getAll: async () =>
        LectureRepository.getAll()
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(lecture => LectureDTO.addAll(lecture))

                return LectureDTO.getAll()
            })
            .then((data) => {
                LectureDTO.clear()
                return data
            })
            .catch(console.error),

    deleteById: async (id) => {
        let timestamp = new Date(Date.now())
            .toJSON()
            .replace('T', ' ')
            .replace('Z', '')

        return LectureRepository.deleteById(id, timestamp)
            .then((data) => data[0])
            .catch(console.error)
    },
}
