const isAuthenticated = (req, res, next) => {
  if (!!req.user)
      return next();

  res.status(403).json({
    error: "You are not authorized to access this route"
  });
}

export default isAuthenticated;