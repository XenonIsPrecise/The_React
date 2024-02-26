const CatApiURL = "https://api.thecatapi.com/v1/images/search";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Quotes(){
    useEffect(()=>{async function getInitialImage(){
        fetchImage();
    }
    getInitialImage();
    },[] )

    const [imageUrl, setImageUrl] = useState(null);

    async function fetchImage() {
        try {
          const catApi = await axios.get(CatApiURL);
          const imageUrl = catApi.data[0].url;
          setImageUrl(imageUrl);
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      }
    return (
        <>
        <button onClick={fetchImage}>Fetch URL</button>
        <div>{imageUrl && <img src={imageUrl} alt="Cat" />}</div>
        </>
    )
}

