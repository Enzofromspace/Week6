var foodApp = {};

foodApp.key = ('ed13233b0c3e1d291b582a9ea508a52c')
foodApp.applicationID = ('7260fcc2')

foodApp.Init = function(){
  foodApp.getFood();
  // console.log('good')
}

foodApp.getFood = function(query){
  $.ajax({
    url: 'http://api.yummly.com/v1/api/recipes?key=',
    type: 'GET',
    dataType: 'Jsonp',
    data: {
      _app_id:foodApp.applicationID,
      _app_key: foodApp.key,
      format: 'jsonp',
      q: query 
    },
    dataType: 'jsonp',
    success: function(response){
      console.log(response);
      // foodApp.displayFood(result.artObjects);
    }
  });
}

foodApp.showFood = function(data){

};

$(function(){
  foodApp.Init();
});