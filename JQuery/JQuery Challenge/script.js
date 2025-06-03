// Event setup using a convenience method
$( "p" ).click(function() {
    console.log( "You clicked a paragraph!" );
});

// Slowly hide all paragraphs
$( "p" ).hide( "slow" );
 
// Quickly show all divs that have the hidden style class
$( "div.hidden" ).show( "fast" );

// Instantaneously toggle the display of all paragraphs
$( "p" ).toggle();
 
// Slowly toggle the display of all images
$( "img" ).toggle( "slow" );
 
// Toggle the display of all divs over 1.8 seconds
$( "div" ).toggle( 1800 );