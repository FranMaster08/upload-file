import userService from "./users.service.js";

const authService = {
  logIn: async (user, pass) => {
    const user = await userService.findOne(user);
    if (!user) throw new Error("Not Found");
    if (user.password !== pass) {
      throw new Error("Forbiden!");
    }
    return "client jwt";
  },
};

export default authService;
