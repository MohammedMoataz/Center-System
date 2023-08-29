import SubjectService from '../services/subject.service.js'

export const create = async (req, res) => {
    const new_subject = req.body
    SubjectService.create(new_subject)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const updateById = async (req, res) => {
    const updated_subject = req.body
    SubjectService.updateById(updated_subject)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getById = async (req, res) => {
    const subject_id = req.query.id
    SubjectService.getById(subject_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getAll = async (req, res) => {
    SubjectService.getAll()
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const deleteById = async (req, res) => {
    const subject_id = req.query.id
    SubjectService.deleteById(subject_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}
