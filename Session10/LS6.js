const players = [
  {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
    matches: 34,
    yellowCards: 2,
  },
  {
    name: "Ronaldo",
    position: "Forward",
    age: 39,
    goals: 30,
    assists: 10,
    matches: 38,
    yellowCards: 4,
  },
  {
    name: "Neymar",
    position: "Forward",
    age: 32,
    goals: 18,
    assists: 20,
    matches: 32,
    yellowCards: 3,
  },
  {
    name: "De Bruyne",
    position: "Midfielder",
    age: 33,
    goals: 8,
    assists: 25,
    matches: 35,
    yellowCards: 1,
  },
  {
    name: "Kante",
    position: "Midfielder",
    age: 33,
    goals: 2,
    assists: 5,
    matches: 36,
    yellowCards: 0,
  },
  {
    name: "Van Dijk",
    position: "Defender",
    age: 33,
    goals: 5,
    assists: 3,
    matches: 33,
    yellowCards: 2,
  },
  {
    name: "Alisson",
    position: "Goalkeeper",
    age: 31,
    goals: 0,
    assists: 1,
    matches: 37,
    yellowCards: 0,
  },
];

const generateRankingReport = (minMatches, players) => {
  const eligiblePlayers = players
    .map((player, index) => {
      const performanceScore = +(
        (player.goals + player.assists) /
        player.matches
      ).toFixed(2);

      const efficiencyScore = +(
        performanceScore -
        (player.yellowCards / player.matches) * 10
      ).toFixed(2);

      return {
        rankPosition: 0,
        name: player.name,
        goals: player.goals,
        matches: player.matches,
        performanceScore,
        efficiencyScore,
        originalOrder: index,
      };
    })
    .filter((player) => player.matches >= minMatches);

  const sortedRanking = eligiblePlayers.sort((a, b) => {
    if (b.efficiencyScore !== a.efficiencyScore) {
      return b.efficiencyScore - a.efficiencyScore;
    }

    if (b.performanceScore !== a.performanceScore) {
      return b.performanceScore - a.performanceScore;
    }

    if (b.goals !== a.goals) {
      return b.goals - a.goals;
    }

    return a.originalOrder - b.originalOrder;
  });

  sortedRanking.forEach((player, index) => {
    player.rankPosition = index + 1;
  });

  console.log(`XẾP HẠNG ĐỘI BÓNG (từ ${minMatches} trận trở lên)\n`);

  sortedRanking.forEach((player) => {
    console.log(
      `${player.rankPosition}. ${player.name} - Efficiency: ${player.efficiencyScore} | Performance: ${player.performanceScore} | Goals: ${player.goals}`,
    );
  });

  console.log(`\nTổng số cầu thủ xếp hạng: ${sortedRanking.length}`);

  if (sortedRanking.length > 0) {
    console.log(`Cầu thủ xuất sắc nhất: ${sortedRanking[0].name}`);

    const topThreePlayers = sortedRanking.slice(0, 3);

    const averageTopThreeEfficiency = +(
      topThreePlayers.reduce((sum, player) => sum + player.efficiencyScore, 0) /
      topThreePlayers.length
    ).toFixed(2);

    console.log(`Trung bình efficiency top 3: ${averageTopThreeEfficiency}`);
  }
};

generateRankingReport(30, players);
