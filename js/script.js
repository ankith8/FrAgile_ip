// var gr = require('graphPlotGDPIndia.js');

$(function() {

  $('#alertMe').click(function(e){

    e.preventDefault();

    $('#successAlert').slideDown();
  });
});

// function getWH(){
//   alert("Width and Height of div: " + $(".WH").width() + "  " +$(".WH").height());
// }

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

// $( window ).resize(function() {
//   removeGraph();
//   init();
//   dispGrph();
// });

function toggleWindow() {
  removeGraph();
  init();
  dispGrph();
}
