

var friends = ['Ella Mai', 'HER', 'Jazmine Sullivan', 'Cardi B', 'Jojo'];
var locationName = ['living room', 'kitchen', 'master bedroom', 'stairs', 'backyard',
 'garage', 'bathroom', 'dining room', 'basement', 'kids bedroom'];
var weapons = ['knife', 'scissors', 'vase', 'posion', 'butter knife',
 'posion ivy', 'gun', 'Long Claw', 'Dragon Glass', 'Valyrian Steel', 'Dragon Fire', 'Ghost Direwolf', 'Lady Direwolf',
  'Summer Direwolf', 'Greywind Direwolf', 'Nymeria Direwolf', 'Shaggydog Direwolf', 'spear', 'wild fire', 'Hearts Vain',];
var displayAlert;

for (var i = 0; i <= 100; i++) {
    var bluesClue = document.createElement('h3');

    bluesClue.textContent = `Accusation ${i + 1}`
    document.body.appendChild(bluesClue);

    function createFunction () {
        var clueNum = i + 1;
        var friend = friends[i % 5];
        var location = locationName[i % 10];
        var weapon = weapons[i % 20];
        
        return function() {
            alert(`Accusation ${clueNum}: I accuse ${friend}, with the ${weapon}, in the ${location}!`);
        }
    }
    displayAlert = createFunction();

    bluesClue.addEventListener('click', displayAlert);
}




