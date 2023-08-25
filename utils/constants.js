// swagger options configuration
export const options = {
    explorer: true,
    failOnErrors: true,
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Center System',
            version: '1.0.0',
            description:
                "Center System API Documentation",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ['./routes/*.route.js'],
}