function displayData(element) {
    for (var i in users) {
        var id = '<div class="cell">' + users[i].id + '</div>';
        var index = '<div class="cell">' + users[i].index + '</div>';
        var name = '<div class="cell">' + users[i].name + '</div>';
        var email = '<div class="cell">' + users[i].email + '</div>';
        var gender = '<div class="cell">' + users[i].gender + '</div>';
        var isActive = '<div class="cell">' + users[i].isActive + '</div>';
        var age = '<div class="cell">' + users[i].age + '</div>';
        var eyeColor = '<div class="cell">' + users[i].eyeColor + '</div>';
        var company = '<div class="cell">' + users[i].company + '</div>';
        var phone = '<div class="cell">' + users[i].phone + '</div>';
        var address = '<div class="cell">' + users[i].address + '</div>';
        var registered = '<div class="cell">' + users[i].registered + '</div>';
        element.innerHTML += '<div class="row">' + id + index + name + email + gender + isActive + age + eyeColor + company + phone + address + registered + '</div>';
    }
}

function initSuperTable(attributes) {
    for (var i in attributes) {
        displayData(attributes['element']);
    }
}