var app = require("./src/config/server");
require("dotenv").config();
PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`server running at: localhost:${PORT}`);
});