const Skill = require('./Skill');
const Image = require('./Image');

Image.hasOne(Skill, {
  foreignKey: "image_id",
  as: "skill"
});

Skill.belongsTo(Image, {
  foreignKey: "image_id",
  as: "image"
});

module.exports = {Skill, Image };
