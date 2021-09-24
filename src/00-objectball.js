function gameObject(){
    const teamStats = {
        home:{
            teamName:'Brooklyn Nets',
            colors:['Black', 'White'],
            players:{
                'Alan Anderson':{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1,
                },
                'Reggie Evans':{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7,
                },
                'Brook Lopez':{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15,
                },
                'Mason Plumlee':{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5,
                },
                'Jason Terry':{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1,
                }
            }
        },
        away:{
            teamName:'Charlotte Hornets',
            colors:['Turquoise', 'Purple'],
            players:{
                'Jeff Adrien':{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2,
                },
                'Bismak Biyombo':{
                        number:0,
                        shoe:16,
                        points:12,
                        rebounds:4,
                        assists:7,
                        steals:7,
                        blocks:15,
                        slamDunks:10,
                },
                'DeSagna Diop':{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5,
                },
                'Ben Gordon':{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0,
                },
                'Brendan Haywood':{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12,
                }
            },
        },
    }
    return teamStats;
};

function homeTeamName() {
    return gameObject().home.teamName;
}

function numPointsScored(playerName) {
    // returns number of points scored for that player
    const teamStats = gameObject();
    const homePlayers = teamStats.home.players;
    const awayPlayers = teamStats.away.players;
    if(homePlayers[playerName]) {
        return homePlayers[playerName].points
    } else if(awayPlayers[playerName]) {
        return awayPlayers[playerName].points
    }
}

function shoeSize(playerName) {
    // returns number of points scored for that player
    const teamStats = gameObject();
    const homePlayers = teamStats.home.players;
    const awayPlayers = teamStats.away.players;
    if(homePlayers[playerName]) {
        return homePlayers[playerName].shoe
    } else if(awayPlayers[playerName]) {
        return awayPlayers[playerName].shoe
    }
}

function teamColors(teamName) {
    // returns number of points scored for that player
    const teamStats = gameObject();
    const homeTeam = teamStats.home;
    const awayTeam = teamStats.away;
    if(homeTeam.teamName === teamName) {
        return homeTeam.colors
    } else if(awayTeam.teamName === teamName) {
        return awayTeam.colors
    }
}

function teamNames() {

    // const teamStats = gameObject();
    // let resArray = [];
    // resArray.push(teamStats.home.teamName);
    // resArray.push(teamStats.away.teamName);
    // return resArray;

    return Object.entries(gameObject()).map((obj) => obj[1].teamName);
}

function playerNumbers(teamName) {
    let teamStats = gameObject();
    const homeTeam = teamStats.home;
    const awayTeam = teamStats.away;

    if (teamName = homeTeam.teamName) {
        return numHelper(homeTeam.players);
    }
    if (teamName = awayTeam.teamName) {
        return numHelper(awayTeam.players);
    }

    function numHelper(teamPlayers) {
        return Object.entries(teamPlayers).map((obj) => obj[1].number);
    }
}

function playerStats(playerName) {
    let teamStats = gameObject();
    const homePlayers = teamStats.home.players;
    const awayPlayers = teamStats.away.players;

    for (const player in homePlayers) {
        if (player === playerName) {
            return homePlayers[player];
        }
    }
    for (const player in awayPlayers) {
        if (player === playerName) {
            return awayPlayers[player];
        }
    }
}

function bigShoeRebounds() {
    let teamStats = gameObject();
    const playersArray = Object.entries(teamStats.home.players).concat(Object.entries(teamStats.away.players));
    const sortedPlayers = playersArray.sort((playerArray1, playerArray2)=>{
            return playerArray1[1].shoe - playerArray2[1].shoe;
    });

    return sortedPlayers.pop()[1];
}

function mostPointsScored() {
    let teamStats = gameObject();
    const playersArray = Object.entries(teamStats.home.players)
                            .concat(Object.entries(teamStats.away.players));
    const sortedPlayers = playersArray.sort((playerArray1, playerArray2)=>{
            return playerArray1[1].points - playerArray2[1].points;
    });

    return sortedPlayers.pop()[1];
}



console.log(mostPointsScored());

// bigShoeRebounds();
