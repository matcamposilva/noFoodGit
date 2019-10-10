const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://nofoodadmin:noFood123456@cluster0-v3fui.mongodb.net/test?retryWrites=true&w=majority'
    }
}
module.exports = variables;