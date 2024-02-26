// --------------------WEB DEV LOGO ANIMATION-----------------------------
const webDevExpandButton = document.getElementById('webDevExpandButton')
const webDevExpandButtonText = document.getElementById('webDevExpandButtonText')
let webDevButtonTextVar = 0

const htmlLogo = document.getElementById('htmlLogo')
const cssLogo = document.getElementById('cssLogo')
const jsLogo = document.getElementById('jsLogo')

const microsoftSuitesContainer = document.getElementById('microsoftSuitesContainer')

webDevExpandButton.addEventListener('click', function(){
    if(webDevButtonTextVar === 0){
        webDevExpandButtonText.textContent = '-'
        webDevButtonTextVar = 1
        webDevSlideIn()
        microsoftSuitesContainer.style.marginTop = '200px'
        return
    }
    if(webDevButtonTextVar === 1){
        webDevExpandButtonText.textContent = '+'
        webDevButtonTextVar = 0
        webDevSlideOut()
    }
})

function webDevSlideIn() {
    htmlLogo.style.display = 'block';
    cssLogo.style.display = 'block';
    jsLogo.style.display = 'block';

    htmlLogo.style.opacity = '0';
    cssLogo.style.opacity = '0';
    jsLogo.style.opacity = '0';

    htmlLogo.classList.remove('slide-Out');
    cssLogo.classList.remove('slide-Out');
    jsLogo.classList.remove('slide-Out');

    setTimeout(function () {
        jsLogo.classList.add('slide-In');
        jsLogo.style.opacity = '1';
    }, 0);

    setTimeout(function () {
        cssLogo.classList.add('slide-In');
        cssLogo.style.opacity = '1';
    }, 100);

    setTimeout(function () {
        htmlLogo.classList.add('slide-In');
        htmlLogo.style.opacity = '1';
    }, 200); 
}

function webDevSlideOut() {
    htmlLogo.classList.remove('slide-In');
    cssLogo.classList.remove('slide-In');
    jsLogo.classList.remove('slide-In');

    setTimeout(function () {
        htmlLogo.classList.add('slide-Out');
        htmlLogo.style.opacity = '0';
    }, 0);

    setTimeout(function () {
        cssLogo.classList.add('slide-Out');
        cssLogo.style.opacity = '0';
    }, 100);

    setTimeout(function () {
        jsLogo.classList.add('slide-Out');
        jsLogo.style.opacity = '0';
    }, 200); 

    setTimeout(function(){
        htmlLogo.style.display = 'none';
        cssLogo.style.display = 'none';
        jsLogo.style.display = 'none';

        htmlLogo.style.opacity = '0';
        cssLogo.style.opacity = '0';
        jsLogo.style.opacity = '0';

        microsoftSuitesContainer.style.marginTop = '0'
    }, 500);

}
// --------------------WEB DEV LOGO ANIMATION-----------------------------

// --------------------MICROSOFT SUITES LOGO ANIMATION-----------------------------
const microsoftExpandButton = document.getElementById('microsoftExpandButton')
const wordLogo = document.getElementById('wordLogo')
const excelLogo = document.getElementById('excelLogo')
const microsoftExpandButtonText = document.getElementById('microsoftExpandButtonText')
const googleContainer = document.getElementById('googleContainer')

let microsoftButtonTextVar = 0

microsoftExpandButton.addEventListener('click', function(){
    if(microsoftButtonTextVar === 0){
        microsoftExpandButtonText.textContent = '-'
        microsoftButtonTextVar = 1
        microsoftSlideIn()
        googleContainer.style.marginTop = '150px'
        return
    }
    if(microsoftButtonTextVar === 1){
        microsoftExpandButtonText.textContent = '+'
        microsoftButtonTextVar = 0
        microsoftSlideOut()
    }
})

function microsoftSlideIn() {
    wordLogo.style.opacity = '0';
    excelLogo.style.opacity = '0';

    wordLogo.style.display = 'block';
    excelLogo.style.display = 'block';

    wordLogo.classList.remove('slide-Out')
    excelLogo.classList.remove('slide-Out')

    setTimeout(function() {
        excelLogo.classList.add('slide-In');
        excelLogo.style.opacity = '1';
    }, 0);

    setTimeout(function() {
        wordLogo.classList.add('slide-In');
        wordLogo.style.opacity = '1';
    }, 100);
}

function microsoftSlideOut(){
    wordLogo.classList.remove('slide-In')
    excelLogo.classList.remove('slide-In')

    setTimeout(function() {
        wordLogo.classList.add('slide-Out');
        wordLogo.style.opacity = '0';
    }, 0);

    setTimeout(function() {
        excelLogo.classList.add('slide-Out');
        excelLogo.style.opacity = '0';
    }, 100);

    setTimeout(function(){
        wordLogo.style.display = 'none';
        excelLogo.style.display = 'none';

        wordLogo.style.opacity = '0';
        excelLogo.style.opacity = '0';

        googleContainer.style.marginTop = '0'
    }, 400)
}
// --------------------MICROSOFT SUITES LOGO ANIMATION-----------------------------

// --------------------GOOGLE APPLICATIONS LOGO ANIMATION-----------------------------
const docsLogo = document.getElementById('docsLogo')
const sheetsLogo = document.getElementById('sheetsLogo')
const slidesLogo = document.getElementById('slidesLogo')
const drawingsLogo = document.getElementById('drawingsLogo')
const googleText = document.getElementById('googleText')
const googleExpandButton = document.getElementById('googleExpandButton')
const googleExpandButtonText = document.getElementById('googleExpandButtonText')

let googleButtonTextVar = 0

googleExpandButton.addEventListener('click', function(){
    if(googleButtonTextVar === 0){
        googleExpandButtonText.textContent = '-'
        googleButtonTextVar = 1
        googleSlideIn()
        return
    }
    if(googleButtonTextVar === 1){
        googleExpandButtonText.textContent = '+'
        googleButtonTextVar = 0
        googleSlideOut()
    }
})

function googleSlideIn(){
    docsLogo.style.opacity = '0'
    sheetsLogo.style.opacity = '0'
    slidesLogo.style.opacity = '0'
    drawingsLogo.style.opacity = '0'
    googleText.style.opacity = '0'

    docsLogo.style.display = 'block'
    sheetsLogo.style.display = 'block'
    slidesLogo.style.display = 'block'
    drawingsLogo.style.display = 'block'

    docsLogo.classList.remove('slide-Out')
    sheetsLogo.classList.remove('slide-Out')
    slidesLogo.classList.remove('slide-Out')
    drawingsLogo.classList.remove('slide-Out')

    setTimeout(function(){
        drawingsLogo.classList.add('slide-In')
        drawingsLogo.style.opacity = '1'
        googleText.style.display = 'block'
    }, 0)

    setTimeout(function(){
        slidesLogo.classList.add('slide-In')
        slidesLogo.style.opacity = '1'
    }, 80)

    setTimeout(function(){
        sheetsLogo.classList.add('slide-In')
        sheetsLogo.style.opacity = '1'
    }, 160)

    setTimeout(function(){
        docsLogo.classList.add('slide-In')
        docsLogo.style.opacity = '1'
        googleText.style.opacity = '1'
    }, 240)
}   

function googleSlideOut(){
    docsLogo.classList.remove('slide-In')
    sheetsLogo.classList.remove('slide-In')
    slidesLogo.classList.remove('slide-In')
    drawingsLogo.classList.remove('slide-In')

    setTimeout(function(){
        docsLogo.classList.add('slide-Out')
        docsLogo.style.opacity = '0'
        googleText.style.opacity = '0'
    }, 0)

    setTimeout(function(){
        sheetsLogo.classList.add('slide-Out')
        sheetsLogo.style.opacity = '0'
    }, 80)

    setTimeout(function(){
        slidesLogo.classList.add('slide-Out')
        slidesLogo.style.opacity = '0'
    }, 160)

    setTimeout(function(){
        drawingsLogo.classList.add('slide-Out')
        drawingsLogo.style.opacity = '0'
    }, 240)
    setTimeout(function(){
        docsLogo.style.display = 'none'
        sheetsLogo.style.display = 'none'
        slidesLogo.style.display = 'none'
        drawingsLogo.style.display = 'none'
        googleText.style.display = 'none'
    }, 540)
}
// --------------------GOOGLE APPLICATIONS LOGO ANIMATION-----------------------------