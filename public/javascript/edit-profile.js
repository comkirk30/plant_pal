async function editFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="post-title"]').value;
    const sunRec = document.querySelector('input[name="plant-sun"]').value;
    const waterRec = document.querySelector('input[name="plant-water"]').value;
    const waterDat = document.querySelector('input[name="water-date"]').value;
    const plant_img = document.querySelector('input[name="plant-img"]').files[0].name;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name,
            sunRec,
            waterRec,
            waterDat,
            plant_img
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-plant-form').addEventListener('submit', editFormHandler)