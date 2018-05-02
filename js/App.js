
// CONNECTING TO API
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': 'X-Client-Id',
    'X-Auth-Token': 'X-Auth-Token'
};

$.ajaxSetup({
	headers: myHeaders
});

// REQUESTING SERVER TO ACCESS THE ARRAY
$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
        setupColumns(response.columns);
    }
});

// CREATING SERVER-SIDE-RESPONSE COLUMNS
function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(cardObj);
  	})
}