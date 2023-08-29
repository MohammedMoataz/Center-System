import HallService from '../services/hall.service.js'

export const create = async (req, res) => {
    const new_hall = req.body
    HallService.create(new_hall)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const updateById = async (req, res) => {
    const updated_hall = req.body
    HallService.updateById(updated_hall)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getById = async (req, res) => {
    const hall_id = req.query.id
    HallService.getById(hall_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getAll = async (req, res) => {
    HallService.getAll()
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const deleteById = async (req, res) => {
    const hall_id = req.query.id
    HallService.deleteById(hall_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}
