function validateStudent() {
    var firstName = document.getElementById("firstNameSt").value;
    var lastName = document.getElementById("lastNameSt").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;

    if (firstName === "") {
        alert("Please enter Student's First Name.");
        return false;
    } else if (lastName === "") {
        alert("Please enter Student's Last Name.");
        return false;
    } else if (dateOfBirth == "") {
        alert("Please enter Student's Date of Birth.");
        return false;
    } else if (!(isNaN(firstName))) {
        alert("Numbers are not allowed in the field 'First Name'.");
        return false;
    } else if (!(isNaN(lastName))) {
        alert("Numbers are not allowed in the field 'Lat Name'.");
        return false;
    } else {
        return true;
    }
}

function validateTrainer() {
    var firstName = document.getElementById("firstNameTr").value;
    var lastName = document.getElementById("lastNameTr").value;
    var subject = document.getElementById("subject").value;

    if (firstName === "") {
        alert("Please enter Trainer's First Name.");
        return false;
    } else if (lastName === "") {
        alert("Please enter Trainer's Last Name.");
        return false;
    } else if (!(isNaN(firstName))) {
        alert("Numbers are not allowed in the field 'First Name'.");
        return false;
    } else if (!(isNaN(lastName))) {
        alert("Numbers are not allowed in the field 'Last Name'.");
        return false;
    } else {
        return true;
    }
}

function validateCourse() {
    var title = document.getElementById("titleCourse").value;
    var stream = document.getElementById("stream").value;
    var type = document.getElementById("type").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;

    if (title === "") {
        alert("Please enter Course's Title.");
        return false;
    } else if (stream === "") {
        alert("Please enter Course's Stream.");
        return false;
    } else if (type === "") {
        alert("Please enter Course's Type.");
        return false;
    } else if (!(isNaN(title))) {
        alert("Numbers are not allowed in the field 'Title'.");
        return false;
    } else if (!(isNaN(stream))) {
        alert("Numbers are not allowed in the field 'Stream'.");
        return false;
    } else if (!(isNaN(type))) {
        alert("Numbers are not allowed in the field 'Type'.");
        return false;
    } else if (startDate == "") {
        alert("Please enter Start Date");
        return false;
    } else if (endDate == "") {
        alert("Please enter End Date");
        return false;
    } else if (startDate >= endDate) {
        alert("The start date must be before the end date.");
        return false;
    } else {
        return true;
    }
}

function validateAssignment() {
    var title = document.getElementById("titleAssignment").value;
    var description = document.getElementById("description").value;
    var subDateTime = document.getElementById("subDateTime").value;

    if (title === "") {
        alert("Please enter Assignment's Title.");
        return false;
    } else if (description === "") {
        alert("Please enter Assignment's Description.");
        return false;
    } else if (subDateTime == "") {
        alert("Please enter Assignment's Submission Date/Time.");
        return false;
    } else if (!(isNaN(title))) {
        alert("Numbers are not allowed in the field 'Title'.");
        return false;
    } else if (!(isNaN(description))) {
        alert("Numbers are not allowed in the field 'Description'.");
        return false;
    } else {
        return true;
    }
}

function confirmation() {
    if (confirm("Are you sure you want to submit:")) {
        alert("Thank you! The form was submitted successfully \!");
    } else {
        alert("Submit cancelled!");
    }
}


