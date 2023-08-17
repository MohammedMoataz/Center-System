import { Admin } from '../models/admin.model.js'

export const create = async (req, res) => {
    const newAdmin = req.body
    let response

    newAdmin.f_name
        & newAdmin.l_name
        & newAdmin.email
        & newAdmin.pass
        & newAdmin.phone_no
        & newAdmin.sup_pass
        & newAdmin.start_shift
        & newAdmin.end_shift
        ? response = await insertAdmin(newAdmin)
        : res.send("Data is not completed!")

    res.send({ response })
}

const insertAdmin = async (newAdmin) => {
    const adminData = Admin.data
    adminData.f_name = newAdmin.f_name
    adminData.l_name = newAdmin.l_name
    adminData.email = newAdmin.email
    adminData.pass = newAdmin.pass
    adminData.phone_no = newAdmin.phone_no
    adminData.sup_pass = newAdmin.sup_pass
    adminData.start_shift = newAdmin.start_shift
    adminData.end_shift = newAdmin.end_shift
    adminData._created_at = Date.now()

    return await Admin.create(adminData)
}

export const updateById = async (req, res) => {
    const updatedAdmin = req.body
    let response

    updatedAdmin.id
        & updatedAdmin.f_name
        & updatedAdmin.l_name
        & updatedAdmin.email
        & updatedAdmin.pass
        & updatedAdmin.phone_no
        & updatedAdmin.sup_pass
        & updatedAdmin.start_shift
        & updatedAdmin.end_shift
        ? response = await updateAdminById(updatedAdmin)
        : res.send("Data is not completed!")

    res.send({ response })
}

const updateAdminById = async (updatedAdmin) => {
    const adminData = Admin.data
    const adminId = updatedAdmin.id
    adminData.f_name = updatedAdmin.f_name
    adminData.l_name = updatedAdmin.l_name
    adminData.email = updatedAdmin.email
    adminData.pass = updatedAdmin.pass
    adminData.phone_no = updatedAdmin.phone_no
    adminData.sup_pass = updatedAdmin.sup_pass
    adminData.start_shift = updatedAdmin.start_shift
    adminData.end_shift = updatedAdmin.end_shift
    adminData._updated_at = Date.now()

    return await Admin.updateById(adminId, adminData)
}

export const getById = async (req, res) => {
    const adminId = req.query.id
    let response

    adminId
        ? response = await Admin.getById(adminId)
        : res.send("Data is not completed!")

    res.send({ response })
}

export const getAll = async (req, res) => {

}

export const deleteById = async (req, res) => {
    const adminId = req.query.id
    let response

    adminId
        ? response = await Admin.getById(adminId, Date.now())
        : res.send("Data is not completed!")

    res.send({ response })
}
