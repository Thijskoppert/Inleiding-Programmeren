console.log('hallo ik ben hier'); //test

var mijnknop = document.querySelector ('button')
var mijnheading = document.querySelector ('h1')

var mijnTekst = 'Welkom op de groei-site '

mijnknop.addEventListener('click', function () {
    var mijninput = document.querySelector ('input').value

    if (!mijninput) {
        console.log ('geen input')
    } else { //De H1 word nu 'vervangen' door de H1 + de input van het tekstvak
        mijnheading.textContent = mijnTekst + mijninput 
    }
})

// Met de querySelector haal je de elementen op uit de html
var showarnold = document.querySelector ('.arnoldknop')
var arnold = document.querySelector ('.arnoldbeback')
var arnoldsound = document.querySelector ('.illbeback')

// Met de addEventListener voeg je een event toe aan de var
showarnold.addEventListener('click', function () {
    arnold.classList.remove('hidden')
    arnoldsound.play()
})

// Hieronder staan de 'uitlegvakken' uitgewerkt
var chest = document.querySelector ('.chest')
var uitlegchest = document.querySelector ('.grotechest')

chest.addEventListener('click', function() {
    uitlegchest.classList.remove('hidden')
    uitlegschouders.classList.add('hidden')
    uitlegabs.classList.add('hidden')
    uitlegquads.classList.add('hidden')
    uitlegkuiten.classList.add('hidden')
})

var schouders = document.querySelector ('.schouders')
var uitlegschouders = document.querySelector ('.groteschouders')

schouders.addEventListener('click', function (){
    uitlegschouders.classList.remove('hidden')
    uitlegchest.classList.add('hidden')
    uitlegabs.classList.add('hidden')
    uitlegquads.classList.add('hidden')
    uitlegkuiten.classList.add('hidden')
})

var abs = document.querySelector ('.abs')
var uitlegabs = document.querySelector ('.abboez')

abs.addEventListener('click', function(){
    uitlegabs.classList.remove('hidden')
    uitlegchest.classList.add('hidden')
    uitlegschouders.classList.add('hidden')
    uitlegquads.classList.add('hidden')
    uitlegkuiten.classList.add('hidden')
})

var quads = document.querySelector ('.quads')
var uitlegquads = document.querySelector ('.grotequads')

quads.addEventListener('click', function(){
    uitlegquads.classList.remove('hidden')
    uitlegchest.classList.add('hidden')
    uitlegschouders.classList.add('hidden')
    uitlegabs.classList.add('hidden')
    uitlegkuiten.classList.add('hidden')
})

var kuiten = document.querySelector ('.onderbenen')
var uitlegkuiten = document.querySelector ('.grotekuiten')

kuiten.addEventListener('click', function(){
    uitlegkuiten.classList.remove('hidden')
    uitlegquads.classList.add('hidden')
    uitlegchest.classList.add('hidden')
    uitlegschouders.classList.add('hidden')
    uitlegabs.classList.add('hidden')
})

// Array begint altijd bij 0
var randomgewicht = document.querySelector ('.jouwbench')
var jouwbenchpress = ["20 :(", "30", "60 :)", "80!", "100 :)!!!"]
var vervangdeze = document.querySelector ('.vervanging')
 

randomgewicht.addEventListener("click", function() {
    var randomnummer = Math.random()*5
    randomnummer = Math.floor(randomnummer)
    vervangdeze.textContent = jouwbenchpress[randomnummer]
})













