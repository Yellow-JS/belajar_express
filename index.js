const express= require('express')
const userRouter = require('./router/users')
const app = express()

// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost/warga_db');
}


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//**ini middleware atau satpam sebelum masuk komplek
const myLogger = function (req, res, next) {
    console.log(`Dia sudah izin satpam, silahkan masuk`)
    req.time = new Date()
    next()
  }  
app.use(myLogger)
//*/end middleware

app.set('view engine','ejs')
app.use('/assets', express.static('public'))



app.get('/', function(req,res){
    const warga_cipondoh={
        nik: 11111,
        nama: 'ANJASMORO',
        tanggal: req.time.toString()
    }

    // res.send('<h3>ini halaman utama index</h3>')
    // res.json(warga_cipondoh)
    res.render('pages/index',{warga_tangerang : warga_cipondoh})
})
app.get('/about', function(req,res){
    // res.send('ini halaman about !')
    res.render('pages/about')
})

 
app.use(userRouter)



app.listen(7000,function(){
    console.log('server nodeJS udah jalan')
})