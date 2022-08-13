const con = require('../db/conexion');
//For Register Page
const insertarTiempo = (req, res) => {
    console.log(req.body);
    con.query('INSERT INTO tiempos SET ?', {horas : req.body.horas, minutos : req.body.minutos, segundos : req.body.segundos, centesimas : req.body.centesimas}, (error, results) => {
        if (error) {
            throw error;
        }
        // res.redirect('/cronometro');s
    }
    );
}
// For View 
const loginView = (req, res) => {

    res.render("cronometro", {
    } );
}
module.exports =  {
    insertarTiempo,
    loginView
};