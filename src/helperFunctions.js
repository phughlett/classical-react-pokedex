export function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

export function formatPokeData(data) {
  return {
    name: data.name,
    image: data.sprites.front_default,
    type: data.types[0].type.name,
    weight: data.weight,
    pokedex_number: data.id,
    stats: Object.fromEntries(
      data.stats.map((statRecord) => [
        statRecord.stat.name,
        statRecord.base_stat,
      ])
    ),
  };
}
