const bears = [
  {
    name: "Paddington Bear",
    idealSnack: "sweet",
    importantItem: "knife",
    activeTime: "day",
    image: "assets/paddington_bear.jpg"
  },

  {
    name: "Sleepy Bear",
    idealSnack: "savoury",
    importantItem: "snack",
    activeTime: "night",
    image: "assets/sleepy_bear.jpg"
  },


  {
    name: "Bear Grylls",
    idealSnack: "savoury",
    importantItem: "knife",
    activeTime: "day",
    image: "assets/grylls_bear.jpg"
  },

  {
    name: "Hungry Bear",
    idealSnack: "sweet",
    importantItem: "knife",
    activeTime: "night",
    image: "assets/fishy_bear.jpg"
  },

  {
    name: "Grumpy Bear",
    idealSnack: "savoury",
    importantItem: "knife",
    activeTime: "night",
    image: "assets/grumpy_bear.jpg"
  },

  {
    name: "Teddy Bear",
    idealSnack: "sweet",
    importantItem: "snack",
    activeTime: "night",
    image: "assets/teddy_bear.jpg"
  },

  {
    name: "Gummy Bear",
    idealSnack: "sweet",
    importantItem: "knife",
    activeTime: "night",
    image: "assets/gummy_bear.jpg"
  },

  {
    name: "Pooh Bear",
    idealSnack: "sweet",
    importantItem: "snack",
    activeTime: "day",
    image: "assets/pooh_bear.jpg"
  },

  {
    name: "Lazyyy Bear",
    idealSnack: "savoury",
    importantItem: "snack",
    activeTime: "day",
    image: "assets/tired_bear.jpg"
  },
];

const filter = [];
const secondFilter = [];
const lastFilter = [];
const sound = document.getElementById('sound');

$(function(){
  //TO BEGIN THE QUIZ
  //Click bear logo, smooth scroll to question section
  
  // $('a').smoothScroll(1000); 
  $('.logo').on('click',function(){
    $('.header').hide();
  });
  // FOR THE FORM, QUESTIONS AND SUBMIT EVENT
    $('form').on('submit', function(e) {
        //prevent page from refreshing
        e.preventDefault();

        //play sound when submit button is clicked
        sound.play();
        
        //hide questions when submit button is clicked
        $('.questions').hide();

        //save user selection for each question into a variable
        const userIdealSnack = $("input[name=idealSnack]:checked").val();
        const userImportantItem = $("input[name=importantItem]:checked").val();
        const userActiveTime = $("input[name=activeTime]:checked").val();

        //create profile of user as an object in order to compare to objects in Bear array
        const userBear = { idealSnack: userIdealSnack, importantItem: userImportantItem, activeTime: userActiveTime };

        //match properties in first question to first property in bears array
        //create new array called filter, push answers into this array.
        for (let i = 0; i < bears.length; i++) {
            let storedChoice = bears[i];
            if(userBear.idealSnack === storedChoice.idealSnack){
                filter.push(storedChoice);
            }
        }
        //loop through answers from filter array using second property
        //create another array called secondFilter and push answers into here
        for (let i = 0; i < filter.length; i++) {
          let storedChoice = filter[i];
            if(userBear.importantItem === storedChoice.importantItem){
              secondFilter.push(storedChoice);
            }
          }
        //loop through answers through lastFilter
        //create final array called lastFilter and push final answer here.
        for (let i = 0; i < secondFilter.length; i++) {
          let storedChoice = secondFilter[i];
          if (userBear.activeTime === storedChoice.activeTime) {
            lastFilter.push(storedChoice);
          } 
        }

        //get random match
        //make a function to generate a random number from the lastFilter array.
          const getRandomItemFromArray = function (array) {
          const randomItem = Math.floor(Math.random() * array.length);
          return array[randomItem];
        }
          
        const finalResult = getRandomItemFromArray (lastFilter);
        $(".result").html(`<h1>You are...<span class="accent">${finalResult.name}</span></h1><img src="${finalResult.image}" id="result">`);


      
      
        //smooth scroll will not work for form submission because when submit button is clicked, smooth scroll starts but problem is content is only generated after the click.
        //so, we use the following code to target body in html, animate it over 1000ms, and tell it to go to #result. Offset tells it to move from top of page.
        //  $('html, body').animate({
        //   scrollTop: $('#result').offset().top
        // }, 1000) 
      });

        
}); //end of document ready
      












      
      // adding filter method
      // const secondFilter = filter.filter( (bear) => {
      //     return (userBear.importantItem === bear.importantItem)
      // });