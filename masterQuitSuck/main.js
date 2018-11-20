//Long, naive pseudocode:
// for (i=0, i<100, i++) {
// if (i%3 === 0) {
//     console.log('quit')
// }
// else if (i%5 === 0) {
//     console.log('suck')
// }
// else if (i%5 && i%3 === 0) {
//     console.log('quitsuck')
// }
// }

//Shorter solution recollection:
//Uses the question mark to set logs for truthy/falsies
//Numbers greater than zero are truthy, so they return an empty string
//OR, written as ||, specifies what happens when the value of the previous loops is falsy
//OR sets the empty string from before as whatever iterated number we are on
//Zero, the remainder of modulus operation in the case of 3 or 5, is falsy, so it returns quit, suck, or quitsuck
//NOTE: RE-READ ARTICLE AND FIND OUT HOW THE QUESTION MARK, MODULOS, AND BOOLEANS WORK IN THIS CODE BEFORE PROCEEDING
//PAY SPECIAL ATTENTION TO:
//HOW ITERATIONS ARE SET TO BOOLEANS (BOOLEANATED?)
//HOW THE OR WORKS
//WHY THE CODE USES LET
//HOW TO ACTUALLY WRITE OUT THE LONG SOLUTION

//Shorter solution code:
for (let i=0; i<100;)
    console.log(
        ( ++i%3 ? '' : 'quit' ) + (++i%5 ? '' : 'suck') || i
    )