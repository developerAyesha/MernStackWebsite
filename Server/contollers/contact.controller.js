const Contact = require("../models/contact.model");

const contactMe = async (req, res) => {
  // get detail from frontend
  // create a document of contact
  // store in database
  try {
    const { username, email, message } = req.body;

    const contactInfo = await Contact.create({ username, email, message });
    res.status(200).json({ message: contactInfo });
  } catch (error) {
    res.send(error);
  }
};
module.exports = contactMe;
