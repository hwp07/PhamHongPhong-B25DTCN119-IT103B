const players = [
  "Messi - Forward - 25 - 15",
  "Ronaldo - Forward - 30 - 10",
  "Neymar - Forward - 18 - 20",
  "De Bruyne - Midfielder - 8 - 25",
  "Kante - Midfielder - 2 - 5",
  "Van Dijk - Defender - 5 - 3",
  "Alisson - Goalkeeper - 0 - 1",
];

function reportTopPerformers(minPerformance, players) {
  const playersWithPerformance = players.map((player) => {
    const parts = player.split(" - ");

    const name = parts[0];
    const goals = Number(parts[2]);
    const assists = Number(parts[3]);

    const performance = goals + assists;

    return {
      name: name,
      performance: performance,
    };
  });

  const qualifiedPlayers = playersWithPerformance.filter(
    (player) => player.performance >= minPerformance,
  );

  qualifiedPlayers.forEach((player) => {
    console.log(`${player.name}: ${player.performance}`);
  });

  let totalPerformance = 0;
  qualifiedPlayers.forEach((player) => {
    totalPerformance += player.performance;
  });

  console.log(`Tổng hiệu suất: ${totalPerformance}`);
  return totalPerformance;
}

let test = reportTopPerformers(30, players);
console.log(test);
