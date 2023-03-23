// Import libraries and components

// copy pasted - https://github.com/openai/openai-quickstart-node/blob/master/pages/api/generate.js
import { Configuration, OpenAIApi } from "openai";
import {useState, useEffect} from 'react'

// Set up the OpenAI API key and config
const OPENAI_API_KEY = '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';

    // config object created
const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});

// Create a new OpenAIApi object with the configuration
    // Configuration class from the openai package
const openai = new OpenAIApi(configuration);

// Async function to generate an image using the OpenAI API
    // asynchronous operations making an API request
const generateImage = async () => {
     // API request to generate an image w/ prompt
// Link for generating image-> https://platform.openai.com/docs/guides/images/generations
    const response = await openai.createImage({
        prompt: "a white siamese cat wearing hotdog costume",
        // images created
        n: 1,
        // pixel size
        size: "1024x1024",
    });
    // Extract image URL from response. then return it
    const image_url = response.data.data[0].url;
    return image_url;
}

// Form  
const Form = () => {
    // ImageUrl variable and setImageUrl function to update it 

    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {
        const fetchImage = async () => { 
            const url = await generateImage()
            setImageUrl(url)
        }
        fetchImage()
    }, [])

    return (
        <div>
            <input type="text" />
            <input type="submit" />
            {imageUrl && <img src={imageUrl} />} 
        </div>
    );
}

export default Form

