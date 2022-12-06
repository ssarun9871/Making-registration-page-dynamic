let lastActivity = new Date().getTime();
console.log("last activity before createing post "+lastActivity);


const posts =[
    {title :'Post One', body:'This is post one' },
    {title :'Post Two', body:'This is post two'}
]

function getPosts(){
    
    setTimeout(()=>{
        let output = '';
        posts.forEach((arr)=>{
            output+= `<li>${arr.title}</li>`;
        })
        document.body.innerHTML=output;
    },1000)

}
function createPost(newPost){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(newPost);
            resolve(newPost)
        },1000)
  
    })
}


function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        let recentTime = new Date().getTime();
        setTimeout(()=>{
            
            resolve(recentTime)
        },1000);
       
    })
}

function printRecord(){
    return new Promise((resolve,reject)=>{
        resolve(posts)

    })
}


function updatePost(){
    Promise.all([createPost,updateLastUserActivityTime]).then(()=>{console.log("lastActivity "+lastActivity)});
}

createPost({title:'Post Three', body:'This is post three'})
.then(updatePost)
.then(getPosts)



createPost({title:'Post Four', body:'This is post Four'})
.then(updatePost)
.then(getPosts)
.then(()=>{console.log(posts)}).then(deleteLastRecord).then(()=>{console.log(posts)}).then(getPosts);



function deleteRecord(){
    return new Promise((resolve,reject)=>{
       getPosts();
       setTimeout(()=>{
        //calling delete record again is posts[] is not empty
        if(posts.length!==0){
         resolve(deleteRecord());
        }
 
        else {
         reject ( console.log('array is empty now'));
         }
 
       //deleting the last post
       posts.pop(posts.length-1);
         
       },1000)
    })
 }
 

 function deleteLastRecord(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            posts.pop(posts.length-1);
            resolve(posts)
        },1000)
       
        
    })
 }
