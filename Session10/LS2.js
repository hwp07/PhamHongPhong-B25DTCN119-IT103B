const player = {
  name: "De Bruyne",
  position: "Midfielder",
  goals: 8,
  assists: 25,
  matchesPlayed: 35,
};

function addPerformanceScore(player) {
  const performancePerMatch =
    (player.goals + player.assists) / player.matchesPlayed;

  player.isKeyPlayer = performancePerMatch > 1;
  console.log(`
Name: ${player.name}
Position: ${player.position}
Goals: ${player.goals}
Assists: ${player.assists}
Matches Played: ${player.matchesPlayed}
Performance Per Match: ${performancePerMatch.toFixed(2)}
isKeyPlayer: ${player.isKeyPlayer}
`);
}

addPerformanceScore(player);
