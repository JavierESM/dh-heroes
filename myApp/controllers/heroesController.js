const heroes = require("../heroes.json")
const heroesController = {
    list: (req, res) => {
        res.render("heroes", {heroes})
    },
    show: (req, res) => {
        let idHeroes = req.params.id
        let heroeReq = heroes.find(({id}) => 
        id == idHeroes
        )
        if (idHeroes > heroes.length + 1){
            res.send("No en nuestra base de datos ningun heroe o heroina con ese nombre")
        }
        else {res.render("detail-heroes", {heroes, heroeReq})}
    },
    detail: (req, res) => {
        let idHeroes = req.params.id
        let heroeReq = heroes.find(({id}) => 
        id == idHeroes
        )
        let comienzo = heroeReq.resenia
        let medio = comienzo.split(" ")
        let limite = medio.slice(0, 30)
        let final = limite.join("  ")
        if (idHeroes > heroes.length + 1){
            res.send("No en nuestra base de datos ningun heroe o heroina con ese nombre")
        }
        else if (req.params.resenia != "resenia"){
            res.render("exq-heroes", {heroes, heroeReq, condition : false, final}) 
        }
        else {res.render("exq-heroes",{heroes, heroeReq, condition : true, final})
    }
    }
}
module.exports = heroesController