// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar, que exibe a mensagem com base no tipo de herói
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "não fez nada";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Heroi("Gandalf", 300, "mago");
  heroi1.atacar(); // Saída: O mago atacou usando magia
  
  const heroi2 = new Heroi("Arthur", 40, "guerreiro");
  heroi2.atacar(); // Saída: O guerreiro atacou usando espada
  
  const heroi3 = new Heroi("Liu Kang", 35, "monge");
  heroi3.atacar(); // Saída: O monge atacou usando artes marciais
  
  const heroi4 = new Heroi("Naruto", 20, "ninja");
  heroi4.atacar(); // Saída: O ninja atacou usando shuriken
  