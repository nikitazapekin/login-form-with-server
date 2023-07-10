
const { verify } = require('crypto');
const express = require('express');
const { type } = require('os');



const PORT = 5004;
const app = express();
//const DB_url="mongodb+srv://nikita:Mikrosoft2010@cluster0.5fspc38.mongodb.net/?retryWrites=true&w=majority"


app.use(express.json());

// Middleware для обработки CORSв
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Можно указать конкретный источник, вместо '*'
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
let arr=[]
app.post('/', async (req, res) => {
    let verifyStroke=""

verifyStroke+=Math.floor(Math.random()*10)
verifyStroke+=Math.floor(Math.random()*10)
verifyStroke+=Math.floor(Math.random()*10)
verifyStroke+=Math.floor(Math.random()*10)
   // const {author, title, content} = req.body;
   const {author, title, content, verify} = req.body;
    console.log('Received request with body:', req.body);
    console.log("code "+verifyStroke)
    // остальной код обработки запроса

arr.push(verifyStroke)


console.log("this"+verify)
console.log("this code"+ verifyStroke)
console.log(typeof verify)
console.log(typeof verifyStroke)
console.log(arr)
/*if(verify==verifyStroke){

} */
//if (verify === verifyStroke) {
    if(verify===arr[arr.length-2]){
        console.log("includes")
    res.send("yes"); // Отправка ответа "yes" на frontend
  } else {
    res.send("no"); // Отправка ответа "no" на frontend, если verify и verifyStroke не совпадают
  }

   // const formData = new FormData(e.target);
   const formData = new FormData();
   /*formData.append('author', author);
   formData.append('title', title);
   formData.append('content', content);
   formData.append('verifyStroke', verifyStroke); */
   formData.append('From', "Some test webpage");
   formData.append('to', title);
 //  formData.append('Verify your email', "Your verify code");
   formData.append('verify-code:', verifyStroke);
    fetch("https://getform.io/f/fc6cb4e7-ea47-4b29-b466-75776ffa4a88", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))




  });
  
async function startApp() {
    try{
     //  await mongoose.connect(DB_url, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => {
            console.log('SERVER STARTED ON PORT' + PORT);
          });
    } catch(e) {
console.log(e)
    }
}
startApp()