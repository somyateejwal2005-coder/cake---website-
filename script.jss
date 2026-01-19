function scrollToGallery(){
    document.getElementById("gallery").scrollIntoView({
        behavior:"smooth"
    });
}

document.getElementById("contact-form").addEventListener("submit",function(e){
    e.preventDefault();
    alert("🎉 Thank you! Your message has been sent.");
    this.reset();
});
