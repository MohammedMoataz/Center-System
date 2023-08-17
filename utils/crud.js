export const cruds = {
    create: async (sql) => executeQuery(sql),

    updateById: async (sql) => executeQuery(sql),

    getById: async (sql) => executeQuery(sql),

    getAll: async (sql) => executeQuery(sql),

    deleteById: async (sql) => executeQuery(sql),
}
