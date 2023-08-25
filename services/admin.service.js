import AdminRepository from "../repositories/admin.repository.js"
import AdminDTO from "../dtos/admin.dto.js"
import AdminModel from "../models/admin.model.js"
import { handleTimestamp } from "../utils/helper.js"

export default {
    create: async (admin) => {
        admin._created_at = handleTimestamp(new Date(Date.now()))
        AdminModel.set(admin)

        return AdminRepository.create(AdminModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    updateById: async (admin) => {
        admin._updated_at = handleTimestamp(new Date(Date.now()))
        AdminModel.set(admin)

        return AdminRepository.updateById(AdminModel.get())
            .then((data) => data[0])
            .catch(console.error)
    },

    getById: async (id) => {
        return AdminRepository.getById(id)
            .then((data) => {
                AdminDTO.set(data[0][0][0])

                return AdminDTO.get()
            })
            .catch(console.error)
    },

    getAll: async () => {
        return AdminRepository.getAll()
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(admin => {
                        AdminDTO.addAll(admin)
                    })
                return AdminDTO.getAll()
            })
            .then((data) => {
                AdminDTO.clear()
                return data
            })
            .catch(console.error)
    },

    deleteById: async (id) => {
        let timestamp = handleTimestamp(new Date(Date.now()))
        return AdminRepository.deleteById(id, timestamp)
            .then((data) => {
                return data[0]
            })
            .catch(console.error)
    },
}
