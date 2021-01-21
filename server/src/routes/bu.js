module.exports = function(app){

    var api = app.controllers.bu;

    app.route('/v1/bu')
       .get(api.index)
  };
  