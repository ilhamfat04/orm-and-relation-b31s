const { product, user } = require('../../models')

exports.getProduct = async (req, res) => {
    try {
        const data = await product.findAll({
            include: {
                model: user,
                as: 'user',
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'password']
                }
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'idUser']
            }
        })

        res.send({
            status: 'success...',
            data
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.addProduct = async (req, res) => {
    try {
        const data = req.body

        await product.create(data)

        res.send({
            status: 'success...',
            data
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}