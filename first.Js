let users=0;
let comps=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");
const us=document.querySelector("#userselect");
const cs=document.querySelector("#compselect");


const genchoice= ()=>
{
    const opp=["rock","paper","scissor"];
    let ran=Math.floor( Math.random()*3);
    return opp[ran];
};

  
const playgame =(userid)=>{
    console.log("user choice =",userid);
    const compchoice=genchoice();
    console.log("computer choice =",compchoice);

    
    if(userid==compchoice)
    {
        msg.innerText="GAME DRAW!";
        msg.style.backgroundColor="pink";
        us.innerText="you selected :"+userid;
        cs.innerText="computer selected :"+compchoice;
    }
    else
    {
         let userwin=true;
         if(userid=="rock")
         {
            userwin=compchoice=="paper"?false:true;
         }
         else if(userid=="paper")
         {
            userwin=compchoice=="rock"?true:false;
         }
         else
         {
            userwin=compchoice=="paper"?true:false;
         }
         if(userwin)
         {
            msg.innerText="YOU WIN !";
            msg.style.backgroundColor="green";
            console.log("you win !");
            users++;
            userscore.innerText=users;
            us.innerText="you selected :"+userid;
        cs.innerText="computer selected :"+compchoice;
         }
         
        else
        {
            msg.style.backgroundColor="red";
            msg.innerText="YOU LOSE !"
            console.log("you lose !");
            comps++;
            compscore.innerText=comps;
            us.innerText="you selected :"+userid;
        cs.innerText="computer selected :"+compchoice;
        }
    }
    
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>
{
    userid=choice.getAttribute("id");
    playgame(userid);
});
});