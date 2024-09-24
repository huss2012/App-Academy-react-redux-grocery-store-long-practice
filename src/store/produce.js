import produceData from '../mockData/produce.json';
//console.log(produceData);

const POPULATE = "produce/POPULATE";
export const populateProduce = () => {
    console.log("populateProdue")
    return {
        type: POPULATE,
        produce: produceData
    }
}

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            console.log("before populate action.");
            const newState = {};
            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            });
            console.log("After populate the action.");
            return newState;
        default:
            return state;
    }
}
