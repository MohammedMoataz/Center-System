import AdminRepository from "../repositories/admin.repository.js"
import AdminDTO from "../dtos/admin.dto.js"
import AdminModel from "../models/admin.model.js"

export default {
    create: async (admin) => {
        admin._created_at = `2006-02-15 04:46:27`
        AdminModel.set(admin)

        return AdminRepository.create(AdminModel.get())
            .then((data) => data[0][0][0])
            .catch(console.error)
    },

    updateById: async (admin) => {
        admin._updated_at = `2006-02-15 04:46:27`
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

    deleteById: async (id, deleted_at) => {
        return AdminRepository.deleteById(id, deleted_at)
            .then((data) => {
                return data[0]
            })
            .catch(console.error)
    },
}
