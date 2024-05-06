name =prompt("enter player's name")

let users=0;
let comps=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");
const us=document.querySelector("#userselect");
const cs=document.querySelector("#compselect");

const username=document.getElementById("name");
username.innerText=name.toUpperCase();


const genchoice=()=>
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
        msg.innerText="GAME DRAW! 🫱🏼‍🫲🏼🫱🏼‍🫲🏼";
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
            msg.innerText="YOU WIN ! 🎉🎉";
            msg.style.backgroundColor="green";
            users++;
            userscore.innerText=users;
            us.innerText="you selected :"+userid;
        cs.innerText="computer selected :"+compchoice;
         }
         
        else
        {
            msg.style.backgroundColor="red";
            msg.innerText="YOU LOSE !😭😭"
            comps++;
            compscore.innerText=comps;
            us.innerText="you selected :"+userid;
        cs.innerText="computer selected :"+compchoice;
        }
        if(users==10)
        {
            let news=document.createElement("div");
            news.innerText=name+" won by :"+(users-comps)+"\n🎉🎉🎉🎉";
            let m=document.querySelector(".scoreb")
            news.style.color="black"
            news.style.backgroundColor="pink"
            news.style.height="100px"
            news.style.width="500px"
            news.style.border="2px solid black"
            news.style.borderRadius="50%";
            news.style.fontSize="30px"
            news.style.display="flex"
            news.style.justifyContent="center"
            news.style.alignItems="center"
            news.style.alignContent="center"
            m.after(news);
            document.querySelector("#userselect").remove();
            document.querySelector("#compselect").remove();
            document.querySelector("#msg").remove();
        }
        if(comps==10)
    {
        let news=document.createElement("div");
        news.innerText="computer"+" won by :"+(Math.abs(users-comps))+"\n😭😭😭😭";
        let m=document.querySelector(".scoreb")
        news.style.color="black"
        news.style.backgroundColor="pink"
            news.style.height="100px"
            news.style.width="500px"
            news.style.border="2px solid black"
            news.style.borderRadius="50%";
            news.style.fontSize="30px"
            news.style.display="flex"
            news.style.justifyContent="center"
            news.style.alignItems="center"
            news.style.alignContent="center"
            m.after(news);
            document.querySelector("#userselect").remove();
            document.querySelector("#compselect").remove();
            document.querySelector("#msg").remove();
    }
    }
    
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>
{
    userid=choice.getAttribute("id");
    if(users<10 && comps<10)
    playgame(userid);

   
    
});
});
