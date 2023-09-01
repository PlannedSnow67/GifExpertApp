import axios from "axios";


const apiKey = '8vwagJdkG3kxmYdCTuubzkhBQXAxrLBQ';

const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=10`;
    const response = await axios.get(url).then((response) => response.data).catch((error) => console.log(error));
    const gifs = response.data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    });
    return gifs;
};

export default getGifs;