import { GET_CAROUSEL_DATA } from "./actions";

const initialState = {
    data: [
        {
            image: require("../assets/carouselImages/bg1.png"),
            title: "Contains variety of",
            keyWord: "CHOICES",
            subTitle: "Confused about your outfit? Dont worry! Find the best here",
        },
        {
            image: require("../assets/carouselImages/bg2.png"),
            title: "Update the latest",
            keyWord: "TRENDS",
            subTitle: "Confused about your outfit? Dont worry! Find the best here",
        },
        {
            image: require("../assets/carouselImages/bg3.png"),
            title: "Many for newbie",
            keyWord: "VOUCHERS",
            subTitle: "Confused about your outfit? Dont worry! Find the best here",
        },
    ]
}

function getCarouselDataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CAROUSEL_DATA:
            return state;
        default:
            return state;
    }
}


export default getCarouselDataReducer;
