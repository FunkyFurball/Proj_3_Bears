const bears = [
  {
    name: "Paddington",
    idealSnack: "sweet",
    importantItem: "snack",
    activeTime: "day"
  },

  {
    name: "Pooh Bear",
    idealSnack: "sweet",
    importantItem: "snack",
    activeTime: "day"
  },

  {
    name: "Bear Gryllis",
    idealSnack: "savoury",
    importantItem: "knife",
    activeTime: "day"
  },

  {
    name: "Dwight",
    idealSnack: "savoury",
    importantItem: "knife",
    activeTime: "night"
  },

  {
    name: "Nice Bear",
    idealSnack: "sweet",
    importantItem: "knife",
    activeTime: "day"
  },

  {
    name: "Cuddly Bear",
    idealSnack: "sweet",
    importantItem: "knife",
    activeTime: "day"
  },

   {
    name: "Hungry Bear",
    idealSnack: "sweet",
    importantItem: "snack",
    activeTime: "day"
  } 
];



$(function(){
    $('form').on('submit', function(e) {
        //prevent page from refreshing
        e.preventDefault();

        //save user selection for each question into a variable
        const userIdealSnack = $("input[name=idealSnack]:checked").val();
        const userImportantItem = $("input[name=importantItem]:checked").val();
        const userActiveTime = $("input[name=activeTime]:checked").val();

        //create profile of user as an object in order to compare to objects in Bear array
        const userBear = { idealSnack: userIdealSnack, importantItem: userImportantItem, activeTime: userActiveTime };



        //match properties in first question to first property in bears array
        //create new array called filter, push answers into this array.
        const filter = [];
        for (let i = 0; i < bears.length; i++) {
            let storedChoice = bears[i];
            if(userBear.idealSnack === bears[i].idealSnack){
                filter.push(storedChoice);
                console.log(filter);
            }
        }
                            // adding filter method
                            const secondFilter = filter.filter(() =>{
                                return (userBear.importantItem === bears.importantItem)
                            });

        // //loop through answers from filter array using second property
        // //create another array called secondFilter and push answers into here
        // const secondFilter = [];
        // for (let i = 0; i < secondFilter[i].length; i++) {
        //     let storedChoice = filter[i];
        //     if(userBear.importantItem === secondFilter[i].importantItem){
        //         secondFilter.push(storedChoice);
        //         console.log(secondFilter);
        //     }
        // }

        // //loop through answers through lastFilter
        // //create final array called lastFilter and push final answer here.
        // const lastFilter = [];
        // for (let i = 0; i < lastFilter[i].length; i++) {
        //   let storedChoice = lastFilter[i];
        //   if (userBear.activeTime === lastFilter[i].activeTime) {
        //     lastFilter.push(storedChoice);
        //     console.log(lastFilter);
        //   }
        // }
    });

}); //end of document ready

