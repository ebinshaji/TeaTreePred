window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 600) {
      header.classList.add('solid');
      header.classList.remove('transparent');
    } else {
      header.classList.remove('solid');
      header.classList.add('transparent');
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    var typed2 = new Typed('.text', {
      strings: ['Detecting Tea Leaves Disease with Machine Learning:\n A Smart Solution for Healthy Tea Production', 'Tea production is a vital industry in many countries,\n but diseases can significantly impact crop yields and quality.\n Traditional disease detection methods are often\n time-consuming and require manual inspection,\n making them inefficient for large-scale production.','Our tea leaves disease detection system uses machine learning algorithms to\n quickly and accurately detect disease symptoms in tea leaves,\n allowing farmers to identify and treat problems early.\n By analyzing leaf images with high precision, our system helps\n ensure healthy and high-quality tea production, reducing losses and increasing yields.','Try our tea leaves disease detection\n system today and experience the benefits of smart, data-driven tea farming.'],
      typeSpeed: 50,
      backSpeed: 50,
      fadeOut: true,
      loop: true
    });
  });
//image upload
/*
Dropzone.options.myAwesomeDropzone = {
  paramName: "file", // The name that will be used to transfer the file
  maxFilesize: 10, // MB
  maxFiles :6, //maxfiles to be uploaded
  acceptedFiles: ".jpeg,.jpg,.png,.gif", //allow file type

  autoProcessQueue: false, // Prevents Dropzone from uploading dropped file immediately


  init: function() {
      var confirmButton = document.querySelector("#confirm-all");
      var cancelButton = document.querySelector("#cancel-all");

      myDropzone = this; // closure

      //if user click Confirm
      confirmButton.addEventListener("click", function() {
          document.getElementsByClassName("dz-progress")[0].style.display = "block"; //show progress bar
          myDropzone.processQueue(); // Tell Dropzone to process the queued file.

          //hide buttons again
          document.getElementById("upload-confirmation").style.display = "none";

      });

      //if user click Cancel
      cancelButton.addEventListener("click", function() {
          myDropzone.removeAllFiles(true);// Tell Dropzone to cancel the queued file.

          //hide button again
          document.getElementById("upload-confirmation").style.display = "none";
      });


      // You might want to show the submit button only when
      // files are dropped here:
      this.on("addedfile", function() {
          // Show confirm or cancel button
          document.getElementById("upload-confirmation").style.display = "block";

          //hide progress bar temporarily
          document.getElementsByClassName("dz-progress")[0].style.display = "none";
      });

      //on success get the server response here
      this.on("success", function(file, serverResponse) {
          upload_response = JSON.parse(serverResponse);

          //show status to user
          document.getElementById("status").innerHTML = upload_response.status;

          //show image url to user
          document.getElementById("image-url").innerHTML = upload_response.image_url;
      });
  }
};
*/