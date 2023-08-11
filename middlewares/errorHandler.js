const errorHandler = (err, req, res, next) => {
    console.log(err);
    
  if (err.name === "NotFound") {
    res.status(404).json({ message: "Error Not Found" });
  }
  else if (err.name === "BadReq"){
    res.status(400).json({message: "Bad Request"});
  }
  else if (err.name === "Unauthenticated"){
    res.status(401).json({message: "User Not Logged In"});
  }
  else if (err.name === "Unauthorized"){
    res.status(401).json({message: "Unauthorized"});
  }
  else if (err.name === 'InvalidCred'){
    res.status(400).json({message: "Invalid email"});
  }
  else{
    res.status(500).json({message: "Internal Server Error"});
  }
};

module.exports = errorHandler;