// https://2021.adventjs.dev/challenges/01


// export default function daysToXmas(date) {
//   // ¡Y no olvides compartir tu solución en redes!
//   return 0
// }

export default function daysToXmas(date) {
  const christmasDate = new Date("Dec 25, 2021");

  const diffMilisecondsRaw = Math.abs(christmasDate - date);
  const diffMiliSecondsClean = christmasDate >= date ? diffMilisecondsRaw : - diffMilisecondsRaw;

  const diffSeconds = diffMiliSecondsClean/1000; 
  const diffMinutes = diffSeconds/60; 
  const diffHours = diffMinutes/60; 
  const diffDays = diffHours/24; 
  
  const diffDaysRounded = Math.ceil(diffDays); 

  return diffDaysRounded;
}; 

// // TESTING
// const myDate = new Date('Dec 24, 2021'); 
// console.log(daysToXmas(myDate)); 
// const date1 = new Date('Dec 1, 2021')
// daysToXmas(date1) // 24
// const date2 = new Date('Dec 24, 2021 00:00:01')
// daysToXmas(date2) // 1
// const date3 = new Date('Dec 24, 2021 23:59:59')
// daysToXmas(date3) // 1
// const date4 = new Date("December 20, 2021 03:24:00")
// daysToXmas(date4) // 5
// const date5 = new Date('Dec 25, 2021')
// daysToXmas(date5) // 0
// const date6 = new Date('Dec 26, 2021')
// daysToXmas(date6) // -1
// const date7 = new Date('Dec 31, 2021')
// daysToXmas(date7) // -6
// const date8 = new Date('Jan 1, 2022 00:00:01')
// daysToXmas(date8) // -7


// LOGIC
// const date1 = new Date('Dec 24, 2021');
// const date2 = new Date("Dec 25, 2021");
// const diff = Math.abs(date1 - date2);
// console.log(christmasDate < date)
// console.log(diff/1000/60/60/24);


/* 
EXERCISE
Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.

Veamos unos ejemplos:

const date1 = new Date('Dec 1, 2021')
daysToXmas(date1) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
daysToXmas(date2) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
daysToXmas(date3) // 1
const date4 = new Date("December 20, 2021 03:24:00")
daysToXmas(date4) // 5
El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.

¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos 0) o si es una fecha futura (devolveríamos el número de días en negativo -):

const date = new Date('Dec 25, 2021')
daysToXmas(date) // 0
const date1 = new Date('Dec 26, 2021')
daysToXmas(date1) // -1
const date2 = new Date('Dec 31, 2021')
daysToXmas(date2) // -6
const date3 = new Date('Jan 1, 2022 00:00:01')
daysToXmas(date3) // -7
const date4 = new Date('Jan 1, 2022 23:59:59')
daysToXmas(date4) // -7
Por cierto, la fecha de referencia para saber si es 25 de diciembre es Dec 25, 2021.
*/