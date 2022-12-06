// Require data here if needed
const { Skill } = require('../models');

const mainController = {
  renderHomePage: async (req, res) => {
    try {
      const otherSkills = await Skill.findAll({
        where: { type: "other"},
        include: "image"
      });
      const techSkills = await Skill.findAll({
        where: { type: "web_dev"},
        include: "image"
      });
      console.log(otherSkills);
      res.render("index", { techSkills, otherSkills });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("ERREUR 500");
    }
  }
};

module.exports = mainController;
