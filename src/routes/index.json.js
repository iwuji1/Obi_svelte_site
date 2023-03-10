import { importMarkdowns, convertToPostPreview } from "$lib/handle-markdown"

// load all markdown files from the posts directory
let postFiles = importMarkdowns("src/posts/")

export function get() {
    // convert the markdown to the required format
    let posts = postFiles.map((file) => convertToPostPreview(file));
    // stringify to give it as a result of the get command
    let body = JSON.stringify(posts);

    return {body}
}
