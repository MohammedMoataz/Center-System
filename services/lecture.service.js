import LectureRepository from "../repositories/lecture.repository.js"
import LectureDTO from "../dtos/lecture.dto.js"
import LectureModel from "../models/lecture.model.js"

export default {
    create: async (lecture) => {
        lecture._created_at = `2006-02-15 04:46:27`
        LectureModel.set(lecture)

        return LectureRepository.create(LectureModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    updateById: async (lecture) => {
        lecture._updated_at = `2006-02-15 04:46:27`
        LectureModel.set(lecture)

        return LectureRepository.updateById(LectureModel.get())
            .then((data) => data[0])
            .catch(console.error)
    },

    getById: async (id) => {
        return LectureRepository.getById(id)
            .then((data) => {
                LectureDTO.set(data[0][0][0])

                return LectureDTO.get()
            })
            .catch(console.error)
    },

    getAll: async () => {
        return LectureRepository.getAll()
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(lecture => {
                        LectureDTO.addAll(lecture)
                    })
                return LectureDTO.getAll()
            })
            .then((data) => {
                LectureDTO.clear()
                return data
            })
            .catch(console.error)
    },

    deleteById: async (id, deleted_at) => {
        return LectureRepository.deleteById(id, deleted_at)
            .then((data) => {
                return data[0]
            })
            .catch(console.error)
    },
}