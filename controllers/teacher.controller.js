import TeacherService from '../services/teacher.service.js'

export const create = async (req, res) => {
    const new_teacher = req.body
    TeacherService.create(new_teacher)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const addPhone = async (req, res) => {
    const new_phone = req.body
    TeacherService.addPhone(new_phone)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const updateById = async (req, res) => {
    const updated_teacher = req.body
    TeacherService.updateById(updated_teacher)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const updatePhone = async (req, res) => {
    const updated_phone = req.body
    TeacherService.updatePhone(updated_phone)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getById = async (req, res) => {
    const teacher_id = req.query.id
    TeacherService.getById(teacher_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getPhones = async (req, res) => {
    const teacher_id = req.query.id
    TeacherService.getPhones(teacher_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getAll = async (req, res) => {
    TeacherService.getAll()
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const deleteById = async (req, res) => {
    const teacher_id = req.query.id
    TeacherService.deleteById(teacher_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const deletePhone = async (req, res) => {
    const phone_id = req.query.id
    TeacherService.deletePhone(phone_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}
