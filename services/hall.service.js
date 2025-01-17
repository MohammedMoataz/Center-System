import HallRepository from "../repositories/hall.repository.js"
import HallDTO from "../dtos/hall.dto.js"
import HallModel from "../models/hall.model.js"
import { getCurrentTimestamp } from "../common/helper.js"

export default {
    create: async (hall) => {
        hall._created_at = getCurrentTimestamp()
        HallModel.set(hall)

        return HallRepository.create(HallModel.get())
            .then((data) => data[0][0][0])
            .catch(err => { throw Error(err.message) })
    },

    updateById: async (hall) => {
        hall._updated_at = getCurrentTimestamp()
        HallModel.set(hall)

        return HallRepository.updateById(HallModel.get())
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    getById: async (id) => {
        return HallRepository.getById(id)
            .then((data) => {
                HallDTO.set(data[0][0][0])

                return HallDTO.get()
            })
            .catch(err => { throw Error(err.message) })
    },

    getAll: async () => {
        return HallRepository.getAll()
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(hall => HallDTO.addAll(hall))

                return HallDTO.getAll()
            })
            .then((data) => {
                HallDTO.clear()
                return data
            })
            .catch(err => { throw Error(err.message) })
    },

    deleteById: async (id) => {
        let timestamp = getCurrentTimestamp()

        return HallRepository.deleteById(id, timestamp)
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },
}
