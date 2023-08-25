import StudentService from '../services/student.service.js'

export const create = async (req, res) => {
    const newStudent = req.body
    let response = await StudentService.create(newStudent)

    res.send({ data: response, message: "Success!" })
}

export const updateById = async (req, res) => {
    const updatedStudent = req.body
    let response = await StudentService.updateById(updatedStudent)

    res.send({ data: response, message: "Success!" })
}

export const getById = async (req, res) => {
    const studentId = req.query.id
    let response = await StudentService.getById(studentId)

    res.send({ data: response, message: "Success!" })
}

export const getAll = async (req, res) => {
    let response = await StudentService.getAll()

    res.send({ data: response, message: "Success!" })
}

export const deleteById = async (req, res) => {
    const studentId = req.query.id
    let response = await StudentService.deleteById(studentId)

    res.send({ data: response, message: "Success!" })
}
