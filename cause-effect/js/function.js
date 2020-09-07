function createList() {
    var element = document.getElementById('list')   
    personDataSet.map(function(item) {
        var newItemList = document.createElement("li")
        newItemList.textContent = item.name
        newItemList.setAttribute('id', item.id)
        newItemList.onclick = function(event) { 
                                handleData(item.id) 
                            } 
        element.appendChild(newItemList)
    })    
}

function clearData() {
    var elementId = document.getElementById('id')   
    var elementName = document.getElementById('name') 
    var elementPhone = document.getElementById('phone') 
    var elementEmail = document.getElementById('email')
    elementId.textContent = ''
    elementName.textContent = ''
    elementPhone.textContent = ''
    elementEmail.textContent = ''
}

function handleData(id) {
    clearData()
    
    var elementId = document.getElementById('id')   
    var elementName = document.getElementById('name') 
    var elementPhone = document.getElementById('phone') 
    var elementEmail = document.getElementById('email') 
    
    personDataSet.map(function(item) {
        if (item.id == id) {
            elementId.textContent = item.id
            elementName.textContent = item.name
            elementPhone.textContent = item.phone
            elementEmail.textContent = item.email 
        }
    })
}