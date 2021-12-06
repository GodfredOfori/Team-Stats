const team = {
    _players: [
        {firstName: "John", lastname: "Diego", age: 25},
        {firstName: "Fred", lastname: "King", age: 23},
        {firstName: "Gerd", lastname: "Muller", age: 21},
    ],
    _games: [
        {opponents: "Bayern", teamPoints: 21, opponentPoints: 38},
        {opponents: "Dortmund", teamPoints: 41, opponentPoints: 18},
        {opponents: "Chelsea", teamPoints: 27, opponentPoints: 16}
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastname: lastName,
            age: age
        };

        this.players.push(player);
    },

    addGame(oppName, points, oppPoints) {
        const game = {
            opponent: oppName,
            points: points,
            opponentPoints: oppPoints
        }

        this.games.push(game);
    }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

// console.log(team.players);

team.addGame("Warriors", 122, 30);
team.addGame("Clippers", 112, 20);
team.addGame("Warriors", 128, 50);

console.log(team.games);