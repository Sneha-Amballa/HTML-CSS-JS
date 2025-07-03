function generatePassword() {
    const length = 12;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("password").textContent = password;
    document.getElementById("copy-status").textContent = "";
}

function copyPassword() {
    const password = document.getElementById("password").textContent;

    if (password && password !== "Click Generate") {
        navigator.clipboard.writeText(password)
            .then(() => {
                document.getElementById("copy-status").textContent = "Copied to clipboard!";
            })
            .catch(() => {
                document.getElementById("copy-status").textContent = "Failed to copy!";
            });
    } else {
        document.getElementById("copy-status").textContent = "Nothing to copy!";
    }
    document.getElementById("password").textContent="";
}