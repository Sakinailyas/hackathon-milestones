const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit',(event : Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value.split('\n');
    const experience = (document.getElementById('experience') as HTMLInputElement).value.split('\n');
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split('\n');

    const resumeHTml = `
      <div class="resume">
            <h1 class="center">Resume</h1>
            <section>
                <h2>Personal Information</h2>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Contact no:</strong> ${phone}</li>
                </ul>
            </section>
            <section>
                <h2>Education</h2>
                <ul>
                ${education.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </section>
            <section>
                <h2>Experience</h2>
                <ul>
                    ${experience.map(item =>`<li>${item}</li>`)?.join('')}
                </ul>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>
                ${skills.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </section>
        </div>

    `
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTml;
    }else{
        console.error('The resume diislay element is missing')
    }
})