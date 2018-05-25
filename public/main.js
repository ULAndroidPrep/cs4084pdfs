var buttonClicks = 0;
var isShowingNotes = false;

$(document).ready(() => {

    // TODO: Remove these lines!
    $(".hidden-notes").show();
    isShowingNotes = true;


    console.log("Click the magic button to show the notes.");
    $("#secret-button").click( ()=> {
        buttonClicks += 1;
        // CONSIDER: This could be a lot shorter with a toggle.
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