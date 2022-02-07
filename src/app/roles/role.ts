import { ADMIN, MODERATOR, STUDENT } from "./roles";
const roles = Object.freeze({
  admin: ADMIN,
  moderator: MODERATOR,
  student: STUDENT,
});

export const hasRole = (arryRole: string[], rol: string) => {
  const roleArray = Object.keys(roles);

  const result = arryRole.filter((role) =>
    roleArray.find((item) => item === role)
  );

  return result.includes(rol);

};
