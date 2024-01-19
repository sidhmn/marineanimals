document.getElementById("button1Text").innerHTML="<span class='buttonDefault'> click to learn something new</span>";
function button1() {
    document.getElementById("button1Text").innerHTML="<span class='innerButton'> Some jellyfish are immortal. These immortal jellyfish, Turritopsis dohrnii, are in Japan and the Mediterranean Sea.</span>";
    // https://www.flickr.com/photos/187163926@N04/49585066452/in/photolist-B31rcn-2ixEqJQ-w3riSc-2owpgsV-rA39T1-5xJeiy-Z95K7f-bg1TS4-bg289k-LC7js5-2nCfw5M-2k2DzaJ-2job16N-2joaYte-2oUCHxw-2kEPgzc-2oUDLDc-2oUCHxS-2oUEPYT-2oUCHxG-2oUDLD2-2oUDLEK-2oUzPtb-2oUEQ16-nRrYsW-2oUEQ2y-2oUCHC1-2oUEQ3k-2oUEQ3R-2oUDLEj-2oUzPvW-2oUCHCb-2oUFi7J-2oUEQ3q-2oUFi3a-2oUzPw2-2oUDLKp-2oUFi6B-2oUFi6w-2oUCHA2-2oUFi6r-2oUCHER-2oUEQ5j-2oUEQ7y-2oUzPx4-2oUDLM8-2oUCHHm-2oUFi9C-2oUCHAH-2oUFiaV/
    document.getElementById("buttonsImg").innerHTML=" <figure> <a href='../creditsMarine/creditsMarine.html#button1img'> <img style='max-width: 100%;' src='src/immortalJellyfish.png' alt='immortal jellyfish'/></a><figcaption>Turritopsis dohrnii (immortal jellyfish)</figcaption> </figure>";
}


document.getElementById("button2Text").innerHTML="<span class='buttonDefault'> click to learn something new</span>";
function button2() {
    document.getElementById("button2Text").innerHTML="<span class='innerButton'> Jellyfish don’t have brains. They lack several other biological components, such as blood, bones, and hearts. However, they have advanced nervous systems that help them navigate the waters.</span>";
    // https://invivobiosystems.com/disease-modeling/neuroscience-models-transgenic-mice-zebrafish-c-elegans-and-jellyfish/
    document.getElementById("buttonsImg").innerHTML="<figure> <a href='../creditsMarine/creditsMarine.html#button2img'>  <img style='max-width: 100%;' src='src/crossSection.png' alt='cross section of jellyfish'/></a><figcaption>Jellyfish anatomy</figcaption> </figure>";
}


document.getElementById("button3Text").innerHTML="<span class='buttonDefault'> click to learn something new </span>";
function button3() {
    document.getElementById("button3Text").innerHTML="<span class='innerButton'> Some jellyfish glow in the dark. They have bioluminescent organs which emit blue or green light.</span>";
    // https://www.scientificamerican.com/article/see-iridescent-jellyfish-and-glowing-wonders-of-the-sea-in-world-oceans-day-photos/
    document.getElementById("buttonsImg").innerHTML="<figure> <a href='../creditsMarine/creditsMarine.html#button3img'> <img style='max-width: 100%;' src='src/glowingJelly.png' alt='glowing jellyfish'/></a><figcaption>Lion’s mane jellyfish in the White Sea</figcaption> </figure>";
}


document.getElementById("button4Text").innerHTML="<span class='buttonDefault'> click to learn something new</span>";
function button4() {
    document.getElementById("button4Text").innerHTML="<span class='innerButton'> Jellyfish without tentacles. The Deepstaria are notorious for being thin jellyfish without having any tentacles, one of the key components associated with jellyfish.</span>";
    // https://www.wired.com/2015/11/absurd-creature-of-the-week-dont-you-dare-call-the-deepstaria-jellyfish-a-whale-placenta/
    document.getElementById("buttonsImg").innerHTML="<figure> <a href='../creditsMarine/creditsMarine.html#button4img'> <img style='max-width: 100%;' src='src/deepstaria.gif' alt='Deepstaria jellyfish'/></a><figcaption>A Deepstaria (Instagram censors some deepstaria images due to its candidly graphic appearance)</figcaption> </figure>";
}


document.getElementById("button5Text").innerHTML="<span class='buttonDefault'> click to learn something new </span>";
function button5() {
    document.getElementById("button5Text").innerHTML="<span class='innerButton'> The lion’s mane jellyfish, or the Cyanea capillata, is the largest known species of jellyfish. They can grow up to 7 feet 6 inches in diameter and have tentacles up to 122 inches long.</span>";
    // https://www.forbes.com/sites/anthonykosner/2012/07/10/lions-mane-jellyfish-image-this-is-literally-how-things-blow-up-on-the-internet/?sh=103f025b6a32
    document.getElementById("buttonsImg").innerHTML="<figure> <a href='../creditsMarine/creditsMarine.html#button5img'> <img style='max-width: 100%;' src='src/lionsmane.jpeg' alt='Lions Mane jellyfish'/></a><figcaption>Size comparison next to an average human male</figcaption> </figure>";
}



// SCROLL REVEAL
ScrollReveal().reveal('#topPage', { delay: 100 });
ScrollReveal().reveal('#mainTitle', { delay: 500 });
ScrollReveal().reveal('#mainSummary', { delay: 500 });
ScrollReveal().reveal('#slideshow', { delay: 800 });
ScrollReveal().reveal('#sub1Top', { delay: 1000 });
ScrollReveal().reveal('#originsImg-container', { delay: 1100 });
ScrollReveal().reveal('#habitatsImg-container', { delay: 1000 });
ScrollReveal().reveal('#sub2Bottom', { delay: 1100 });
ScrollReveal().reveal('#sub3top', { delay: 1000 });
ScrollReveal().reveal('#predatorVideo', { delay: 1100 });
ScrollReveal().reveal('#dietImg-container', { delay: 1000  });
ScrollReveal().reveal('#sub4top', { delay: 1100 });
ScrollReveal().reveal('#sub5Top', { delay: 1000 });
ScrollReveal().reveal('#buttonsImg', { delay: 1100 });
ScrollReveal().reveal('footer', { delay: 400 });


// SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


