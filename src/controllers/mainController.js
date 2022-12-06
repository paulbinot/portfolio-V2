// Require data here if needed
const { Skill, Project } = require('../models');

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
      const projects = await Project.findAll({
        include: [
          {
            association: "images"
          },
          {
            association: "technos",
            include: "image"
          }
        ],
        order: [
          ["created_at", "DESC"]
        ]
      });
      console.log(projects);
      res.render("index", { techSkills, otherSkills, projects });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("ERREUR 500");
    }
  }
};

module.exports = mainController;
