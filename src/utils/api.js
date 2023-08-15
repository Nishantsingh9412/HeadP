import axios from "axios";

const token = "60de48dceefaaebbbf6bdfefca8256edc26f299797eadd57bc9b0a8228060b9d4ebcf4fbaaae5023580ca01ba661b1387381f79f8c7b5c39f729b7afe8ecfef5a682c93df2ea970b9be860188e6253c09d1b2b4ef40c5a771cca2ed5599edbb51828b1544a9475fbeaddbaa21d51dc9b9825ea62dfe7d89942ac6291276071ab";

const params = {
    headers: {
        // Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
        Authorization: "Bearer " + token,
    },
};


export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_DEV_URL + url,
            params
        );
        return data;
        // console.log(data);
        // console.log(process.env.REACT_APP_DEV_URL + url,params);
    } catch (err) {
        console.log(err);
        return err;
    }
};
