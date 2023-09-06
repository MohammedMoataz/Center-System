import StudentService from '../services/student.service.js'

export const create = async (req, res) => {
    const new_student = req.body
    StudentService.create(new_student)
        .then(() => res.status(201).send({ message: "Created successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const addParent = async (req, res) => {
    const new_parent = req.body
    StudentService.addParent(new_parent)
        .then(() => res.status(201).send({ message: "Added successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const updateById = async (req, res) => {
    const updated_student = req.body
    StudentService.updateById(updated_student)
        .then(() => res.status(201).send({ message: "Updated successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const updateParent = async (req, res) => {
    const updated_parent = req.body
    StudentService.updateParent(updated_parent)
        .then(() => res.status(201).send({ message: "Updated successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getById = async (req, res) => {
    const student_id = req.query.id
    StudentService.getById(student_id)
        .then(data => res.status(200).send({ data, message: "Got successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getParents = async (req, res) => {
    const student_id = req.query.student_id
    StudentService.getParents(student_id)
        .then(data => res.status(200).send({ data, message: "Got all successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getAll = async (req, res) => {
    StudentService.getAll()
        .then(data => res.status(200).send({ data, message: "Got all successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const deleteById = async (req, res) => {
    const student_id = req.query.id
    StudentService.deleteById(student_id)
        .then(() => res.status(204).send({ message: "Deleted successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const deleteParent = async (req, res) => {
    const parent_id = req.query.parent_id
    StudentService.deleteParent(parent_id)
        .then(() => res.status(204).send({ message: "Deleted successfully!" }))
        .catch(err => res.send({ error: err.message }))
}
