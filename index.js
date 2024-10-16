class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'um ataque desconhecido';
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias da classe Heroi
  const mago = new Heroi('Alvo Dumbledore', 3000, 'mago');
  const guerreiro = new Heroi('Conan', 30, 'guerreiro');
  const monge = new Heroi('Mestre Shifu', 80, 'monge');
  const ninja = new Heroi('Naruto uzumaki', 30, 'ninja');
  
  // Chamando o método atacar() para cada herói
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();