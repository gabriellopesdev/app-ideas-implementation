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
    var selected = document.getElementsByClassName("selected")
    while (selected.length)
        selected[0].classList.remove('selected')    
    document.getElementById('id').textContent = ''   
    document.getElementById('name').textContent = ''    
    document.getElementById('phone').textContent = ''    
    document.getElementById('email').textContent = ''       
}

function handleData(id) {
    clearData()
    document.getElementById(id).classList.add('selected')
    var elementId = document.getElementById('id')   
    var elementName = document.getElementById('name') 
    var elementPhone = document.getElementById('phone') 
    var elementEmail = document.getElementById('email') 
    
    personDataSet.map(function(item) {
        if (item.id == id) {
            elementId.textContent = item.id
            elementName.textContent = item.name
            elementPhone.textContent = item.phone
            elementEmail.textContent =  item.email
        }
    })
}