/*exercicio 1
if(megaSena.length === 4){

  for(let i = 0; i < megaSena.length; i++){ //resultado1
      for(let z = 0; z < megaSena[i].length; z++){ // 0
          console.log(`sorteio ${i + 1}: ${megaSena[i]}`)
      }
  }

}else{
  console.log('É necessário alterar o número de itens do array')
}*/

/*exercicio 2
if(megaSena.length === 4){
      //key e value
  for(let i in megaSena){ //resultado1
      for(let z = 0; z < megaSena[i].length; z++){ // 0
          console.log(`sorteio ${i + 1}: ${megaSena[i]}`)
      }
  }

}else{
  console.log('É necessário alterar o número de itens do array')*/

//exercicio 3
/*if(megaSena.length === 4){
      //key in value ---> for in
  for(let i in megaSena){
      //elemento do array
      for(let z of megaSena[i]){ 
          console.log(`sorteio ${i + 1}: ${megaSena[i]}`)
      }
  }

}else{
  console.log('É necessário alterar o número de itens do array')*/
/*if(megaSena.length === 4){
    //key in value ---> for in
for(let i in megaSena){
    //elemento do array
    for(let z of megaSena[i]){ 
        console.log(`sorteio ${i + 1}: ${[z]}`)
    }
}

}else{
console.log('É necessário alterar o número de itens do array')*/

const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
];

for(let i in filmes){
  for(let j = 0; j < filmes[i].elenco.length; j++){
    console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirijido por ${filmes[i].diretor}; \nTem no elenco: ${filmes[i].elenco}`);
  }
}
for (let i in filmes) {
  console.log(filmes[i].titulo, filmes[i].ano, filmes[i].diretor)
  for (let z of filmes) {
      //  console.log(`${filmes[i].titulo}, de ${filmes.ano}, dirigido por ${filmes.elenco}`)
      console.log(`Tem como elenco: ${z.elenco}`)
  }
}