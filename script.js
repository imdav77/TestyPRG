let users = [];

function registerUser() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    if (!firstName || !lastName || !username || !password || !age || !gender) {
        alert('Vyplňte všechny nevyplněné tabulky.');
        return;
    }

    const user = {
        firstName,
        lastName,
        username,
        password,
        age,
        gender,
        status: 'active'
    };

    users.push(user);
    saveUsersToLocalStorage();
    displayUserList();
}

function loginUser() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    if (!loginUsername || !loginPassword) {
        alert('Vyplňte všechny nevyplněné tabulky.');
        return;
    }

    const user = users.find(u => u.username === loginUsername);

    if (user) {
        if (user.password === loginPassword) {
            alert('Přihlášení proběhlo úspěšně!');
        } else {
            alert('Nesprávné heslo. Prosím zkuste znovu.');
        }
    } else {
        alert('Přihlašovací jméno nebylo nalezeno. Nejdříve se registrujte prosím.');
    }
}

function displayUserList() {
    const userListDiv = document.getElementById('userList');
    userListDiv.innerHTML = '';

    if (users.length === 0) {
        userListDiv.innerHTML = '<p>Žádný uživate zatím nebyl registrován.</p>';
    } else {
        const userListHTML = users.map(user => `
            <div>
                <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Age:</strong> ${user.age}</p>
                <p><strong>Gender:</strong> ${user.gender}</p>
                <p><strong>Status:</strong> ${user.status}</p>
            </div>
            <hr>
        `).join('');

        userListDiv.innerHTML = userListHTML;
    }
}

function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

function loadUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
        displayUserList();
    }
}

document.getElementById('registerLink').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('userList').style.display = 'none';
});

document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('userList').style.display = 'none';
});

document.getElementById('listUsersLink').addEventListener('click', function() {
    loadUsersFromLocalStorage();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('userList').style.display = 'block';
});
