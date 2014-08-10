var foodApp = {};

foodApp.key = ('ed13233b0c3e1d291b582a9ea508a52c')
foodApp.applicationID = ('7260fcc2')

// First round of events
foodApp.Init = function(){

  $("#heavy").on("click", function (e){
    e.preventDefault();
    foodApp.getFood("heavy");
    // the "sweet" string is passed into query in getDrinks()
    $("#choices").show();
  });

};

foodApp.getFood = function(query){

  // var qParamaters = {};

  var textArray = [
      'pulled pork',
      'dessert',
      'nachos',
      'burger',
      'cheesy',
      'southern',
      'bbq',
      'bacon',
      'cake'
  ];

  var rand = textArray[Math.floor(Math.random() * textArray.length)];

  if (query=="heavy") {
    qParameters = {
      q: rand,
      "excludedCourse[]": "course^course-Beverages",
      maxResult: 3,
      start: 0,
    }
  };

  $.ajax({
    url: 'http://api.yummly.com/v1/api/recipes?_app_id=7260fcc2&_app_key=ed13233b0c3e1d291b582a9ea508a52c',
    type: 'GET',
    data: qParameters,
    dataType: 'jsonp',
    success: function(result){
      // console.log(result);
      foodApp.showFood(result.matches);
    }
  });
};

foodApp.showFood = function(data){
  $.each(data, function(i, food){
    var title = $('<h2>').text(food.recipeName);
    var link = $('<a>').text(food.id)
    var image = $('<img>').attr('src', food.imageUrlsBySize['90']);
    var showBox = $('<div>').addClass('showBox').append(image, title, link);

    // var foodChoice = $('choices').addClass('choices').append(name, image, showBox);

    $('#choices').append(showBox);
  })
};

$(document).ready(function(){
  foodApp.Init();
});