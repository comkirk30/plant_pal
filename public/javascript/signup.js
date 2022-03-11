async function signupFormHandler(event) {
    event.preventDefault();

// username & email & password & Zip code
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const location = document.querySelector('#city-signup').value.trim();
    const about = document.querySelector('#about-signup').value.trim();

    if (username && email && password && location && about) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password,
                location,
                about
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log(`Success ${username}, you have logged in!`);


            document.location.replace('/dashboard');

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);