const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/tonkotsu.jpg" }
];

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramens.forEach(ramen => {
        const ramenContainer = document.createElement('div');
        ramenContainer.classList.add('ramen-container');

        const ramenName = document.createElement('p');
        ramenName.textContent = ramen.name;
        ramenContainer.appendChild(ramenName);

        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        ramenContainer.appendChild(img);

        ramenMenu.appendChild(ramenContainer);
    });
}

document.getElementById('ramen-menu').addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        const ramen = ramens.find(r => r.name === event.target.alt);
        if (ramen) {
            const ramenDetail = document.getElementById('ramen-detail');
            ramenDetail.innerHTML = `
                <h2>${ramen.name}</h2>
                <h3>${ramen.restaurant}</h3>
                ${ramen.rating ? `<p>Rating: ${ramen.rating}</p>` : ''}
                ${ramen.comment ? `<p>Comment: ${ramen.comment}</p>` : ''}
            `;
        }
    }
});

function addSubmitListener() {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const newRamen = {
            name: form.name.value,
            restaurant: form.restaurant.value,
            image: form.image.value,
            rating: form.rating.value,
            comment: form.comment.value
        };
        const ramenContainer = document.createElement('div');
        ramenContainer.classList.add('ramen-container');

        const ramenName = document.createElement('p');
        ramenName.textContent = newRamen.name;
        ramenContainer.appendChild(ramenName);

        const img = document.createElement('img');
        img.src = newRamen.image;
        img.alt = newRamen.name;
        ramenContainer.appendChild(img);

        document.getElementById('ramen-menu').appendChild(ramenContainer);
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener('DOMContentLoaded', main);
