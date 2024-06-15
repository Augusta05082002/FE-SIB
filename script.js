document.getElementById('uploadPhoto').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const uploadedImageContainer = document.getElementById('uploadedImageContainer');
            uploadedImageContainer.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(file);
    }
});
