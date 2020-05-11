var player = {
  cheese: 0,
  cheesePerClick: 1,
  autoClicks: 0
}

var items = {
  fire: { price: 25, quantity: 0, multiplier: 2 },
  dixie: { price: 500, quantity: 0, multiplier: 5 },
  echo: { price: 1000, quantity: 0, multiplier: 10 },
}

var collectAutoUpgrades = [
  {
    name: "timmy",
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  {
    name: "honeyBadger",
    price: 10000,
    quantity: 0,
    multiplier: 50
  }
]


var autoItems = {
  timmy: { price: 600, quantity: 0, multiplier: 20 },
  honeyBadger: { price: 10000, quantity: 0, multiplier: 50 },
}



function mine() {
  player.cheese += player.cheesePerClick;
  update()
}

function automine() {
  player.cheese += player.autoClicks;
  update()
}
setInterval(automine, 3000)

function buyItems(name) {
  if (player.cheese >= items[name].price) {
    player.cheese -= items[name].price;
    items[name].quantity++;
    player.cheesePerClick += items[name].multiplier;
    items[name].price *= 2;

    update()
  }
}


function buyAuto(name) {
  if (player.cheese >= autoItems[name].price) {
    player.cheese -= autoItems[name].price;
    autoItems[name].quantity++;
    player.autoClicks += autoItems[name].multiplier;
    autoItems[name].price *= 2;

    update()
  }
}





//Another one that can probably really be cleaned up. Do I really need to add update to all of my functions?

function update() {
  document.getElementById("cheese").innerText = player.cheese.toString();
  document.getElementById("Fire").innerText = items.fire.quantity.toString();
  document.getElementById("Dixie").innerText = items.dixie.quantity.toString();
  document.getElementById("Echo").innerText = items.echo.quantity.toString();
  document.getElementById("Timmy").innerText = autoItems.timmy.quantity.toString();
  document.getElementById("HoneyBadger").innerText = autoItems.honeyBadger.quantity.toString();
  document.getElementById('fireupgrade').innerText = items.fire.price.toString();
  document.getElementById('dixieupgrade').innerText = items.dixie.price.toString();
  document.getElementById('echoupgrade').innerText = items.echo.price.toString();
  document.getElementById('timmyupgrade').innerText = autoItems.timmy.price.toString();
  document.getElementById('honeybadgerupgrade').innerText = autoItems.honeyBadger.price.toString();
  document.getElementById('firecount').innerHTML = "(Level " + items.fire.quantity + ") clicks: " + items.fire.multiplier * items.fire.quantity;
  document.getElementById('dixiecount').innerHTML = "(Level " + items.dixie.quantity + ") clicks: " + items.dixie.multiplier * items.dixie.quantity;
  document.getElementById('echocount').innerHTML = "(Level " + items.echo.quantity + ") clicks: " + items.echo.multiplier * items.echo.quantity;
  document.getElementById('timmycount').innerHTML = "(Level " + autoItems.timmy.quantity + ") clicks: " + autoItems.timmy.multiplier * autoItems.timmy.quantity;
  document.getElementById('honeybadgercount').innerHTML = "(Level " + autoItems.honeyBadger.quantity + ") clicks: " + autoItems.honeyBadger.multiplier * autoItems.honeyBadger.quantity;
}






update()


