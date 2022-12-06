const Skill = require('./Skill');
const Image = require('./Image');
const Techno = require('./Techno');
const Project = require('./Project');


// One to One : skill <=> image
Image.hasOne(Skill, {
  foreignKey: "image_id",
  as: "skill"
});

Skill.belongsTo(Image, {
  foreignKey: "image_id",
  as: "image"
});

// One to One : techno <=> image
Techno.belongsTo(Image, {
  foreignKey: "image_id",
  as: "image"
});

Image.hasOne(Techno, {
  foreignKey: "image_id",
  as:"techno"
});

// Many to Many : project <=> image
Project.belongsToMany(Image, {
  through: "project_has_image",
  as: "images",
  foreignKey: "project_id"
});

Image.belongsToMany(Project, {
  through: "project_has_image",
  as: "projects",
  foreignKey: "image_id"
});

// Many to Many : project <=> techno
Project.belongsToMany(Techno, {
  through: "project_has_techno",
  as: "technos",
  foreignKey: "project_id"
});

Techno.belongsToMany(Project, {
  through: "project_has_techno",
  as: "projects",
  foreignKey: "techno_id"
});

module.exports = {Skill, Image, Techno, Project };
