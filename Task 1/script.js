document.getElementById('calculate').addEventListener('click', function() {
    const dob = parseInt(document.getElementById('dob').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (isNaN(dob) || isNaN(month) || isNaN(year)) {
        alert("Please enter valid date, month, and year.");
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = "Your age is: " + age;
});
