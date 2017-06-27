const express = require("express"),
      router  = express.Router(),
      multer  = require("multer"),
      upload = multer({ dest: 'uploads/' });
      
router.post("/uploadFile", upload.single('myFile'),(request, response,next)=>{
    //myFile is name attribute from input type=file from the html form
    const fileSize = request.file.size;
    if(fileSize){
        response.send({file_size : fileSize});
    }
})

module.exports = router;