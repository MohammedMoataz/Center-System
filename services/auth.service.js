import authRepository from "../repositories/auth.repository.js"

export default {
    loginAdmin: async (email, password) =>
        authRepository.loginAdmin(email, password)
            .then((data) => data[0][0][0])
            .catch(console.error),

    loginStudent: async (email, password) =>
        authRepository.loginStudent(email, password)
            .then((data) => data[0][0][0])
            .catch(console.error),

    updateAdminToken: async (id, refresh_token) =>
        authRepository.updateAdminToken(id, refresh_token)
            .then((data) => data[0])
            .catch(console.error),

    updateStudentToken: async (id, refresh_token) =>
        authRepository.updateStudentToken(id, refresh_token)
            .then((data) => data[0])
            .catch(console.error),

    getAdminToken: async (refresh_token) =>
        authRepository.getAdminToken(refresh_token)
            .then((data) => data[0][0][0])
            .catch(console.error),

    getStudentToken: async (refresh_token) =>
        authRepository.getStudentToken(refresh_token)
            .then((data) => data[0][0][0])
            .catch(console.error),

    deleteAdminToken: async (refresh_token) =>
        authRepository.deleteAdminToken(refresh_token)
            .then((data) => data[0][0])
            .catch(console.error),

    deleteStudentToken: async (refresh_token) =>
        authRepository.deleteStudentToken(refresh_token)
            .then((data) => data[0][0])
            .catch(console.error),
}
