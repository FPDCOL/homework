const express = require('express'); 
const app= express();


const PORT =3001; // You can add any PORT of your choice
app.get('/',(req,res) =>{
    res.send('Hello from backend');
});
app.listen(PORT,() =>
    console.log(`SERVER running on http://localhost:${PORT}`)
);