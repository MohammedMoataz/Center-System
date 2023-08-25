import TeacherService from '../services/teacher.service.js'

export const create = async (req, res) => {
    const newTeacher = req.body
    let response = await TeacherService.create(newTeacher)

    res.send({ data: response, message: "Success!" })
}

export const updateById = async (req, res) => {
    const updatedTeacher = req.body
    let response = await TeacherService.updateById(updatedTeacher)

    res.send({ data: response, message: "Success!" })
}

export const getById = async (req, res) => {
    const teacherId = req.query.id
    let response = await TeacherService.getById(teacherId)

    res.send({ data: response, message: "Success!" })
}

export const getAll = async (req, res) => {
    let response = await TeacherService.getAll()

    res.send({ data: response, message: "Success!" })
}

export const deleteById = async (req, res) => {
    const teacherId = req.query.id
    let response = await TeacherService.deleteById(teacherId, `2006-02-15 04:46:27`)

    res.send({ data: response, message: "Success!" })
}
