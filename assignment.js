// 1. Feet To Mile Converter 

// function feetToMile(feet){
//     if(feet<0){
//         return "Feet can't be negetive value"
//     }
//     var mile = 1/5280 * feet
//     return mile
   
// }

// var result = feetToMile(2000)
// console.log(result)


// 2. Total Wood Measurement Calculator
// How much wood need for 14 Chair, 5 Table, 3 Bed ??

// function woodCalculator(oneChairWood,oneTableWood,oneBedWood ){

//     var totalChair = 14
//     var totalTable = 5
//     var totalBed = 3

//     if(oneChairWood<0 || oneTableWood<0 || oneBedWood<0){
//        return ('Give me vaild instrument amount')
//     } 
//       else{
//         var total = oneChairWood * totalChair + oneTableWood * totalTable + oneBedWood * totalBed
//         return total
//       } 
// }

// var totalWoodNeed = woodCalculator(1,3,5)
// console.log(totalWoodNeed)


// 3. Total Brick need
// Suppose it's 30 tola Bari


// function brickCalculator(firstTenFloorHeight,secondTenFloorHeight, restOfTheFloorHeight){

//    const BrickPerFeet = 1000

//     var total = firstTenFloorHeight  * BrickPerFeet + secondTenFloorHeight  * BrickPerFeet + restOfTheFloorHeight  * BrickPerFeet
//     return total

// }

// var totalBricks = brickCalculator(15,12,10)
// console.log(totalBricks)


// 4. Tiny Friend Finder Function
// Find The short string from an array

function tinyFriend(friends) {
    
    var tinyFriend = friends[0]

        for(var i = 0; i<friends.length;i++){
            var friend = friends[i]
            if(tinyFriend <= friend){
                tinyFriend = friend
            }
           
        }

        return tinyFriend
}

var smallFriend = tinyFriend(['Nayem','Nabit-Rifat', 'sk','abir','Sahadat-Fakir'])
console.log(smallFriend)

