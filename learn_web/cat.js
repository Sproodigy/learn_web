function showNumber() {
  var value = document.getElementById('input').value;
  document.getElementById('res').innerHTML = value;
}

function Cat() {

  this.createCat = function() {
    var color = document.getElementById('inputColor').value;
    var eyesColor = document.getElementById('inputEyesColor').value;
    var gender = document.getElementById('inputGender').value;
    var breed = document.getElementById('inputBreed').value;
    var weight = document.getElementById('inputWeight').value;

    document.getElementById('pasteColor').innerHTML =
    "Cat: breed — " + breed + ", gender — " + gender + ", color — " + color +
    ", eyes color — " + eyesColor + ", weight — " + weight;

    document.getElementById('createCat').style.display = "none";
    document.getElementById('parametersCat').style.display = "none";
    document.getElementById('liveCat').style.display = "block";
    document.getElementById('data').style.display = "block";
  }

  this.liveCat = function() {
    var hungry = document.getElementById('inputHungry').value;
    var toilet = document.getElementById('inputToilet').value;
    var grooming = document.getElementById('inputGrooming').value;
    var sleep = document.getElementById('inputSleep').value;
    var koshest = document.getElementById('pasteKoshest');
    var borshest = document.getElementById('pasteBorshest');
    var still = ['cat_still_300_200.jpg', 'cat_still2_300_200.jpg'];
    var kosh = ['cat1_koshest_300_200.jpg', 'cat2_koshest_300_200.jpg'];
    var bors = ['cat1_borshest_300_200.jpg', 'cat2_borshest_300_200.jpg'];
    var rand = Math.floor(Math.random() * 2);

    if (hungry < 5 && toilet < 5) {
      koshest.innerHTML = "Кошесть отключена."
      koshest.style.color = "black";
      koshest.style.fontSize = "30px";
      borshest.innerHTML = "Боршесть отключена."
      borshest.style.color = "black";
      borshest.style.fontSize = "30px";
      document.getElementById('image').src = still[rand];
    }

    if (hungry >= 5 && hungry <= 8 && toilet >= 5 && toilet <= 8) {
      koshest.innerHTML = "Кошесть включена."
      koshest.style.color = "maroon";
      koshest.style.fontSize = "40px";
      borshest.innerHTML = "Боршесть выключена."
      borshest.style.color = "black";
      borshest.style.fontSize = "30px";
      document.getElementById('image').src = kosh[rand];
    }

    if (hungry == 9 && toilet == 9) {
      borshest.innerHTML = "Боршесть включена."
      borshest.style.color = "maroon";
      borshest.style.fontSize = "40px";
      koshest.innerHTML = "Кошесть выключена."
      koshest.style.color = "black";
      koshest.style.fontSize = "30px";
      document.getElementById('image').src = bors[rand];
    }

    if (hungry == 10 && toilet == 10 && grooming <= 9 && sleep <= 9) {
      borshest.innerHTML = "Боршесть максимальна."
      borshest.style.color = "red";
      borshest.style.fontSize = "60px";
      koshest.innerHTML = "Кошесть выключена."
      koshest.style.color = "black";
      koshest.style.fontSize = "30px";
    }
  }
}

var cat = new Cat();
