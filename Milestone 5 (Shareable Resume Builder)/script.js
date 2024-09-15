var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value.split('\n');
    var experience = document.getElementById('experience').value.split('\n');
    var skills = document.getElementById('skills').value.split('\n');
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTML = "\n      <div class=\"resume\">\n            <h1 class=\"center\">Editable Resume</h1>\n            <section>\n                <h2>Personal Information</h2>\n                <ul>\n                    <li><strong>Name:</strong><span contenteditable=\"true\"> ".concat(name, "</span></li>\n                    <li><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></li>\n                    <li><strong>Contact no:</strong><span contenteditable=\"true\"> ").concat(phone, "</span></li>\n                </ul>\n            </section>\n            <section>\n                <h2>Education</h2>\n                <ul contenteditable=\"true\">\n                ").concat(education.map(function (item) { return "<li>".concat(item, "</li>"); }).join(''), "\n                </ul>\n            </section>\n            <section>\n                <h2>Experience</h2>\n                <ul contenteditable=\"true\">\n                    ").concat((_a = experience.map(function (item) { return "<li>".concat(item, "</li>"); })) === null || _a === void 0 ? void 0 : _a.join(''), "\n                </ul>\n            </section>\n            <section>\n                <h2>Skills</h2>\n                <ul contenteditable=\"true\">\n                ").concat(skills.map(function (item) { return "<li>".concat(item, "</li>"); }).join(''), "\n                </ul>\n            </section>\n        </div>\n     \n    ");
    resumeDisplayElement.innerHTML = resumeHTML;
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
