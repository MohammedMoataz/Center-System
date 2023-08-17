import { Student } from '../models/student.model.js'

export const create = async (req, res) => {
    const newStudent = req.body
    let response

    newStudent.f_name
        & newStudent.l_name
        & newStudent.email
        & newStudent.pass
        & newStudent.phone_number
        & newStudent.address
        & newStudent.level
        ? response = await insertStudent(newStudent)
        : res.send("Data is not completed!")

    res.send({ response })
}

const insertStudent = async (newStudent) => {
    const studentData = Student.data
    studentData.f_name = newStudent.f_name
    studentData.l_name = newStudent.l_name
    studentData.email = newStudent.email
    studentData.pass = newStudent.pass
    studentData.phone_number = newStudent.phone_number
    studentData.address = newStudent.address
    studentData.level = newStudent.level
    studentData._created_at = Date.now()

    return await Student.create(studentData)
}

export const updateById = async (req, res) => {
    const updatedStudent = req.body
    let response

    updatedStudent.id
        & updatedStudent.f_name
        & updatedStudent.l_name
        & updatedStudent.email
        & updatedStudent.pass
        & updatedStudent.phone_number
        & updatedStudent.address
        & updatedStudent.level
        ? response = await updateStudentById(updatedStudent)
        : res.send("Data is not completed!")

    res.send({ response })
}

const updateStudentById = async (updatedStudent) => {
    const studentData = Student.data
    const studentId = updatedStudent.id
    studentData.f_name = updatedStudent.f_name
    studentData.l_name = updatedStudent.l_name
    studentData.email = updatedStudent.email
    studentData.pass = updatedStudent.pass
    studentData.phone_number = updatedStudent.phone_number
    studentData.address = updatedStudent.address
    studentData.level = updatedStudent.level
    studentData._updated_at = Date.now()

    return await Student.updateById(studentId, studentData)
}

export const getById = async (req, res) => {
    const studentId = req.query.id
    let response

    studentId
        ? response = await Student.getById(studentId)
        : res.send("Data is not completed!")

    res.send({ response })
}

export const getAll = async (req, res) => {

}

export const deleteById = async (req, res) => {
    const studentId = req.query.id
    let response

    studentId
        ? response = await Student.getById(studentId, Date.now())
        : res.send("Data is not completed!")

    res.send({ response })
}
