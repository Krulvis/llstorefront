// Define the API endpoint to fetch user media
const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTA_ACCESS_TOKEN}`;

// Make the API request

// Define the type for an Instagram image
export interface InstagramImage {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
    permalink: string;
}

// Define the type for the response data
export interface InstagramResponse {
    data: InstagramImage[];
}

export async function fetchMedia() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: InstagramResponse = await response.json();
        return data.data;
    } catch (error) {
        throw new Error(`Error fetching Instagram data: ${error}`);
    }
}