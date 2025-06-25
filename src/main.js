"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.querySelector("#items");
    const imageElement = document.querySelector("#displayImage");
    const photographerInput = document.querySelector("#photographer");
    const descriptionInput = document.querySelector("#description");
    const scoreInput = document.querySelector("#score");
    const increaseButton = document.querySelector("#increaseScore");
    const decreaseButton = document.querySelector("#decreaseScore");

    // 1. Llenar el select con las opciones
    for (const key in itemData) {
        if (itemData.hasOwnProperty(key)) {
            const option = document.createElement("option");
            option.value = key;
            option.textContent = itemData[key].name;
            selectElement.appendChild(option);
        }
    }

    // 2. Mostrar información al seleccionar un ítem
    selectElement.addEventListener("change", function () {
        const selectedKey = selectElement.value;
        const selectedItem = itemData[selectedKey];

        if (selectedItem) {
            imageElement.src = selectedItem.image;
            imageElement.alt = selectedItem.name;
            photographerInput.value = selectedItem.photographer;
            descriptionInput.value = selectedItem.description;
            scoreInput.value = selectedItem.score;
        }
    });
      // 3. Aumentar puntaje
    increaseButton.addEventListener("click", function () {
        const selectedKey = selectElement.value;
        if (selectedKey && itemData[selectedKey]) {
            itemData[selectedKey].score += 1;
            scoreInput.value = itemData[selectedKey].score;
        }
    });

    // 4. Disminuir puntaje
    decreaseButton.addEventListener("click", function () {
        const selectedKey = selectElement.value;
        if (selectedKey && itemData[selectedKey]) {
            itemData[selectedKey].score -= 1;
            scoreInput.value = itemData[selectedKey].score;
        }
    });
});
