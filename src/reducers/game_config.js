import * as types from '../constants/action_types';
import expect from 'expect';

const initialState = {
    home_controller: undefined,
    visitor_controller: undefined,
    home_team: undefined,
    visitor_team: undefined};

console.log(initialState);
console.log( Object.assign( {}, initialState, {'home_controller': 'NPC'} ) );
console.log('---');
const configureGame = (state = initialState, action) => {
    switch(action.type) {
    case types.SET_HOME_CONTROLLER:
	return Object.assign({},state,{home_controller: action.player});
    case types.SET_VISITOR_CONTROLLER:
	return Object.assign({},state,{visitor_controller: action.player});
    case types.SET_HOME_TEAM:
	return Object.assign( {}, state, {home_team: action.name});
    case types.SET_VISITOR_TEAM:
	return Object.assign( {}, state, {visitor_team: action.name});
    default:
	return Object.assign({},state);
    }
}

import * as actions from '../actions'
import * as players from '../constants/players'

expect(
    configureGame(undefined, actions.chooseHomeController(players.NPC1))
	.home_controller
).toEqual(players.NPC1);

expect(
    configureGame(undefined, actions.chooseVisitorController(players.PLAYER1))
	.visitor_controller
).toEqual(players.PLAYER1);

expect(
    configureGame( undefined, actions.setHomeTeam('NYY') )
	.home_team
).toEqual('NYY');


var obj = configureGame( undefined, actions.setHomeTeam('LAD') );
console.log(obj);
var obj2 = configureGame(obj, actions.setVisitorTeam('NYM'));
console.log(obj2);
console.log(configureGame(undefined,{}));




