import endPoints from './endPoints';

var ajaxHelpers = {
  getTicketData: function(ticketId) {
    var url = endPoints.getTicketData;
    return $.getJSON(url);
  }
}

module.exports = ajaxHelpers;