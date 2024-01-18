let users = [];

function registerUser() {
    // Retrieve form data and validate inputs
    // Add user to the users array
    // Save users array to local storage
}

function loginUser() {
    // Retrieve login form data
    // Check if user exists in the users array
    // Validate password and update user status
}

function displayUserList() {
    // Display the list of users in the #userList div
}

// Event listeners for menu links
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
    displayUserList();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('userList').style.display = 'block';
});
