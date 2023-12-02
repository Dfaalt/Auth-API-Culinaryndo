const { User } = require("../models");

module.exports = {
    updateEmail: async (req, res, next) => {
        try {
          const { id } = req.params;
          const { email } = req.body;
    
          const findUser = await User.findOne({ where: { id } });
    
          if (!findUser) {
            return res.status(404).json({
              status: false,
              message: "user not found",
            });
          }
    
          const updated = await User.update(
            {
              email,
            },
            { where: { id } }
          );
    
          return res.status(200).json({
            status: true,
            message: "update email successful",
            data: updated,
          });
        } catch (error) {
          next(error);
        }
      },
    
    updateFullname: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { fullname } = req.body;

      const findUser = await User.findOne({ where: { id } });

      if (!findUser) {
        return res.status(404).json({
          status: false,
          message: "user not found",
        });
      }

      const updated = await User.update(
        {
          fullname,
        },
        { where: { id } }
      );

      return res.status(200).json({
        status: true,
        message: "update fullname successful",
        data: updated,
      });
    } catch (error) {
      next(error);
    }
  },
  
  updateUsername: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { username } = req.body;

      const findUser = await User.findOne({ where: { id } });

      if (!findUser) {
        return res.status(404).json({
          status: false,
          message: "user not found",
        });
      }

      const updated = await User.update(
        {
          username,
        },
        { where: { id } }
      );

      return res.status(200).json({
        status: true,
        message: "update username successful",
        data: updated,
      });
    } catch (error) {
      next(error);
    }
  }, 
  
};
