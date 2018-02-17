function initSuperTable(attributes) {
    displayData(attributes['element'], attributes['data']);
    //rowHeight(attributes['options']['rowHeight']);
    rowMouseOver(attributes['options']['rowMouseOver']);
    rowStyle(attributes['options']['rowStyle']);
    //fixedHeader(attributes['options']['fixedHeader']);
}

function displayData(element, data, firstColumn) {
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

function rowHeight(height) {
    setTimeout(function () {
        var allRows = document.querySelectorAll('.row');
        for (var i in allRows) {
            allRows[i].style.height = height + 'px';
        }
    }, 100);
}

function rowMouseOver(bool) {
    if (typeof bool !== undefined) {
        if (bool === true) {
            var allRows = document.querySelectorAll('.row');
            for (var i in allRows) {
                allRows[i].className += ' hover-true';
            }
        }
    }
}

function rowStyle(type) {
    var allCells = document.querySelectorAll('.cell');
    var allRows = document.querySelectorAll('.row');
    if (type === 'line') {
        for (var i in allCells) {
            allCells[i].className += ' line';
        }
    } else if (type === 'zebra') {
        for (var l in allRows) {
            allRows[l].className += ' zebra';
        }
        for (var d in allCells) {
            allCells[d].className += ' line';
        }
    }
}