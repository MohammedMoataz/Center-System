import LectureService from '../services/lecture.service.js'

export const create = async (req, res) => {
    const new_lecture = req.body
    LectureService.create(new_lecture)
        .then(() => res.status(201).send({ message: "Created successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const updateById = async (req, res) => {
    const updated_lecture = req.body
    LectureService.updateById(updated_lecture)
        .then(() => res.status(201).send({ message: "Updated successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getById = async (req, res) => {
    const lecture_id = req.query.id
    LectureService.getById(lecture_id)
        .then(data => res.status(200).send({ data, message: "Got successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const getAll = async (req, res) => {
    LectureService.getAll()
        .then(data => res.status(200).send({ data, message: "Got all successfully!" }))
        .catch(err => res.send({ error: err.message }))
}

export const deleteById = async (req, res) => {
    const lecture_id = req.query.id
    LectureService.deleteById(lecture_id)
        .then(data => res.status(204).send({ data, message: "Deleted successfully!" }))
        .catch(err => res.send({ error: err.message }))
}
