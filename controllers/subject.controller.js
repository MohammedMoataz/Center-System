import SubjectService from '../services/subject.service.js'

export const create = async (req, res) => {
    const new_subject = req.body
    SubjectService.create(new_subject)
        .then(() => res.status(201).send({ message: "Created successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const updateById = async (req, res) => {
    const updated_subject = req.body
    SubjectService.updateById(updated_subject)
        .then(() => res.status(201).send({ message: "Updated successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getById = async (req, res) => {
    const subject_id = req.query.id
    SubjectService.getById(subject_id)
        .then(data => res.status(200).send({ data, message: "Got successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getAll = async (req, res) => {
    SubjectService.getAll()
        .then(data => res.status(200).send({ data, message: "Got all successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const deleteById = async (req, res) => {
    const subject_id = req.query.id
    SubjectService.deleteById(subject_id)
        .then(data => res.status(204).send({ data, message: "Deleted successfully!" }))
        .catch(err => res.send({ error: err.message }))
}
