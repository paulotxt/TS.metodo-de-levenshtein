import levenshtein from "fast-levenshtein";

const vocabulario = ["ola", "oie", "bom", "boa", "dia", "noite", "tarde"];

function ENCONTRA(palavra: string): string {
  let maisProxima = "";
  let menorDistancia = Infinity;



  for (const item of vocabulario) {
    const distancia = levenshtein.get(palavra.toLowerCase(), item.toLowerCase());
    
    // Exibe a distância de cada palavra do vocabulário

   console.log(`- Distância até " ${palavra} ${item}": ${distancia}`);

    if (distancia < menorDistancia) {
      menorDistancia = distancia;           
      maisProxima = item;
    }
  }

  // Define limite dinâmico: 40% do tamanho da palavra mais longa
  const limiteAceitavel = Math.floor(maisProxima.length * 0.4);

 

  if (menorDistancia <= limiteAceitavel) {
    return maisProxima;
  } else {
    return "Palavra desconhecida";
  }
}

// Testes
console.log( ENCONTRA("oi"));        
console.log( ENCONTRA("ole"));        
console.log( ENCONTRA("bo"));  
console.log( ENCONTRA("tar"));     
console.log( ENCONTRA("xyz"));        
