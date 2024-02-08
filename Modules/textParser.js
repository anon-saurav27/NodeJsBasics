// slug
// properCase
//description generator
// email validator
const slugify = (sentence) => {
  return sentence
    .toLowerCase()
    .replace(/[^\w^\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const properCase = (sentence) => {};

//response: "Raktim is a ...."
const descriptionGenerator = (sentence) => {};

//true/ false
const emailValidator = (email) => {};

module.exports = { slugify, properCase, descriptionGenerator, emailValidator };
