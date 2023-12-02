const { User } = require("../models");

module.exports = {
    getOne : async(req,res,next) => {
        try {
            const { id } = req.params;
            const findUser = await User.findOne({ where: {id} });

            if(!findUser) {
                return res.status(404).json({
                    status: false,
                    message: "data not found",
                });
            }

            return res.status(200).json({
                status: true,
                message: "get all data successful",
                data: findUser,
            });
        } catch (error) {
            next(error)
        }
    }
}