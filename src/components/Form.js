// Import libraries and components

// copy pasted - https://github.com/openai/openai-quickstart-node/blob/master/pages/api/generate.js
import { Configuration, OpenAIApi } from "openai";
import {useState} from 'react'

// Set up the OpenAI API key and config
const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY

    // config object created
const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});

// Create a new OpenAIApi object with the configuration
    // Configuration class from the openai package
const openai = new OpenAIApi(configuration);

// Async function to generate an image using the OpenAI API
    // asynchronous operations making an API request
const generateImage = async (inputText) => {
     // API request to generate an image w/ prompt
// Link for generating image-> https://platform.openai.com/docs/guides/images/generations
    const response = await openai.createImage({
        prompt: `photorealistic ${inputText} as a hotdog`,
        // images created
        n: 1,
        // pixel size
        size: "512x512",
    });
    // Extract image URL from response. then return it
    const image_url = response.data.data[0].url;
    return image_url;
}

// Form  
const Form = () => {
    // ImageUrl variable and setImageUrl function to update it 

    const [imageUrl, setImageUrl] = useState()

    const [loading, setLoading] = useState(false)

//Used for API testing --
    // useEffect(() => {
    //     const fetchImage = async () => { 
    //         const url = await generateImage()
    //         setImageUrl(url)
    //     }
    //     fetchImage()
    // }, [])

    return (
        <div className="formContainer">
            <h2>Unleash your inner Frankfurter Fashionista! Write a single object of text and watch the result!</h2>
            <form className="form" onSubmit={async (event) => {
                // prevent the default form submit behavior
                event.preventDefault()
                // get the text input value from event and store it in a variable
                const text = event.target[0].value
                try{
                    setLoading(true)
                // call the generateImage function using the text variable and save the response 
                const url = await generateImage(text)
                // setImageUrl to update imageUrl state variable
                setImageUrl(url)}
                catch(error) {
                    console.error(error)
                    alert(`An error occured while generating the image.`)
                } finally {
                    setLoading(false)
                }
            }}>
                <input type="text" />
                <input type="submit" disabled={loading}/>
                {loading ? <span className="loading">Loading...</span> : ''}
            </form>
            {imageUrl && <img src={imageUrl} alt="" />} 
        </div>
    );
}

export default Form

