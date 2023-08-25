import HallRepository from "../repositories/hall.repository.js"
import HallDTO from "../dtos/hall.dto.js"
import HallModel from "../models/hall.model.js"
import { handleTimestamp } from "../utils/helper.js"

export default {
    create: async (hall) => {
        hall._created_at = handleTimestamp(new Date(Date.now()))
        HallModel.set(hall)

        return HallRepository.create(HallModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    updateById: async (hall) => {
        hall._updated_at = handleTimestamp(new Date(Date.now()))
        HallModel.set(hall)

        return HallRepository.updateById(HallModel.get())
            .then((data) => data[0])
            .catch(console.error)
    },

    getById: async (id) => {
        return HallRepository.getById(id)
            .then((data) => {
                HallDTO.set(data[0][0][0])

                return HallDTO.get()
            })
            .catch(console.error)
    },

    getAll: async () => {
        return HallRepository.getAll()
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(hall => {
                        HallDTO.addAll(hall)
                    })
                return HallDTO.getAll()
            })
            .then((data) => {
                HallDTO.clear()
                return data
            })
            .catch(console.error)
    },

    deleteById: async (id) => {
        let timestamp = handleTimestamp(new Date(Date.now()))
        return HallRepository.deleteById(id,timestamp)
            .then((data) => {
                return data[0]
            })
            .catch(console.error)
    },
}
