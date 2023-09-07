// BUCLE FOR -> Es el mas utilizado
// bucle es es una estructura de control! ⚠️

/**
 * Un bucle for, o ciclo em JS es una estructura de contol que se utiliza para ejecutar un bloque de codigo repetidamente, hasta que una condicion se cumpla
 */

/**
 * SINTAXIS
 * for(inicializacion; condicion; operacion){
 *  //cuerpo || body del bucle
 * }
 */

// for (let inciarEn = 1; inciarEn <= 10; inciarEn++) {
//   console.log(inciarEn);
// }


//incrementacion de la varible iterable
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/**
 * 1. inicializacion: Se ejecuta una vez al principio del bucle. 💪
 * 2. condicion: se comprueba antes de cada iteracion. Si es true se ejecutara el codigo dentro de las llaves
 * 3. codigo: el codigo en bloque que esta encerrado entre {}
 * 4. operacion: se ejectura luego del bloque que encierran {}
 */
console.log('////////////////////////');

//decremetacion de la variable de iteracion
for (let i = 10; i; i--) {
  console.log(i);
}


// bucle infinito
// for (let i = 0; true; i++) {
//   console.log(i);
// }

console.log('////////////////////////');


//Romper el bucle -- break
//Cuando la condicion se vuelve false, se sale del bucle. Pero ustedes tambien pueden forzar que se salga del bucle en cualquier momento. (sentencia break)

for (let i = 0; i <= 50; i++) {
  console.log(i);
  if (i === 8) {
    break
  }
}

for (let i = 0; i <= 50; i++) {
  console.log(i);
  if (i === 8) break
}


// Ejemplo de practica

const usuario = [
  {
    name: 'Andres',
    edad: 45
  },
  {
    name: 'Ana',
    edad: 20
  },
  {
    name: 'Jorge',
    edad: 14
  }
]

const usuarioFiltrado = []

for (let i = 0; i < usuario.length; i++) {

  if (usuario[i].edad >= 18) {// usuario[0].edad === 45
    usuarioFiltrado.push(usuario[i])
    //usuarioFiltrado[i] = usuario[i]
  }

}

console.log(usuarioFiltrado);

