var buttonClicks = 0;
var isShowingNotes = false;

$(document).ready(() => {
    console.log("Click the magic button to show the notes.");
    $("#secret-button").click( ()=> {
        buttonClicks += 1;
        console.log("button clicks = " + buttonClicks);
        if (buttonClicks % 3 == 0) {
            isShowingNotes = !isShowingNotes;
            if (isShowingNotes) {
                $(".hidden-notes").show();
            } else {
                $(".hidden-notes").hide();
            }
        }
    });
});