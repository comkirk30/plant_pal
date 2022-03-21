async function editFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="profile-name"]').value;
    const date_water = document.querySelector('input[name="water-date"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/plants/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name,
            date_water        
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