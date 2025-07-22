let posts = null;

const capitalizeFirstWord = (text) => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
};

const renderPosts = (post) =>{
   const title = capitalizeFirstWord(post.title);
    const body = capitalizeFirstWord(post.body);

    return `
        <div class="cards text-white bg-white overflow-hidden rounded-lg flex flex-col">
            <div class="cards-header bg-black text-lg font-semibold flex justify-between p-2">
            
                <div class="flex justify-center items-center gap-2"><span class="material-icons">account_circle</span>User: ${post.userId}</div>
                <span class="font-light">#${post.id <=9 ? "00" + post.id : "0" + post.id}</span>
            </div>
            <div class="content flex flex-col justify-between p-2 flex-1">
                <div>
                    <div class="title text-slate-950 font-bold text-2xl">${title}</div>
                    <div id="post-body" class="text-gray-500 mt-2">${body}</div>
                </div>
                <div class="mt-5 flex justify-between items-end">
                    <span class="text-gray-700">Post ID: ${post.id}</span>
                    <button class="text-black">Read More -></button>
                </div>
            </div>
        </div>
    `;
}

const postsContainer = document.getElementById('posts-container')

const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (response.ok) {
        const posts = await response.json();
        posts.forEach(post =>{
            postsContainer.innerHTML += renderPosts(post)
        })
    }
    else{
        console.log("Failed to fetch API");
        
    }
};

getPost()