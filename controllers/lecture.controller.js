import LectureService from '../services/lecture.service.js'

export const create = async (req, res) => {
    const new_lecture = req.body
    LectureService.create(new_lecture)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const updateById = async (req, res) => {
    const updated_lecture = req.body
    LectureService.updateById(updated_lecture)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getById = async (req, res) => {
    const lecture_id = req.query.id
    LectureService.getById(lecture_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const getAll = async (req, res) => {
    LectureService.getAll()
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}

export const deleteById = async (req, res) => {
    const lecture_id = req.query.id
    LectureService.deleteById(lecture_id)
        .then(data => res.send({ data, message: "Success!" }))
        .catch(err => res.send({ message: err.message }))
}
