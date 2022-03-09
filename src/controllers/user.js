// import model here
const { user } = require('../../models')

exports.addUser = async (req, res) => {
    // code here
    try {
        const data = req.body
        const createdData = await user.create(data)

        res.send({
            status: "success",
            data: createdData
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server error"
        })
    }
}