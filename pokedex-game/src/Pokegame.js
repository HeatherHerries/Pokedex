import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "Fire", experience: 62 },
      { id: 7, name: "Squirtle", type: "Water", experience: 63 },
      { id: 11, name: "Metapod", type: "Bug", experience: 72 },
      { id: 12, name: "Butterfree", type: "Flying", experience: 178 },
      { id: 25, name: "Pikachu", type: "Electric", experience: 112 },
      { id: 39, name: "Jigglypuff", type: "Normal", experience: 95 },
      { id: 94, name: "Gengar", type: "Poison", experience: 225 },
      { id: 133, name: "Eevee", type: "Normal", experience: 65 }
    ]
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce(
      (experience, pokemon) => experience + pokemon.experience,
      0
    );
    let exp2 = hand2.reduce(
      (experience, pokemon) => experience + pokemon.experience,
      0
    );
    return (
      <div>
        <Pokedex pokemon={hand1} experience={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} experience={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}
export default Pokegame;
