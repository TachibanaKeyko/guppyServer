var socket = null;

start();

function login()
{
   if(socket == null)
     start();

   if(socket.readyState == 1)
   {
     var data = JSON.stringify({"type": "1", "login": document.getElementById("login").value, "password": document.getElementById("password").value});
     socket.send(data);
   }
}

function startAsync(){
  (async () => { start(); })();
}

function start()
{
   socket = new WebSocket("ws://192.168.1.2:7777");

   socket.onopen = function() 
   {
     console.log("Соединение установлено");
   };

   socket.onclose = function(event) 
   {
     if (event.wasClean) {
       console.log("Соединение закрыто чисто");
   } 
   else 
   {
     alert("Сервер не отвечает");
     socket = null;
   }
     //alert('Код: ' + event.code + ' причина: ' + event.reason);
   };

   socket.onmessage = function(event) 
   {
     console.log("Получены данные " + event.data);
     
     var data = JSON.parse(event.data);

     switch(data.type)
     {
       case '1':
        if(data.success == "true")
	  alert("Logined in");
	else
	  alert("Login error");
        break;
       case '2':
        if(data.success == "true")
	  alert("Session authorized");
	else
	  alert("Session not authorized");
     }

   };

   socket.onerror = function(error) 
   {
     console.log("Ошибка " + error.message);
   };
}

function check()
{
   if(socket.readyState == 1)
   {
     var data = JSON.stringify({"type": "2"});
     socket.send(data);
   }
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}