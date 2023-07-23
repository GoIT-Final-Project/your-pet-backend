const fs = require("fs/promises");

const { Users, Image, Pets } = require("../services");
const { httpError, createToken } = require("../utils");
const { errorMessage } = require("../constants");

const checkUserData = async (req, res, next) => {
  const { body } = req;

  if (req.file) {
    const { public_id, secure_url } = await Image.uploadImage({
      imagePath: req.file.path,
      dirName: req.file.fieldname,
    });

    body.avatarUrl = secure_url;
    body.avatarId = public_id;

    if (req.user.avatarId) await Image.deleteImage(req.user.avatarId);
    await fs.unlink(req.file.path);
  }

  if (body.email) {
    const user = await Users.findUserByQuery({ email: body.email });

    if (user) next(httpError(409, errorMessage[409]));

    body.token = createToken({ email: body.email });
  }

  const keys = Object.keys(body);
  if (!keys.length && !req.file) next(httpError(400, errorMessage[400]));

  next();
};

const checkPetData = async (req, res, next) => {
  const { body } = req;

  if (!req.file) return next(httpError(400, errorMessage[400]));

  const { public_id, secure_url } = await Image.uploadImage({
    imagePath: req.file.path,
    dirName: req.file.fieldname,
  });

  body.fileUrl = secure_url;
  body.fileId = public_id;

  await fs.unlink(req.file.path);

  next();
};

const checkUserAuth = async (req, res, next) => {
  const { petId } = req.params;
  const { id } = req.user;

  const pet = await Pets.find(petId);

  if (!pet) return next(httpError(404, errorMessage[404]));

  if (pet.owner.toString() !== id)
    next(httpError(401, errorMessage[401].wrongAuth));

  next();
};

module.exports = { checkUserData, checkPetData, checkUserAuth };
