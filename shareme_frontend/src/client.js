import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = SanityClient({
    projectId: '', 
    dataset : 'production', 
    apiVersion : '2023-07-16', 
    useCdn : true, 
    token: ''
}); 

// Kindly check the sanity documentation for this 
const builder = ImageUrlBuilder(client); 

export const urlFor = (source) => builder.image(source); 