console.log ('Attendance Calculator is run !!')

// Main routine to alter the attendance display
function setup () {
	rows = document.querySelectorAll ('#subjetInfo > tr');

	if (rows.length == 0) {
		// We are most likely dealing with the case where the attendance display is not on the screen
		alert ('Attendance table not found on the display\nPlease click on [Attendance] in the left-hand-side menu');
	}

	for (var r = 0; r < rows.length; r++) {
		sub = rows[r].children [2];   
		subree = rows[r].children [1];          // `sub` is a node containing attendance info for a single subject
		console.log(subree)

		// Just a little decoration
		// Additionally, can also be used to verify that the correct elements are being targeted
		sub.style.backgroundColor = 'blue';

		// Our calculations
		attn = sub.innerHTML.split ('/');
		attended = Number(attn[0]); total = Number (attn[1]);
		temp=attended
		// console.log("1 ",attended)
		// console.log("2",total)
		while(attended/total<=0.80)
		{
			attended=attended+1;
			total+=1;
		}
		console.log("you need to attend ",attended-temp)
		after_bunk_attn = attended * 100 / total;
		sub.title = "Bunk 1 class => " + after_bunk_attn + "%";
		// console.log(sub.title)
	}
}

// Create a button, on pressing which the extension will start modifying the attendance page
btn = document.createElement ('button');
btn.onclick = setup;
btn.innerHTML = 'Show Attendance Calculator';
// Append it to the page
nav = document.querySelector ('#pge_menu');
nav.appendChild (btn);