var fileInput = document.querySelector('[type=file]');
var selectedFile = document.querySelector('.file-value');

// For single input
fileInput.addEventListener('change', function() {

    if (this.files.length > 0 && this.files.length < 2) {
        // Single file upload
        var file = this.files[0].name;

        selectedFile.innerText = file;

    } else if (this.files.length > 1) {
        // If there are multiple files
        var files = this.files;
        var selectedList = '';

        for (var i = 0; i < files.length; i++) {
            selectedList += files[i].name;

            if ((i + 1) != files.length) {
                selectedList += ', ';
            }
        }

        selectedFile.innerText = selectedList;

    }

}, false);

// Reusable code selecting all elements
// var fileInputs = document.querySelectorAll('[type=file]');
//
// if (fileInputs) {
//
//     for (var a = 0; a < fileInputs.length; a++) {
//         fileInputs[a].addEventListener('change', function(e) {
//             var selectedFile = e.target.nextElementSibling;
//
//             if (e.target.files.length > 0 && e.target.files.length < 2) {
//                 var file = e.target.files[0].name;
//
//                 selectedFile.innerText = file;
//             } else if (e.target.files.length > 1) {
//                 var files = e.target.files;
//                 var selectedList = '';
//
//                 for (var i = 0; i < files.length; i++) {
//                     selectedList += files[i].name;
//                     if ((i + 1) != files.length) {
//                         selectedList += ', ';
//                     }
//                 }
//                 selectedFile.innerText = selectedList;
//             }
//         }, false);
//     }
//
// }
