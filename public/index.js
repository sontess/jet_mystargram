function addImg(keyword, index) {
    const img = document.createElement('img');
    img.src = `https://source.unsplash.com/400x225?${keyword}&sig=${index}`;

    const gallery = document.querySelector(".gallery");

    gallery.appendChild(img);
}
    function removeAllPhoto() {
        const galleryElement = document.querySelector(".gallery");
        galleryElement.innerHTML = '';
    }

function searchPhoto(event) {
    const keyword = event.target.value;

    if (event.key == 'Enter' && keyword) {
        removeAllPhoto();
        for (let i = 0; i < 9; i++) {
            addImg(keyword, i);
        }
    }
}

function handleUpdate(){
    const suffix = this.dataset.sizing ||'';
    console.log(`--${this.name}:${this.value+suffix} `);
document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix );
}

function main() {
    const inputControls = document.querySelectorAll('.controls input');
    // console.log(inputControls)
    inputControls.forEach((input) => {input.addEventListener('change',handleUpdate);});


    const inputElement = document.querySelector('.search');
    inputElement.addEventListener('keydown', searchPhoto);
    // addImg('dog', 1);
    // addImg('cat', 1);
    // addImg('football', 1);

}
main();