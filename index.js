// Add your code here
function submitData(name, email) {
    const data = {
        name: `${name}`,
        email: `${email}`,
    };

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    body: JSON.stringify(data)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const newId = data.id;
            const body = document.querySelector('body');
            body.innerHTML += `<p>New ID: ${newId}</p>`;
            return newId;
        })
        .catch(function (error) {
            const body = document.querySelector('body');
            body.innerHTML += `<p>Error: ${error.message}</p>`;
        });
}