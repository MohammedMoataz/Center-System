import HallService from '../services/hall.service.js'

export const create = async (req, res) => {
    const new_hall = req.body
    HallService.create(new_hall)
        .then(() => res.status(201).send({ message: "Created successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const updateById = async (req, res) => {
    const updated_hall = req.body
    HallService.updateById(updated_hall)
        .then(() => res.status(201).send({ message: "Updated successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getById = async (req, res) => {
    const hall_id = req.query.id
    HallService.getById(hall_id)
        .then(data => res.status(200).send({ data, message: "Got successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getAll = async (req, res) => {
    HallService.getAll()
        .then(data => res.status(200).send({ data, message: "Got all successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const deleteById = async (req, res) => {
    const hall_id = req.query.id
    HallService.deleteById(hall_id)
        .then(data => res.status(204).send({ data, message: "Deleted successfully!" }))
        .catch(err => res.send({ error: err.message }))
}
