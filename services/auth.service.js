import authRepository from "../repositories/auth.repository.js"
import { compareHashedData } from "../common/auth.js"

export default {
    loginAdmin: async (email, password) =>
        authRepository.loginAdmin(email)
            .then((data) => {
                const payload = data[0][0][0]
                return compareHashedData(password, payload.pass) ? payload.id : 0
            })
            .catch(err => { throw Error(err.message) }),

    loginStudent: async (email, password) =>
        authRepository.loginStudent(email)
            .then((data) => {
                const payload = data[0][0][0]
                return compareHashedData(password, payload.pass) ? payload.id : 0
            })
            .catch(err => { throw Error(err.message) }),

    updateAdminToken: async (id, refresh_token) =>
        authRepository.updateAdminToken(id, refresh_token)
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) }),

    updateStudentToken: async (id, refresh_token) =>
        authRepository.updateStudentToken(id, refresh_token)
            .then((data) => data[0])
            .catch(err => { throw Error(err.message) }),

    getAdminToken: async (refresh_token) =>
        authRepository.getAdminToken(refresh_token)
            .then((data) => data[0][0][0])
            .catch(err => { throw Error(err.message) }),

    getStudentToken: async (refresh_token) =>
        authRepository.getStudentToken(refresh_token)
            .then((data) => data[0][0][0])
            .catch(err => { throw Error(err.message) }),

    deleteAdminToken: async (refresh_token) =>
        authRepository.deleteAdminToken(refresh_token)
            .then((data) => data[0][0])
            .catch(err => { throw Error(err.message) }),

    deleteStudentToken: async (refresh_token) =>
        authRepository.deleteStudentToken(refresh_token)
            .then((data) => data[0][0])
            .catch(err => { throw Error(err.message) }),
}
