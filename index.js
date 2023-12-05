
var nameArray = []
var messageArray = []

function writeCards(nameArray, holiday) {
    for ( let i = 0; i < nameArray.length; i++) {
        messageArray.push("Thank you, " + nameArray[i] + ", for the wonderful " + holiday + " gift!")
    }
    return messageArray;
}

writeCards(nameArray, holiday);


function countDown(int) {
    let count = int
    while (count >= 0) {
        console.log(count--)
    }
}

countDown(int)