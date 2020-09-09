const express = require('express')
const app = express()
const db = require('./db/db')
const ping = require("ping-tcp-js")
const Tabela = require('./db/tabela');
require('dotenv').config();


    db.authenticate().then(() => {
        Tabela.init(db)
        Tabela.sync()
    })    

    setTimeout(async ()=> {

        let array = []


        let dados = await Tabela.findAll()
        dados.forEach(monitor => {
            array.push({"ip":monitor.ip, "porta": monitor.porta})
        })

    app.set('view-engine', 'ejs')
    app.use('/', express.static('./public'))
    app.use(express.urlencoded({
        extended: true
    }))
    
    app.get('/', (req, res)=> {
        array.forEach(async (teste)=> {
            let resultado;
            await ping.ping(teste.ip, teste.porta).then(res => {
                resultado = res;
                //FinalArray.push({"dominio": teste.ip, "porta": teste.porta, "status": "on"})
                //FinalArray.push('on')
            })
            .catch(erro => {
                //console.log(erro)
                //FinalArray.push({"dominio": teste.ip, "porta": teste.porta, "status": "off"})
                resultado === false;
            })
            //console.log(resultado)
            let json = {
                "nome": teste.ip,
                "status": resultado
            }
            let ar = []
            ar.push(json)
            //console.log(ar)
            res.render('index.ejs', {status: ar})
        })
    })
    
    app.listen(3000, erro => {
        if(erro) throw erro;
    })
    }, 5000)