import TeacherService from '../services/teacher.service.js'

export const create = async (req, res) => {
    const new_teacher = req.body
    TeacherService.create(new_teacher)
        .then(() => res.status(201).send({ message: "Created successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const addPhone = async (req, res) => {
    const new_phone = req.body
    TeacherService.addPhone(new_phone)
        .then(() => res.status(201).send({ message: "Added successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const updateById = async (req, res) => {
    const updated_teacher = req.body
    TeacherService.updateById(updated_teacher)
        .then(() => res.status(201).send({ message: "Updated successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const updatePhone = async (req, res) => {
    const updated_phone = req.body
    TeacherService.updatePhone(updated_phone)
        .then(() => res.status(201).send({ message: "Updated successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getById = async (req, res) => {
    const teacher_id = req.query.id
    TeacherService.getById(teacher_id)
        .then(data => res.status(200).send({ data, message: "Got successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getPhones = async (req, res) => {
    const teacher_id = req.query.teacher_id
    TeacherService.getPhones(teacher_id)
        .then(data => res.status(200).send({ data, message: "Got all successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getAll = async (req, res) => {
    TeacherService.getAll()
        .then(data => res.status(200).send({ data, message: "Got all successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const deleteById = async (req, res) => {
    const teacher_id = req.query.id
    TeacherService.deleteById(teacher_id)
        .then(data => res.status(204).send({ data, message: "Deleted successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const deletePhone = async (req, res) => {
    const phone_id = req.query.phone_id
    TeacherService.deletePhone(phone_id)
        .then(data => res.status(204).send({ data, message: "Deleted successfully!" }))
        .catch(err => res.send({ error: err.message }))
}
