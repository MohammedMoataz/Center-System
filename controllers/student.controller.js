import StudentService from '../services/student.service.js'

export const create = async (req, res) => {
    const new_student = req.student
    StudentService.create(new_student)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const addParent = async (req, res) => {
    const new_parent = req.student
    StudentService.addParent(new_parent)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const updateById = async (req, res) => {
    const updated_student = req.student
    StudentService.updateById(updated_student)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const updateParent = async (req, res) => {
    const updated_parent = req.student
    StudentService.updateParent(updated_parent)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getById = async (req, res) => {
    const student_id = req.query.id
    StudentService.getById(student_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getParents = async (req, res) => {
    const student_id = req.query.id
    StudentService.getParents(student_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getAll = async (req, res) => {
    StudentService.getAll()
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const deleteById = async (req, res) => {
    const student_id = req.query.id
    StudentService.deleteById(student_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const deleteParent = async (req, res) => {
    const parent_id = req.query.id
    StudentService.deleteParent(parent_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}
