const homePageButton = document.getElementById('homePageButton')
const projectsPageButton = document.getElementById('projectsPageButton')
const resumePageButton = document.getElementById('resumePageButton')

homePageButton.addEventListener('click', function(){
    window.location.href = 'home.html'
})

projectsPageButton.addEventListener('click', function(){
    window.location.href = 'projects.html'
})

resumePageButton.addEventListener('click', function(){
    window.location.href = 'resume.html'
})