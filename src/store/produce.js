import produceData from '../mockData/produce.json';


const POPULATE = "produce/POPULATE";
export const populateProduce = () => {
    console.log("populateProdue")
    return {
        type: POPULATE,
        produce: produceData
    }
};

const LIKE_UNLIKE = 'produce/LIKE_UNLIKE';
export const likeUnlike = (id, liked) => {
    return {
        type: LIKE_UNLIKE,
        produceId: id,
        liked
    }
}

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            });
            return newState;

        case LIKE_UNLIKE:
            const id = action.produceId;
            const liked = action.liked;
            const { [id]: likedItem } = state;
            likedItem.liked = liked;
            return {
                ...state, likedItem
            };
        default:
            return state;
    }
}

export const getAllProduce = (state) => Object.values(state.produce);
