let AttendanceDTO = {
    id: 0,
    student: {
        username: null,
        email: null,
        phone_number: null,
        address: null,
        level: 0,
    },
    lecture: {
        code: null,
        timestamp: null,
    },
    attended: false,

    _created_at: "",
    _updated_at: "",
}

let AttendancesDTO = []

export default {
    set: (attendance) => {
        AttendanceDTO.id = attendance.id
        AttendanceDTO.student = attendance.student
        AttendanceDTO.lecture = attendance.lecture
        AttendanceDTO.attended = attendance.attended
        AttendanceDTO._created_at = attendance._created_at
        AttendanceDTO._updated_at = attendance._updated_at
    },

    addAll: (attendance) => {
        AttendancesDTO.push({
            id: attendance.id,
            student: attendance.student,
            lecture: attendance.lecture,
            attended: attendance.attended,
            _created_at: attendance._created_at,
            _updated_at: attendance._updated_at,
        })
    },

    get: () => AttendanceDTO,

    getAll: () => AttendancesDTO,

    clear: () => {
        AttendancesDTO = []
    }
}

