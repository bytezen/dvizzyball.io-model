import teams from './team_data.js';


function league_filter(ts,league) {
    return ts.filter(t => { return t.league == league; } );
}

function division_filter(ts,division) {
    return ts.filter(t => { return t.division == division;} );
}

function american_league_teams(ts) {
    return league_filter(ts,"american");
}

function national_league_teams(ts) {
    return league_filter(ts,"national");
}


export const american_league_west = division_filter(american_league_teams(teams),"west");
export const american_league_east = division_filter(american_league_teams(teams),"east");
export const american_league_central = division_filter(american_league_teams(teams),"central");
export const national_league_west = division_filter(national_league_teams(teams),"west");
export const national_league_east = division_filter(national_league_teams(teams),"east");
export const national_league_central = division_filter(national_league_teams(teams),"central");

/*
function printname(t) { console.log(t.name); };

american_league_west.forEach( printname );
american_league_east.forEach( printname );
american_league_central.forEach( printname );
american_league_west.forEach( printname );
american_league_east.forEach( printname );
american_league_central.forEach( printname );
*/
