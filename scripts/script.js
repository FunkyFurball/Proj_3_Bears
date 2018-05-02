const bears = [
  {
    name: "Paddington",
    idealSnack: "sweet",
    importantItem: "snack",
    activeTime: "day",
    image: "assets/fishy_bear.jpg"
  },

  {
    name: "Pooh Bear",
    idealSnack: "sweet",
    importantItem: "snack",
    activeTime: "day",
    image: "assets/fishy_bear.jpg"
  },

  {
    name: "Bear Gryllis",
    idealSnack: "savoury",
    importantItem: "knife",
    activeTime: "day",
    image: "assets/fishy_bear.jpg"
  },

  {
    name: "Dwight",
    idealSnack: "savoury",
    importantItem: "knife",
    activeTime: "night",
    image: "assets/fishy_bear.jpg"
  },

  {
    name: "Nice Bear",
    idealSnack: "savoury",
    importantItem: "snack",
    activeTime: "day",
    image: "assets/fishy_bear.jpg"
  },

  {
    name: "Teddy Bear",
    idealSnack: "sweet",
    importantItem: "snack",
    activeTime: "night",
    image: "assets/fishy_bear.jpg"
  },

  {
    name: "Hungry Bear",
    idealSnack: "sweet",
    importantItem: "snack",
    activeTime: "day",
    image: "assets/fishy_bear.jpg"
  }
];

const filter = [];
const secondFilter = [];
const lastFilter = [];
const sound = document.getElementById('sound');


$(function(){
    $('form').on('submit', function(e) {
        //prevent page from refreshing
        e.preventDefault();
        sound.play();

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
        console.log(lastFilter);
          
        //get random match
        //make a function to generate a random number from the lastFilter array.

        const getRandomItemFromArray = function (array) {
          const randomItem = Math.floor(Math.random() * array.length);
          return array[randomItem];
        }
          
        const finalResult = getRandomItemFromArray (lastFilter);
        $(".result").html(`<h1>You are...${finalResult.name}</h1><img src="${finalResult.image}">`);

        });
      }); //end of document ready
      












      
      // adding filter method
      // const secondFilter = filter.filter( (bear) => {
      //     return (userBear.importantItem === bear.importantItem)
      // });