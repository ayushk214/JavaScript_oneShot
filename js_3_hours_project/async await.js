console.log('person1:shows ticket');

console.log('person2:shows ticket');



const preMovie=async()=>{

  

 const promiseWifeBringingTicks=new Promise((resolve,reject)=>{

  setTimeout(()=>resolve('ticket'),3000);

 });

  

 const getPopcorn =new Promise((resolve,reject)=>resolve(`popcorn`));

 const addButter =new Promise((resolve,reject)=>resolve(`butter`));

 const colddrink=new Promise((resolve,reject)=>resolve(`colddrink`));



 let ticket=await promiseWifeBringingTicks;



 console.log(`wife: i have the ${ticket}`);

 console.log('husband:we should go in');

 console.log("wife: no i am hungry");



 let popcorn =await getPopcorn;



 console.log(`husband: i got some ${popcorn}`);

 console.log('husband:we should go in');

 console.log("wife: I need butter on my popcorn");



 let butter=await addButter;



 console.log(`hunsband: i got some ${butter} on popcorn`);

 console.log(`husband: anything else darling?`)

 console.log(`wife: lets got we are geting late`)

 console.log(`husband:thank you for the remainder *grins*`);

  

 let coldDrink=await colddrink;

 console.log(`i got the ${coldDrink}`)





 return ticket;

}

preMovie().then((m)=>console.log(`person3:shows ${m}`));



console.log('person4:shows ticket');

console.log('person5:shows ticket');