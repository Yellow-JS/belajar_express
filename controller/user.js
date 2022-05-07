const { response } = require("express")

const User = require('../models/user')
// let warga_rw_3 = [
//     {nik:111,nama:"paimin",no_Wa:"08923927322"},
//     {nik:222,nama:"giono",no_Wa:"08367222364"},
//     {nik:333,nama:"supri",no_Wa:"087753622266"}
// ]


module.exports = {
    index: function(req,res){
        let keyword= {}
        if(req.query.keyword){
            keyword={nama: {$regex: req.query.keyword}}
        }
        // cara kesatu
        // User.find( keyword ,"nik nama", function(err,data_warga_rw_3){
        //     if(err) {console.log(err) }
        //     console.log(data_warga_rw_3)            
        //     res.render('pages/user/index',{wargaS:data_warga_rw_3})
        // })

        // cara keddua
        let query = User.find(keyword)
        query.select('nik nama wa')
        query.exec(function(err,data_warga_rw_3){
            if(err) {console.log(err) }
            console.log(data_warga_rw_3)            
            res.render('pages/user/index',{wargaS:data_warga_rw_3})
        })
    },
    create:function(req,res){
        res.render('pages/user/create')
    },
    store: function(req,res){
// cara pertama
    //    const user =  new User({
    //         nik : req.body.nik,
    //         nama :req.body.nama,
    //         wa: req.body.nowa,
    //         pass : req.body.pass
    //     })
    //     user.save(function(err, dataresult){
    //         if(err) {console.error(err)}

    //         console.log(dataresult)
    //         res.redirect('/users')
    //     })
// cara kedua
        User.create({
            nik : req.body.nik,
            nama :req.body.nama,
            wa: req.body.nowa,
            pass : req.body.pass
        }, function(err, dataresult){
                if(err) {console.log(err) }
                console.log(dataresult)
                res.redirect('/users')
                    
        })


        // warga_rw_3.push({
        //     nik:req.body.nik,
        //     nama:req.body.nama,
        //     no_Wa:req.body.nowa
        // })
       
    },
    showDetail:function(req,res){
        const nikWarga = req.params.nikWarga
        // let data1KK= warga_rw_3.filter( warga =>{
        //     return warga.nik == nikWarga
        // })      
        User.findOne({nik:nikWarga}, function(err,data1KK){
            if(err) {console.log(err) }
            console.log(data1KK)
            res.render('pages/user/show', {data1KK: data1KK })
        })
    },
    update: function(req,res){
        const nik = req.params.nik
        warga_rw_3.filter(kepala_keluarga => {
            if(kepala_keluarga.nik == nik){
                kepala_keluarga.nik = req.body.nik,
                kepala_keluarga.nama = req.body.nama,
                kepala_keluarga.no_Wa  = req.body.no_Wa
    
                return kepala_keluarga
            }
        })
        res.json({
            status  : true,
            data    : warga_rw_3,
            message : "Data berhasil diedit",
            method  : req.method,
            url     : req.url
        })
    },
    delete:  function(req,res){
        const nik = req.params.nik
        // res.send(req.params)
        warga_rw_3 = warga_rw_3.filter(kepala_keluarga => kepala_keluarga.nik != nik)
            res.json({
                status  : true,
                data    : warga_rw_3,
                message : "Data berhasil dihapus",
                method  : req.method,
                url     : req.url
            })
        }

}