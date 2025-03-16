const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];
 displayRamen(ramens);
 function displayRamen(ramens) {
    const ramenMenu = document.getElementById('ramen-images');
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = 'ramen images';
        img.alt = ramen.name;
        ramenMenu.appendChild(img);
    });
 }
 
