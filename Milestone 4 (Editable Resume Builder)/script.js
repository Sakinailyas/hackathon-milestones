var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value.split('\n');
    var experience = document.getElementById('experience').value.split('\n');
    var skills = document.getElementById('skills').value.split('\n');
    var resumeHTml = "\n      <div class=\"resume\">\n            <h1 class=\"center\">Editable Resume</h1>\n            <section>\n                <h2>Personal Information</h2>\n                <ul>\n                    <li><strong>Name:</strong><span contenteditable=\"true\"> ".concat(name, "</span></li>\n                    <li><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></li>\n                    <li><strong>Contact no:</strong><span contenteditable=\"true\"> ").concat(phone, "</span></li>\n                </ul>\n            </section>\n            <section>\n                <h2>Education</h2>\n                <ul contenteditable=\"true\">\n                ").concat(education.map(function (item) { return "<li>".concat(item, "</li>"); }).join(''), "\n                </ul>\n            </section>\n            <section>\n                <h2>Experience</h2>\n                <ul contenteditable=\"true\">\n                    ").concat((_a = experience.map(function (item) { return "<li>".concat(item, "</li>"); })) === null || _a === void 0 ? void 0 : _a.join(''), "\n                </ul>\n            </section>\n            <section>\n                <h2>Skills</h2>\n                <ul contenteditable=\"true\">\n                ").concat(skills.map(function (item) { return "<li>".concat(item, "</li>"); }).join(''), "\n                </ul>\n            </section>\n        </div>\n\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTml;
    }
    else {
        console.error('The resume diislay element is missing');
    }
});
