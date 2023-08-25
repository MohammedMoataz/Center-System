import HallService from '../services/hall.service.js'

export const create = async (req, res) => {
    const newHall = req.body
    let response = await HallService.create(newHall)

    res.send({ data: response, message: "Success!" })
}

export const updateById = async (req, res) => {
    const updatedHall = req.body
    let response = await HallService.updateById(updatedHall)

    res.send({ data: response, message: "Success!" })
}

export const getById = async (req, res) => {
    const hallId = req.query.id
    let response = await HallService.getById(hallId)

    res.send({ data: response, message: "Success!" })
}

export const getAll = async (req, res) => {
    let response = await HallService.getAll()

    res.send({ data: response, message: "Success!" })
}

export const deleteById = async (req, res) => {
    const hallId = req.query.id
    let response = await HallService.deleteById(hallId, `2006-02-15 04:46:27`)

    res.send({ data: response, message: "Success!" })
}
