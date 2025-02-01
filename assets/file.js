document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const attendance = document.getElementById("attendance").value;
    const guests = document.getElementById("guests").value;

    alert(`Thank you, ${name}! Your RSVP has been submitted.`);

    // Optionally, you could send this data to a backend or a Google Sheet
    // For now, just reset the form
    document.getElementById("rsvp-form").reset();
});
