//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

  // add image input only up 5 numbers 
  function addimg()
  {
    const rowcount=parseInt(document.getElementById('rowcount_img').value.trim())
    // alert(rowcount)
    if (rowcount<5)
    {
      // alert(rowcount)
      $('#img_append').append('<input type="file" class="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp">')
      document.getElementById('rowcount_img').value=rowcount+1
    }
    else
    {
      $('#alert-msg').html('<div class="text-danger">you cannot add more than 5 image</div>')
    }
    
  }
  