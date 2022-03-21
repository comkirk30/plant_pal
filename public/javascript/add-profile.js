async function newFormHandler(event) {
    event.preventDefault();


    const name = document.querySelector('input[name="profile-name"]').value;
    const sunlight = document.getElementById('plant-sun').value;
    const water = document.getElementById('plant-water').value;
    const date_water = document.querySelector('input[name="water-date"]').value;
    

    const response = await fetch(`/api/plants`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            sunlight,
            water,
            date_water
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