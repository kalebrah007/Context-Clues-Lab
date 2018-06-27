var friendName = ['aaron', 'brad', 'carl', 'denise', 'emily'];
var locationName = ['bathroom', 'closet', 'copy room', 'training room', 'accounting', 'payroll', 'hr', 'qual', 'breakroom', 'conference room'];
var weaponName = ['axe', 'hammer', 'screwdriver', 'saw', 'bamboo stik', 'nail gun', 'drill', 'rope', 'helmet', 'tire iron', 'lug wrench', 'knife', 'revolver', 'shotgun', 'cable', 'candlestick', 'lead pipe', 'harpoon', 'bomb', '2x4'];
 
function createClickFunction(savedNumber) {
  // savedNumber will be the saved value of i we pass in during the loop

  return function () {
    // this will be the function that is fired when someone clicks the h3
    
    alert('Accusation ' + (savedNumber + 1) + ': I accuse ' + friendName[savedNumber % friendName.length] + ' in the ' + locationName[savedNumber % locationName.length] + ' with the ' + weaponName[savedNumber % weaponName.length]);
    
  }
}

for (var i = 0; i < 100; i++) {
  var h3 = document.createElement('h3');
  h3.innerText = 'Accusation ' + (i + 1); 
  h3.addEventListener('click', createClickFunction(i));
  document.body.appendChild(h3);
}









