const { User } = require("../models");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const findUser = await User.findAll();

      if (!findUser) {
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
      next(error);
    }
  },
};
