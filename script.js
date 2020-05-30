window.onload = function(){

    var rock_id =document.querySelector("#rock");
    var paper_id =document.querySelector("#paper");
    var scissors_id =document.querySelector("#scissors");
    var user_id = document.querySelector("#user");
    var computer_id = document.querySelector("#computer");
    var user_score = document.querySelector("#user_score");
    var comp_score = document.querySelector("#computer_score");
    var user_count=0;
    var comp_count=0;
    
    function bot_choice(){
       var list_choices=["rock","paper","scissor"];
       var choice_number = Math.random()*3;
       choice_number = Math.floor(choice_number);
       return list_choices[choice_number];
    }
    function startgame(user_input){
        comp_choice=bot_choice();
        user_choice=user_input;
        if(user_choice=="rock" && comp_choice=="paper"){
         /* computer win*/ 
         user_id.src="rock-user.png";
         computer_id.src="paper-comp.png";
         comp_count++;
         comp_score.value=comp_count;

         document.getElementById("win_value").innerHTML = "Sorry! You lost the Match.🙆"
        }
        if(user_choice=="rock" && comp_choice=="scissor"){
            /* user win*/
            user_id.src="rock-user.png";
            computer_id.src="scissor-comp.png"; 
            user_count++;
            user_score.value=user_count;
            document.getElementById("win_value").innerHTML = "Hurray! You won the Match.😀👑"
        }
        if(user_choice=="rock" && comp_choice=="rock"){
            /* tie */ 
            user_id.src="rock-user.png";
            computer_id.src="rock-comp.png";
            document.getElementById("win_value").innerHTML = "Draw Match. Well done Guys!😁🤪"
        }
        if(user_choice=="paper" && comp_choice=="rock"){
            /* user win*/ 
            user_id.src="paper-user.png";
            computer_id.src="rock-comp.png"; 
            user_count++;
            user_score.value=user_count;
            document.getElementById("win_value").innerHTML = "Hurray! You won the Match.😀👑"
        }
        if(user_choice=="paper" && comp_choice=="scissor"){
            /* computer win*/
            user_id.src="paper-user.png";
            computer_id.src="scissor-comp.png"; 
            comp_count++;
            comp_score.value=comp_count;
            document.getElementById("win_value").innerHTML = "Sorry! You lost the Match.🙆"
        }
        if(user_choice=="paper" && comp_choice=="paper"){
            /* tie*/ 
            user_id.src="paper-user.png";
            computer_id.src="paper-comp.png"; 
            document.getElementById("win_value").innerHTML = "Draw Match. Well done Guys!😁🤪"
        }
        if(user_choice=="scissor" && comp_choice=="rock"){
            /* comp win*/
            user_id.src="scissor-user.png";
            computer_id.src="rock-comp.png";  
             comp_count++;
             comp_score.value=comp_count;
             document.getElementById("win_value").innerHTML = "Sorry! You lost the Match.🙆"
        }
        if(user_choice=="scissor" && comp_choice=="scissor"){
            /*  tie*/ 
            user_id.src="scissor-user.png";
            computer_id.src="scissor-comp.png"; 
            document.getElementById("win_value").innerHTML = "Draw Match. Well done Guys!😁🤪"
        }
        if(user_choice=="scissor" && comp_choice=="paper"){
            /* user win*/ 
            user_id.src="scissor-user.png";
            computer_id.src="paper-comp.png"; 
            user_count++;
            user_score.value=user_count;
            document.getElementById("win_value").innerHTML = "Hurray! You won the Match.😀👑"
        }
   

    }
    /* main function */
    function main(){
       rock_id.addEventListener("click", function() { 
           startgame("rock");
       });
       paper_id.addEventListener("click", function() {
        startgame("paper");
       });
       scissors_id.addEventListener("click", function() {
        startgame("scissor");
       });
    }
    main();
}


