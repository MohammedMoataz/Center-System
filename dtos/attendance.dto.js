const AttendanceDTO = {
    id: 0,
    student: {
        id: 0,
        username: null,
        phone_number: null,
        level: 0,
    },
    lecture: {
        id: 0,
        code: null,
        timestamp: null,
    },
    attended: false,

    _created_at: null,
    _updated_at: null,
}

let AttendeesDTO = []

export default {
    set: (attendance) => {
        AttendanceDTO.id = attendance.id
        AttendanceDTO.student = attendance.student
        AttendanceDTO.lecture = attendance.lecture
        AttendanceDTO.attended = attendance.attended

        AttendanceDTO._created_at = attendance._created_at
        AttendanceDTO._updated_at = attendance._updated_at
    },

    addAll: (attendance) => AttendeesDTO.push({
            id: attendance.id,
            student: attendance.student,
            lecture: attendance.lecture,
            attended: attendance.attended,

            _created_at: attendance._created_at,
            _updated_at: attendance._updated_at,
        }),

    get: () => AttendanceDTO,

    getAll: () => AttendeesDTO,

    clear: () => AttendeesDTO = [],
}
