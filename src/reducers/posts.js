export default (posts = [], action) => {
    switch(action.types) {
        case "FETCH_ALL": 
            return action.payload;

        case "CREATE":
            return [...posts, action.payload];

        
        default:
            return posts;
    }
}