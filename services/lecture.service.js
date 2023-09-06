import LectureRepository from "../repositories/lecture.repository.js"
import LectureDTO from "../dtos/lecture.dto.js"
import LectureModel from "../models/lecture.model.js"
import { getCurrentTimestamp } from "../common/helper.js"

export default {
    create: async (lecture) => {
        lecture._created_at = getCurrentTimestamp()
        LectureModel.set(lecture)

        return LectureRepository.create(LectureModel.get())
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    updateById: async (lecture) => {
        lecture._updated_at = getCurrentTimestamp()
        LectureModel.set(lecture)

        return LectureRepository.updateById(LectureModel.get())
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    getById: async (id) => {
        return LectureRepository.getById(id)
            .then((data) => {
                let lecture = {}
                data[0][0].map(record => {
                    if (!lecture[`${record.l_code}`])
                        lecture[`${record.l_code}`] = LectureDTO.from(record)
                })

                return lecture
            })
            .catch(err => { throw Error(err.message) })
    },

    getAll: async () => {
        return LectureRepository.getAll()
            .then((data) => {
                let lectures = {}
                data[0][0].map(record => {
                    if (!lectures[`${record.l_code}`])
                        lectures[`${record.l_code}`] = LectureDTO.from(record)
                })

                return lectures
            })
            .catch(err => { throw Error(err.message) })
    },

    deleteById: async (id) => {
        let timestamp = getCurrentTimestamp()

        return LectureRepository.deleteById(id, timestamp)
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },
}
