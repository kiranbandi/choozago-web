import endPoints from './endPoints';

var ajaxHelpers = {
  getTicketData: function(ticketId) {
    var url = endPoints.getTicketData;
    
    // return $.getJSON(url);

    return $.Deferred(function( defer ) {
           defer.resolve({
			"location":"Infospace Building Gurgaon",
			"name":"Lorem User",
			"status":"parked",
			"timeSlot":"1484196443982",
			"ticketId":"1122"

			})
        }).promise();

  }
}

module.exports = ajaxHelpers;