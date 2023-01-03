var tableHead = '<div class="table">' +
		'<div class="table-header">' +
		'	 <div class="header__item"><a id="bookmaker" class="filter__link" href="#">Bookmaker</a></div>' +
		'	 <div class="header__item"><a id="login" class="filter__link filter__link--number" href="#">Login</a></div>' +
		'	 <div class="header__item"><a id="password" class="filter__link filter__link--number" href="#">Password</a></div>' +
		'</div>' + 
                '<div class="table-content">';

update();

function update()
{
  var container = document.getElementById("container");
  
  container.innerHTML = tableHead + createRow("OlimpBet", "TacjiDesu", "du38289") + createRow("Winline", "iejrDesu", "eqwe4289");
}

function createRow(bk, login, password)
{
  var rowTemplate = '<div class="table-row">' +	
		  	'<div class="table-data">' + bk + '</div>' +
		  	'<div class="table-data">' + login + '</div>' +
	          	'<div class="table-data">' + password + '</div>' +
		     '</div>';

  return rowTemplate;
}