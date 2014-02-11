var users_joined = [];
var chatrooms = {'west_side':{}, 'east_side':{}};
var westRoom = true;
var westChat = [];
var eastChat = [];

window.new_user_joined = function(name) {
	users_joined.unshift(name);
}

//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() {

	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
    console.log("assigning users to rooms");
    if (westRoom){
        if (checkChatRoom(users_joined[0], westChat)){
        	chatrooms.west_side = users_joined.shift();	    	
        	$('.chat-1').find('.users').append('<p><button type="button" class="btn btn-warning btn-xs">' + chatrooms.west_side + '</button></p>');
        	westChat.unshift(chatrooms.west_side);
            westRoom = false;
            console.log(westChat[0]);
        }
        else{
            users_joined.unshift();
        }
    }
    else{
        if (checkChatRoom(users_joined[0], eastChat)){
        	chatrooms.east_side = users_joined.shift();
            eastChat.unshift(chatrooms.east_side);
        	$('.chat-2').find('.users').append('<p><button type="button" class="btn btn-warning btn-xs">' + chatrooms.east_side + '</button></p>');  	
            westRoom = true;
            console.log(eastChat[0]);
        }
        else{
            users_joined.unshift();
        }
    }
}
function checkChatRoom(nextUser, currentUser){
var truthy = true;
 console.log(nextUser);
	for(var i = 0; i <= currentUser.length; i++){
		if(nextUser === currentUser[i]){
			truthy = false;
		}
	}
    return truthy;

}