import * as types from '../constants/action_types';
import * as C from '../constants/';

// select the home team controller as an NPC or Player
export const chooseHomeController = (controller) => {
    return chooseController( types.SET_HOME_CONTROLLER,  controller );
}

// select the visitor team controller as an NPC or Player
export const chooseVisitorController = (controller) => {
    return chooseController( types.SET_VISITOR_CONTROLLER,  controller );
}

export const setHomeTeam = (name) => {
    return setTeamName( types.SET_HOME_TEAM, name );
}

export const setVisitorTeam = (name) => {
    return setTeamName( types.SET_VISITOR_TEAM, name );
}

const setTeamName = (type, name) =>  {
    return {
	type,
	name
    };
}

// homeOrVisitor is a constant for home controller or visitory controller
const chooseController = (controllerType, controller) => {
    return {
	'type': controllerType,
	'player': controller
	
    };
}
