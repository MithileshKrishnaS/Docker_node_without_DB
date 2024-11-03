const express = require('express');
const cors = require('cors');

//Configure Express
const app = express();

//Configure CORS
app.use(cors());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/',function(req,res){
    res.json({success: true});
});