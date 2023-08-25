import SubjectService from '../services/subject.service.js'

export const create = async (req, res) => {
    const newSubject = req.body
    let response = await SubjectService.create(newSubject)

    res.send({ data: response, message: "Success!" })
}

export const updateById = async (req, res) => {
    const updatedSubject = req.body
    let response = await SubjectService.updateById(updatedSubject)

    res.send({ data: response, message: "Success!" })
}

export const getById = async (req, res) => {
    const subjectId = req.query.id
    let response = await SubjectService.getById(subjectId)

    res.send({ data: response, message: "Success!" })
}

export const getAll = async (req, res) => {
    let response = await SubjectService.getAll()

    res.send({ data: response, message: "Success!" })
}

export const deleteById = async (req, res) => {
    const subjectId = req.query.id
    let response = await SubjectService.deleteById(subjectId, `2006-02-15 04:46:27`)

    res.send({ data: response, message: "Success!" })
}
