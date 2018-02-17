function initSuperTable(attributes) {
    displayData(attributes['element'], attributes['data']);
    console.log(attributes['options']['firstColumn']);
}

function displayData(element, data) {
    for (var i in data) {
        var id = '<div class="cell">' + data[i].id + '</div>';
        var index = '<div class="cell">' + data[i].index + '</div>';
        var name = '<div class="cell">' + data[i].name + '</div>';
        var email = '<div class="cell">' + data[i].email + '</div>';
        var gender = '<div class="cell">' + data[i].gender + '</div>';
        var isActive = '<div class="cell">' + data[i].isActive + '</div>';
        var age = '<div class="cell">' + data[i].age + '</div>';
        var eyeColor = '<div class="cell">' + data[i].eyeColor + '</div>';
        var company = '<div class="cell">' + data[i].company + '</div>';
        var phone = '<div class="cell">' + data[i].phone + '</div>';
        var address = '<div class="cell">' + data[i].address + '</div>';
        var registered = '<div class="cell">' + data[i].registered + '</div>';
        element.innerHTML += '<div class="row">' + id + index + name + email + gender + isActive + age + eyeColor + company + phone + address + registered + '</div>';
    }
}