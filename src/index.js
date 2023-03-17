import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const arqueiroBruno = new Arqueiro('Bruno', 5, 8);
const magoAntonio = new Mago('Antonio', 4, 'Fogo', 4, 3);
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10);
const arqueiroMagoChico = new ArqueiroMago('Chico', 8, 10, 'Ar', 4, 8);
const guerreiroLuis = new Guerreiro('Luis', 10);

const personagens = [arqueiroBruno, magoAntonio, magaJulia, arqueiroMagoChico, guerreiroLuis];

new PersonagemView(personagens).render();

// console.log(Personagem.verificarVencedor(arqueiroBruno, magoAntonio));
console.log(guerreiroLuis)