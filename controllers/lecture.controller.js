import LectureService from '../services/lecture.service.js'

export const create = async (req, res) => {
    const newLecture = req.body
    let response = await LectureService.create(newLecture)

    res.send({ data: response, message: "Success!" })
}

export const updateById = async (req, res) => {
    const updatedLecture = req.body
    let response = await LectureService.updateById(updatedLecture)

    res.send({ data: response, message: "Success!" })
}

export const getById = async (req, res) => {
    const lectureId = req.query.id
    let response = await LectureService.getById(lectureId)

    res.send({ data: response, message: "Success!" })
}

export const getAll = async (req, res) => {
    let response = await LectureService.getAll()

    res.send({ data: response, message: "Success!" })
}

export const deleteById = async (req, res) => {
    const lectureId = req.query.id
    let response = await LectureService.deleteById(lectureId, `2006-02-15 04:46:27`)

    res.send({ data: response, message: "Success!" })
}
