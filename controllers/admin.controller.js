import AdminService from '../services/admin.service.js'

export const create = async (req, res) => {
    const newAdmin = req.body
    let response = await AdminService.create(newAdmin)

    res.send({ data: response, message: "Success!" })
}

export const updateById = async (req, res) => {
    const updatedAdmin = req.body
    let response = await AdminService.updateById(updatedAdmin)

    res.send({ data: response, message: "Success!" })
}

export const getById = async (req, res) => {
    const adminId = req.query.id
    let response = await AdminService.getById(adminId)

    res.send({ data: response, message: "Success!" })
}

export const getAll = async (req, res) => {
    let response = await AdminService.getAll()

    res.send({ data: response, message: "Success!" })
}

export const deleteById = async (req, res) => {
    const adminId = req.query.id
    let response = await AdminService.deleteById(adminId)

    res.send({ data: response, message: "Success!" })
}
