async function newFormHandler(event) {
    event.preventDefault();


    const name = document.querySelector('input[name="post-title"]').value;
    const sunRec = document.querySelector('input[name="plant-sun"]').value;
    const waterRec = document.querySelector('input[name="plant-water"]').value;
    const waterDat = document.querySelector('input[name="water-date"]').value;
    const plant_img = document.querySelector('input[name="plant-img"]').files[0].name;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
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
};

document.querySelector('.new-profile-form').addEventListener('submit', newFormHandler)