import AdminService from '../services/admin.service.js'

export const create = async (req, res) => {
    const new_admin = req.admin
    AdminService.create(new_admin)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const updateById = async (req, res) => {
    const updated_admin = req.admin
    AdminService.updateById(updated_admin)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getById = async (req, res) => {
    const admin_d = req.query.id
    AdminService.getById(admin_d)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const deleteById = async (req, res) => {
    const admin_id = req.query.id
    AdminService.deleteById(admin_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getAll = async (req, res) => {
    AdminService.getAll()
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}
