/*-----------------using promises------------------------ */
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});

promiseWifeBringingTicks.then((t)=>{
    console.log(`person3: shows ${t}`);
});

const getPopcorn = promiseWifeBringingTicks.then((t)=>{
    console.log('wife: I have the tics');
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
});

const getButter = promiseWifeBringingTicks.then((t)=>{
    console.log('husband: I got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve,reject)=>resolve(`${t} butter`));
});

const getColdDrinks = promiseWifeBringingTicks.then((t)=>{
    console.log('husband: I got ColdDrinks');
    console.log('husband: we should go in');
    console.log('wife: ok');
    return new Promise((resolve,reject)=>resolve(`${t} butter`));
});

getButter.then((t)=>{console.log(t)});
console.log('person4: shows ticket');
console.log('person5: shows ticket');






/*-----------------async/await------------------------ */
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMoview = async()=>{
  const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve('ticket') },3000); 
});  

const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));
const addButter = new Promise((resolve,reject)=>resolve('butter'));
const getColdDrinks = new Promise((resolve,reject)=>resolve('getcolddrinks'));

    let ticket = await promiseWifeBringingTicks;
    console.log('wife: I have the tics');
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');

    let popcorn = await getPopcorn;
    console.log('wife: I have the tics');
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');

    let butter = await addButter;
    console.log(`husband: I got some${butter} on popcorn`);
    console.log(`husband: anything else darling?`);
    console.log(`wife: lets go we are getting late`);
    console.log(`husband: thank you for the reminder *grins*`);

    let coldDrinks = await getColdDrinks;
    console.log('husband: I got ColdDrinks');

return ticket
};
preMoview().then((m)=>console.log(`person3: shows${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket'); 






/*---------------------create and delete post using aync/await------------------------ */

const posts =[
    {title :'Post One', body:'This is post one' },
    {title :'Post Two', body:'This is post two'}
]

function getPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let output = '';
            posts.forEach((arr)=>{
                output+= `<li>${arr.title}</li>`;
            })
            document.body.innerHTML=output;
            resolve()
        },2000)
        
    })


}
function createPost(newPost){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(newPost);
            resolve()
        },2000)
  
    })
}


function deleteRecord(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{

        if(posts.length!==0){
         getPosts();
         posts.pop(posts.length-1);
         resolve(deleteRecord());

        }
        else {
         reject ( console.log('array is empty now'));
         }
 
       
       },1500)
    })
 }

 
 async function a(){
    createPost({title:'Post Three', body:'This is post three'})
    createPost({title:'Post Four', body:'This is post Four'})

    await getPosts();
    await deleteRecord();
   
 }
 a();