var player = {
  cheese: 0,
  cheesePerClick: 1,
  items: []
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

var collectionInteval = {


}

function mine() {
  player.cheese += player.cheesePerClick;
  update()
}
// I should be able to make his into one function instead of 5. Is this where a for loop would come in?
function upgradeCost() {
  if (items.fire.quantity > 0) {
    items.fire.price * items.fire.quantity;
    update()
  }
}

function upgradeCost1() {
  if (items.dixie.quantity > 0) {
    items.dixie.price * items.dixie.quantity;
    update()
  }
}

function upgradeCost2() {
  if (items.echo.quantity > 0) {
    items.echo.price * items.echo.quantity;
    update()
  }
}

function upgradeCost3() {
  if (autoItems.timmy.quantity > 0) {
    autoItems.timmy.price * autoItems.timmy.quantity;
    update()
  }
}

function upgradeCost4() {
  if (autoItems.honeyBadger.quantity > 0) {
    autoItems.honeyBadger.price * autoItems.honeyBadger.quantity;
    update()
  }
}
//Same thing only one function should be needed for this or could one function do all 10? I was really proud of this function, it worked better than what I had planned
function clickPerItem() {
  if (items.fire.multiplier > 0) {
    (items.fire.multiplier * items.fire.quantity);
    update()
  }
}


function clickPerItem1() {
  if (items.dixie.multiplier > 0) {
    (items.dixie.multiplier * items.dixie.quantity)
    update()
  }
}

function clickPerItem2() {
  if (items.echo.multiplier > 0) {
    (items.echo.multiplier * items.echo.quantity)
    update()
  }
}

function clickPerItem3() {
  if (autoItems.timmy.multiplier > 0) {
    (autoItems.timmy.multiplier * autoItems.timmy.quantity)
    update()
  }
}

function clickPerItem4() {
  if (autoItems.honeyBadger.multiplier > 0) {
    (autoItems.honeyBadger.multiplier * autoItems.honeyBadger.quantity)
    update()
  }
}

function totalCheesePerClick() {
  if (player.cheese >= 0) {
    (items.fire.multiplier * items.fire.quantity)

  }
}


console.log(totalCheesePerClick())

function fire() {
  if (player.cheese >= items.fire.price) {
    player.cheese -= items.fire.price;
    items.fire.quantity++;
    player.cheesePerClick += items.fire.multiplier;
    items.fire.price *= 2;
    upgradeCost()
    clickPerItem()
    update()
  }
}

function dixie() {
  if (player.cheese >= items.dixie.price) {
    player.cheese -= items.dixie.price;
    items.dixie.quantity++;
    player.cheesePerClick += items.dixie.multiplier;
    items.dixie.price *= 2;
    upgradeCost1()
    clickPerItem1()
    update()
  }
}

function echo() {
  if (player.cheese >= items.echo.price) {
    player.cheese -= items.echo.price;
    items.echo.quantity++;
    player.cheesePerClick += items.echo.multiplier;
    items.echo.price *= 2;
    upgradeCost2()
    clickPerItem2()
    update()
  }
}

function timmy() {
  if (player.cheese >= autoItems.timmy.price) {
    player.cheese -= autoItems.timmy.price;
    autoItems.timmy.quantity++;
    player.cheesePerClick += autoItems.timmy.multiplier;
    autoItems.timmy.price *= 2;
    upgradeCost3()
    clickPerItem3()
    update()
  }
}

function honeyBadger() {
  if (player.cheese >= autoItems.honeyBadger.price) {
    player.cheese -= autoItems.honeyBadger.price;
    autoItems.honeyBadger.quantity++;
    player.cheesePerClick += autoItems.honeyBadger.multiplier;
    autoItems.honeyBadger.price *= 2;
    upgradeCost3()
    clickPerItem3()
    update()
  }
}

//this was originally an if statement, it works with out brackets, Do I need them?

{ setInterval(timmy, 3000) }

{ setInterval(honeyBadger, 5000) }

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


