const emailFrom = "valenkoedu@gmail.com";

const userFieldType = { pets: "pets", user: "user" };

const file = {
  avatar: {
    fieldName: "avatar",
    fileName: "avatar",
    width: 182,
    height: 182,
    fileSize: 1024 * 1024,
  },
  pet: {
    fieldName: "file",
    fileName: "file",
    width: 182,
    height: 182,
    fileSize: 1024 * 1024,
  },
  notice: {
    fieldName: "file",
    fileName: "file",
    width: 182,
    height: 182,
    fileSize: 1024 * 1024,
  },
};

const errorMessage = {
  400: "Bad request! Something wrong with your request body!",
  401: {
    wrongAuth: "Not authorized",
    wrongLogin: "Email or password is wrong",
  },
  404: "Not found",
  409: "Email in use",
};

const fileFormats = ["jpg", "png"];

const serverMessage = {
  expressConnection: `Server running. Use our API on port: ${process.env.PORT}`,
  dbConnection: "Database connection successful",
};

const defaultAvatarUrl =
  "https://res.cloudinary.com/dfkjjfmmp/image/upload/v1743082598/default-avatar.png";

const schemaMessage = {
  auth: "Bad request! Missing required name field or wrong field name.",
  pet: "Bad request! Missing required name field or wrong field name.",
};
const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/;

const phoneRegex =
  /(\+\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/;

const cityRegex = /^[A-Z][a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

module.exports = {
  emailFrom,
  file,
  errorMessage,
  fileFormats,
  serverMessage,
  schemaMessage,
  emailRegex,
  passwordRegex,
  phoneRegex,
  cityRegex,
  defaultAvatarUrl,
  userFieldType,
};
