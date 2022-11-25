// Require data here if needed
const techSkills = require('../data/techSkills.json');
const otherSkills = require('../data/otherSkills.json');

const mainController = {
  renderHomePage: (req, res) => {
    res.render("index", { techSkills, otherSkills });
  }
};

module.exports = mainController;
