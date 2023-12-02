const { User } = require("../models");

module.exports = {
    destroy: async(req, res, next) => {
        try {
            const {id} = req.params;

            const findUser = await User.findOne({ where: {id} });

            if (!findUser) {
                return res.status(404).json({
                    status: false,
                    message: "data not found",
                });
            }

            const deleted = await User.destroy({ where: { id } });

            return res.status(200).json({
                status: true,
                message: "delete data succesful",
                data: deleted,
            });
        } catch (error) {
            next(error)
        }
    }
}