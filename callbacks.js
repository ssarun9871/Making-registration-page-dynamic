

const posts =[
    {title :'Post One', body:'This is post one' , createdAt:new Date().getTime()},
    {title :'Post Two', body:'This is post two', createdAt:new Date().getTime()}
]

function getPosts(){
    setInterval(()=> {
        let output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title} ${Math.round((new Date().getTime() - post.createdAt)/1000)} second ago</li>`;
        });
        document.body.innerHTML = output;
    },500);
}

function createPost(post,cb){
    setTimeout(()=>{
        posts.push({...post, createdAt:new Date().getTime()});
        cb();
    },1000);

}
// createPost({title:'Post Three',body:'This is post three'},getPosts);

function create4thpost(post,cb){
    setTimeout(()=>{
        posts.push({...post, createdAt:new Date().getTime()});
        
    },1200)
    cb({title:'Post Three',body:'This is post three'},getPosts);
}

create4thpost({title:'Post Four', body:'This is post four'},createPost);