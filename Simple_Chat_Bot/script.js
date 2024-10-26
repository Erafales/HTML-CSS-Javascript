/**
 * Hacer que adivine un número del 1 al 10
 * Mirar de añadir más funciones
 */

const input = require('sync-input');

let bot_name = "Eva"
let d = new Date()
let actual_date = d.getFullYear()

let numberToGuess = 0
let randomNumber = (min, max) => {return numberToGuess = Math.floor(Math.random() * (max - min))}
    
    console.log(`Hello! My name is ${bot_name}`)
    console.log(`I was created in ${actual_date}`)
    console.log('Please, remind me your name.')
let name = String(input())
    console.log(`Hello ${name}, do you want to play a game? (Yes or No)`)
let response = String(input())
    if (response === 'yes' || response === 'Yes') {       
        console.log('Ok, you have to guess the number i´m thinking between 1 and 10, are you ready?')
        console.log('Which number i am thinking?')
        randomNumber(1,10)
        let guessNumber = Number(input())
        if (isNaN(guessNumber)) {
            console.log('Please write a number :)')
        } else {
            if (numberToGuess == guessNumber){
                console.log('Congratulations, that was the number i was thinking')
            } else {
                console.log(`Oh no, that was not the number, it was ${numberToGuess}, better luck next time`)
            }
        }
    } else {
        console.log('Oh ok :c')
    }
