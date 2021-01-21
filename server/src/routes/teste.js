module.exports = function(app){

    var api = app.controllers.teste;

    app.route('/v1/teste')
       .get(api.teste)
  };
  