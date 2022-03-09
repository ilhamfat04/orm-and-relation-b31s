const { user } = require('../../models')

exports.addUsers = async (req, res) => {
    try {

        await user.create(req.body)

        res.send({
            status: 'success',
            message: 'Add user finished'
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.getUsers = async (req, res) => {
    try {

        const users = await user.findAll({
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            data: {
                users
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const { id } = req.params

        const data = await user.findAll({
            where: {
                id
            },
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            data: {
                user: data
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.updateUser = async (req, res) => {
    // code here
    try {
        const { id } = req.params
        const newData = req.body

        await user.update(newData, {
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            message: `Update user id = ${id} finished`,
            data: {
                newData
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}