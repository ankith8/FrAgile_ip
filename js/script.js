// var gr = require('graphPlotGDPIndia.js');

$(function() {

  $('#alertMe').click(function(e){

    e.preventDefault();

    $('#successAlert').slideDown();
  });

  // $('#closeGraphWindow').click(function(event) {
  //   $("#gr_1").remove();
  // });
});

function deleteWindow(id){
  $(id).remove();
}



$(document).ready(function () {
    //Toggle fullscreen
    $("#panel-fullscreen").click(function (e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.children('i').hasClass('glyphicon-resize-full'))
        {
            $this.children('i').removeClass('glyphicon-resize-full');
            $this.children('i').addClass('glyphicon-resize-small');
        }
        else if ($this.children('i').hasClass('glyphicon-resize-small'))
        {
            $this.children('i').removeClass('glyphicon-resize-small');
            $this.children('i').addClass('glyphicon-resize-full');

        }
        $(this).closest('.panel').toggleClass('panel-fullscreen');
        toggleWindow();
    });
});

function toggleWindow() {
  removeGraph();
  init();
  dispGrph();
}
