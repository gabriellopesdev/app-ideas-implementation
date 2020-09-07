var red
var blue
var green
var incrementsRed
var incrementsBlue
var incrementsGreen
var interval
var timeCycle

const COLOR_MAX_VALUE = 250
const COLOR_MIN_VALUE = 25

function setColor(hexValue) {
    document.documentElement.style.setProperty('--initial-color', '#' + hexValue);
}

function finalColor() {
    return red + blue + green
}

function processRedValue(incremental) {
    if (incrementsRed)  {
        red = (parseInt(red, 16) + parseInt(incremental)).toString(16)
        if (parseInt(red, 16) >= COLOR_MAX_VALUE) incrementsRed = false
    }
    else {
        red = (parseInt(red, 16) + parseInt(incremental * -1)).toString(16)
        if (parseInt(red, 16) <= COLOR_MIN_VALUE) incrementsRed = true
    }
}

function processBlueValue(incremental) {
    if (incrementsBlue)  {
        blue = (parseInt(blue, 16) + parseInt(incremental)).toString(16)
        if (parseInt(blue, 16) >= COLOR_MAX_VALUE) incrementsBlue = false
    }
    else {
        blue = (parseInt(blue, 16) + parseInt(incremental * -1)).toString(16)
        if (parseInt(blue, 16) <= COLOR_MIN_VALUE) incrementsBlue = true
    }
}

function processGreenValue(incremental) {
    if (incrementsGreen)  {
        green = (parseInt(green, 16) + parseInt(incremental)).toString(16)
        if (parseInt(green, 16) >= COLOR_MAX_VALUE) incrementsGreen = false
    }
    else {
        green = (parseInt(green, 16) + parseInt(incremental * -1)).toString(16)
        if (parseInt(green, 16) <= COLOR_MIN_VALUE) incrementsGreen = true
    }
}

function updateColor (){
    const incrementalValue = document.getElementById('incrementValue').value    
    processRedValue(incrementalValue)
    processBlueValue(incrementalValue)
    processGreenValue(incrementalValue)
    setColor(finalColor())   
}

function startOrStop() {     
    
    if (interval) {
        clearInterval(interval)
        interval = false
        enableComponents() 
    }
    else {
        initializeColorComponent()
        disableComponents() 
        interval = setInterval(
            function () {
                updateColor()                
            }
            ,timeCycle)
    }
    document.getElementById('btnControll').textContent = (interval ? 'Stop' : 'Start')
    
}

function initializeColorComponent() {
    red = document.getElementById('red').value 
    blue = document.getElementById('blue').value 
    green = document.getElementById('green').value 
    timeCycle = document.getElementById('time').value * 1000 
    setColor(finalColor())   
}

function setInitialColor() {    
    incrementsRed = true
    document.getElementById('red').value = 'bf'
    document.getElementById('blue').value = '3a'
    document.getElementById('green').value = '2b'
    document.getElementById('time').value = '0.25'    
    document.getElementById('incrementValue').value = '10'
    initializeColorComponent()
}

function disableComponents() {
    document.getElementById('red').setAttribute('readonly', 'true')
    document.getElementById('blue').setAttribute('readonly', 'true')
    document.getElementById('green').setAttribute('readonly', 'true')
    document.getElementById('time').setAttribute('readonly', 'true')
    document.getElementById('incrementValue').setAttribute('readonly', 'true')
}

function enableComponents() {
    document.getElementById('red').removeAttribute('readonly')
    document.getElementById('blue').removeAttribute('readonly')
    document.getElementById('green').removeAttribute('readonly')
    document.getElementById('time').removeAttribute('readonly')
    document.getElementById('incrementValue').removeAttribute('readonly')
}

function getHexValueInput() {
    return  document.getElementById('red').value +
            document.getElementById('blue').value +
            document.getElementById('green').value
}
