/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var container = $('div.info');
$(document).ready(function () {
    $.ajax({
        url: "SoundLevels/raspdata.txt",
        dataType: 'json',
        type: "GET",
        success: function (data) {
            $.each(data, function(index, item){
            //    container.append(index + ' : ' + item + '</br>');
            //});
                $('div.info').append($('<div>',{
                    text: "The Noise Level: " + item.soundavg
                }));
                $('div.info').append($('<div>',{
                    text: "Last Refreshed: " + item.currentDate + "  " + item.currentTime
                }));
            });
        },
        error: function(xhr, status, text) {
            console.log(status + ' ' + text);
            $("div.info").html("<p>An error has occurred.");
        }
    });
});
