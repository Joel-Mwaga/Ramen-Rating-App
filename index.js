const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/tonkotsu.jpg", rating: 4, comment: "Super tasty" }
];

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; // Clear existing content
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

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteRamen(ramen.id));
        ramenContainer.appendChild(deleteButton);

        ramenMenu.appendChild(ramenContainer);
    });
}

function displayRamenDetails(ramen) {
    const ramenDetail = document.getElementById('ramen-detail');
    ramenDetail.innerHTML = `
        <img src="${ramen.image}" alt="${ramen.name}" class="detail-image">
        <h2>${ramen.name}</h2>
        <h3>${ramen.restaurant}</h3>
        <p>Rating: <input type="number" id="edit-rating" value="${ramen.rating}" min="1" max="5"></p>
        <p>Comment: <textarea id="edit-comment">${ramen.comment}</textarea></p>
        <button id="save-changes">Save Changes</button>
    `;

    document.getElementById('save-changes').addEventListener('click', () => {
        ramen.rating = document.getElementById('edit-rating').value;
        ramen.comment = document.getElementById('edit-comment').value;
        displayRamenDetails(ramen);
    });
}

function deleteRamen(id) {
    const index = ramens.findIndex(ramen => ramen.id === id);
    if (index !== -1) {
        ramens.splice(index, 1);
        displayRamens();
        if (ramens.length > 0) {
            displayRamenDetails(ramens[0]);
        } else {
            document.getElementById('ramen-detail').innerHTML = '';
        }
    }
}

document.getElementById('ramen-menu').addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        const ramen = ramens.find(r => r.name === event.target.alt);
        if (ramen) {
            displayRamenDetails(ramen);
        }
    }
});

function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const newRamen = {
            id: ramens.length ? ramens[ramens.length - 1].id + 1 : 1,
            name: form.name.value,
            restaurant: form.restaurant.value,
            image: form.image.value,
            rating: form.rating.value,
            comment: form.comment.value
        };
        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
    if (ramens.length > 0) {
        displayRamenDetails(ramens[0]);
    }
}

document.addEventListener('DOMContentLoaded', main);
