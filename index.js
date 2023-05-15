let slides = 0;
let diameter = 0;
let deg = 0;

let venus = document.getElementById("venus-main");
let venusSmall = document.getElementById("venus");
let headding1 = document.getElementById("headding1");
let headding2 = document.getElementById("headding2");
let headding3 = document.getElementById("headding3");
let headding4 = document.getElementById("headding4");
let headding5 = document.getElementById("headding5");
let headding6 = document.getElementById("headding6");
let headding7 = document.getElementById("headding7");
let headding8 = document.getElementById("headding8");
let headding9 = document.getElementById("headding9");
let line = document.getElementById("line");
let smallLine = document.getElementsByClassName("line-small");
let diameterHeadding = document.getElementById("diameter");
let solarSystem = document.getElementById("solar-system");
let presentation = document.getElementById("presentation");
let sun = document.getElementById("sun-main");
let astrology = document.getElementsByClassName("astrology");
let info2 = document.getElementById("info2");
let info3 = document.getElementById("info3");

document.addEventListener('keypress', nextSlide);


let venusInterval = setInterval(() => {
    deg++;
    if(deg == 360)
    {
        deg = 0;
    }
}, 80);

solarSystem.style.zoom
function nextSlide()
{
    if(slides == 0)
    {
        venus.style.opacity = "1";
        headding1.style.display = "flex";
        headding1.style.animation = "typing .5s steps(" + headding1.innerText.length + "), blink .5s step-end infinite alternate";
        presentation.appendChild(venus);
        venus.style.width = "30rem";
        venus.style.left = "50%";
        venus.style.top = "50%";
        venus.style.width = "30rem";
        venus.style.borderWidth = "2rem";
        venus.style.transform = "translate(-50%, -50%)";
        venus.style.animation = "venus 170s linear infinite";
        solarSystem.style.display = "none";
        presentation.style.display = "flex";
        slides++;
    }
    else if(slides == 1)
    {
        headding2.style.display = "flex";
        headding2.style.animation = "typing 1s steps(" + headding2.innerText.length + "), blink .5s step-end infinite alternate";
        headding1.style.opacity = "0";
        setTimeout(() =>
        {
            venus.style.width = "35rem";
            venus.style.left = "25%";
            venus.style.top = "50%";
            venus.style.transition = "500ms";
            setTimeout(() =>
            {
                let interval = setInterval(() => {
                    diameter++;
                    if(diameter < 11000)
                    {
                        diameter += 1000;
                    }
                    else if(diameter < 12000)
                    {
                        diameter += 100;
                    }
                    if(diameter == 12104)
                    {
                        clearInterval(interval);
                    }
                    diameterHeadding.innerText = diameter.toString() + " km";
                }, 10);
                line.style.width = "35rem";
                line.style.transition = "500ms";
                diameterHeadding.style.opacity = "1";
                diameterHeadding.style.transition = "100ms";
                setTimeout(() =>
                {
                    for(let i = 0; i < 2; i++)
                    {
                        smallLine[i].style.height = "2rem";
                        smallLine[i].style.transition = "200ms";
                    }
                    setTimeout(() =>
                    {
                        headding4.style.display = "flex";
                        headding4.style.animation = "typing .7s steps(" + headding4.innerText.length + "), blink .5s step-end infinite alternate";
                        setTimeout(() =>
                        {
                            headding5.style.display = "flex";
                            headding5.style.animation = "typing 1s steps(" + headding5.innerText.length + "), blink .5s step-end infinite alternate";
                            setTimeout(() =>
                            {
                                headding6.style.display = "flex";
                                headding6.style.animation = "typing .5s steps(" + headding6.innerText.length + "), blink .5s step-end infinite alternate";
                            }, 1000);
                        }, 1000);
                    }, 200);
                }, 500);
            }, 500)
        }, 1000);
        slides++;
    }
    else if(slides == 2)
    {
        headding2.style.display = "none";
        headding4.style.display = "none";
        headding5.style.display = "none";
        headding6.style.display = "none";
        diameterHeadding.style.opacity = 0;
        diameterHeadding.style.transition = "200ms";
        for(let i = 0; i < 2; i++)
        {
            smallLine[i].style.height = "0rem";
        }
        setTimeout(() =>
        {
            line.style.width = "0rem";
            setTimeout(() =>
            {
                diameterHeadding.style.width = "20rem";
                diameterHeadding.style.fontSize = "1.5rem";
                diameterHeadding.style.top = "145%";
                diameterHeadding.style.left = "40rem";
                setTimeout(() =>
                {
                    diameter = 0;
                    diameterHeadding.innerText = "0 km";
                    line.style.left = "115%";
                    smallLine[0].style.left = ".05%"
                    venus.style.width = "5rem";
                    venus.style.borderWidth = "0.5rem";
                    venus.style.animation = "venus 550s linear infinite";
                    venus.style.translate = "600ms";
                    sun.style.transition = "600ms";
                    sun.style.opacity = "1";
                    setTimeout(() =>
                    {
                        diameterHeadding.style.opacity = "1";
                        let interval2 = setInterval(() =>
                        {
                            if(diameter < 100000000)
                            {
                                diameter += 10000000;
                            }
                            else if(diameter < 107000000)
                            {
                                diameter += 1000000;
                            }
                            else if(diameter <= 107900000)
                            {
                                diameter += 100000;
                            }
                            if(diameter == 108000000)
                            {
                                clearInterval(interval2);
                            }
                            diameterHeadding.innerText = diameter.toString() + " km";
                        }, 50);
                        line.style.width = "60rem";
                        setTimeout(() =>
                        {
                            for(let i = 0; i < 2; i++)
                            {
                                smallLine[i].style.height = "2rem";
                            }
                        }, 500);
                    }, 600);
                }, 500);
            }, 100);
        }, 200);
        slides++;
    }
    else if(slides == 3)
    {
        for(let i = 0; i < 2; i++)
        {
            smallLine[i].style.height = "0rem";
        }
        line.style.width = "0rem";
        diameterHeadding.style.opacity = "0";
        setTimeout(() =>
        {
            sun.style.left = "135rem";
            sun.style.opacity = "0";
            venus.style.width = "30rem";
            venus.style.borderWidth = "2rem";
            venus.style.animation = "venus 170s linear infinite";
            venus.style.left = "50%";
            setTimeout(() =>
            {
                headding3.style.display = "flex";
                headding3.style.animation = "typing 1s steps(" + headding3.innerText.length + "), blink .5s step-end infinite alternate";
                for (let i = 0; i < 2; i++)
                {
                    astrology[i].style.opacity = "1";
                    astrology[i].style.transition = "500ms";
                }
            }, 500);
        }, 500);
        slides++;
    }
    else if(slides == 4)
    {
        info2.style.display = "flex";
        headding3.style.display = "none";
        headding7.style.display = "flex";
        headding7.style.animation = "typing .2s steps(" + headding7.innerText.length + "), blink .5s step-end infinite alternate";
        for (let i = 0; i < 2; i++)
        {
            astrology[i].style.opacity = "0";
            astrology[i].style.transition = "0ms";
        }
        slides++;
    }
    else if(slides == 5)
    {
        info2.style.display = "none";
        info3.style.display = "flex";
        headding7.style.display = "none";
        headding8.style.display = "flex";
        headding8.style.animation = "typing 1s steps(" + headding8.innerText.length + "), blink .5s step-end infinite alternate";
        slides++;
    }
    else if(slides == 6)
    {
        info3.style.display = "none";
        headding8.style.display = "none";
        headding9.style.display = "flex";
        headding9.style.animation = "typing 1s steps(" + headding8.innerText.length + "), blink .5s step-end infinite alternate";
        slides++;
    }
    else if(slides == 7)
    {
        location.reload();
    }
}