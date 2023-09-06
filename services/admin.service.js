import winston from 'winston'

import AdminRepository from "../repositories/admin.repository.js"
import AdminDTO from "../dtos/admin.dto.js"
import AdminModel from "../models/admin.model.js"
import { getCurrentTimestamp, getPhoneNumber } from "../common/helper.js"
import { hash } from "../common/auth.js"

const error = winston.error

export default {
    create: async (admin) => {
        admin._created_at = getCurrentTimestamp()
        admin.phone_number = getPhoneNumber(admin.phone_number)

        return hash(admin.password, (err, hashData) => {
            if (err) return error(err.message)

            admin.password = hashData
        })
            .then(() => hash(admin.super_password, async (err, hashData) => {
                if (err) return error(err.message)
                admin.super_password = hashData

                AdminModel.set(admin)

                await AdminRepository.create(AdminModel.get())
                    .then((data) => data[0])
                    .catch(err => { throw Error(err.message) })
            }))
            .catch(err => { throw Error(err.message) })
    },

    updateById: async (admin) => {
        admin._updated_at = getCurrentTimestamp()
        AdminModel.set(admin)

        return AdminRepository.updateById(AdminModel.get())
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },

    getById: async (id) => {
        return AdminRepository.getById(id)
            .then((data) => {
                AdminDTO.set(data[0][0][0])

                return AdminDTO.get()
            })
            .catch(err => { throw Error(err.message) })
    },

    getAll: async () => {
        return AdminRepository.getAll()
            .then((data) => {
                Array.from(data[0][0])
                    .forEach(admin => AdminDTO.addAll(admin))

                return AdminDTO.getAll()
            })
            .then((data) => {
                AdminDTO.clear()
                return data
            })
            .catch(err => { throw Error(err.message) })
    },

    deleteById: async (id) => {
        const timestamp = getCurrentTimestamp()

        return AdminRepository.deleteById(id, timestamp)
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) })
    },
}
