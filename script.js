function generateResume() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;

    // Display values in the preview section
    document.getElementById("previewName").innerText = "Name: " + name;
    document.getElementById("previewEmail").innerText = "Email: " + email;
    document.getElementById("previewEducation").innerText = "Education: " + education;
    document.getElementById("previewExperience").innerText = "Experience: " + experience;

    // Show the preview section
    document.getElementById("resumePreview").style.display = "block";
}
