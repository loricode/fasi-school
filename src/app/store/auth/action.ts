export const AUTHENTICATED = "AUTHENTICATED";
export const LOGOUT = "LOGOUT";

export const authenticated = (payload: any) => {
  return { type: AUTHENTICATED, payload };
};

export const logout = (payload: any) => {
  return { type: LOGOUT, payload };
};
