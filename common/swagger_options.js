// swagger options configuration
const swaggerDefinition = {
    openapi: "3.1.0",
    info: {
        title: 'Center System',
        version: '1.16.2',
        description:
            "Center System API Documentation",
        license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
            name: 'Catch Code Team',
            url: 'https://catch-code.netlify.com',
            email: "catchcode.tech@gmail.com",
        },
    },
    servers: [
        {
            url: "http://localhost:5000",
            description: 'Development server',
        },
    ],
}

export default {
    explorer: true,
    failOnErrors: true,
    swaggerDefinition,
    apis: ['./routes/*.route.js'],
}
