// 1. Declare uma variável de nome weight
  let weight

// 2. Que tipo de dado é a variável acima?
  console.log(typeof weight)

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
          * name: String
          * age: Number (integer)
          * stars: Number (float)
          * IsSubscribed: Boolean
*/

let name = 'Pedro'
let age = 25
let stars = 8.7
let IsSubscribed = true

/*
  4. A variável student abaixo é de que tipo de dado?
  
  4.Res: Object

  4.1 Atribua a ela as memas propriedades e valores do exercício 3.

  4.2 Mostre no console a seguinte mensagem:

      <name> de idade <age> pesa <weigth> kg.

      Atenção, substitua <name> <age> e <weigth> pelos valores de cada propriedade do objeto
*/

  let student = { 
    name: 'Pedro', 
    age: 25, 
    weigth: 55.9, 
    IsSubscribed: true
  }

  console.log(`${student.name} tem ${student.age} anos idade e pesa ${student.weigth} kg`)


/*
  5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/

  let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objetom criado e inserir ele no Array)
 */

    students = [
      student
    ]

    console.log(students)


  /*  
    7. Coloque no console o valor da posição zero do Array acima
  */

  console.log(students[0])

  /* 
    8. Crie um novo student e coloque na posição 1 do Array students
  */

  const john = {
      name: 'John',
      age: 32,
      weigth: 87.6,
      IsSubscribed: false
  }

  students[1] = john
  console.log(students)

/* 
  9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta rode o código e veja se você acertou.

  console.log(a)
  var a = 1

  res: undefined
*/

console.log(a)
var a = 1