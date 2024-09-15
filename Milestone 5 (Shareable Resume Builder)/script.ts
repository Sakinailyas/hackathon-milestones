const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement

form.addEventListener('submit',(event : Event) => {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value.split('\n');
    const experience = (document.getElementById('experience') as HTMLInputElement).value.split('\n');
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split('\n');

    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));

    const resumeHTML = `
      <div class="resume">
            <h1 class="center">Editable Resume</h1>
            <section>
                <h2>Personal Information</h2>
                <ul>
                    <li><strong>Name:</strong><span contenteditable="true"> ${name}</span></li>
                    <li><strong>Email:</strong><span contenteditable="true"> ${email}</span></li>
                    <li><strong>Contact no:</strong><span contenteditable="true"> ${phone}</span></li>
                </ul>
            </section>
            <section>
                <h2>Education</h2>
                <ul contenteditable="true">
                ${education.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </section>
            <section>
                <h2>Experience</h2>
                <ul contenteditable="true">
                    ${experience.map(item =>`<li>${item}</li>`)?.join('')}
                </ul>
            </section>
            <section>
                <h2>Skills</h2>
                <ul contenteditable="true">
                ${skills.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </section>
        </div>
     
    `
    resumeDisplayElement.innerHTML = resumeHTML;

    const shareableURL =
    `${window.location.origin}?username=${encodeURIComponent(username)}`;
    
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
    });
    
    downloadPdfButton.addEventListener('click', () => {
    window.print(); 
    });
    
    window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
    
    // Autofill form if data is found in localStorage
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('username') as HTMLInputElement).value = username;
    (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
    (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
    (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
    (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
    (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
    }
    }
    });


   