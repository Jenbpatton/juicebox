function requireUser(req, res, next) {
  if (req.user){
//check if user is logged in and if the user is logged in, attach the user to the request objec    
    res.locals.user = req.user;
    next();
  } else {

    //if the user is not logged in
    res.status(401).json({message: 'Unaruhroized'});
  }

}

module.exports = {
  requireUser
};