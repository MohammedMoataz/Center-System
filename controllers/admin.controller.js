import AdminService from '../services/admin.service.js'

export const create = async (req, res) => {
    const new_admin = req.body
    AdminService.create(new_admin)
        .then(() => res.status(201).send({ message: "Created successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const updateById = async (req, res) => {
    const updated_admin = req.body
    AdminService.updateById(updated_admin)
        .then(() => res.status(201).send({ message: "Updated successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getById = async (req, res) => {
    const admin_id = req.query.id
    AdminService.getById(admin_id)
        .then(data => res.status(200).send({ data, message: "Got successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const deleteById = async (req, res) => {
    const admin_id = req.query.id
    AdminService.deleteById(admin_id)
        .then(() => res.status(204).send({ message: "Deleted successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getAll = async (req, res) => {
    AdminService.getAll()
        .then(data => res.status(200).send({ data, message: "Got all successfully!" }))
        .catch(err => res.send({ error: err.message }))
}
