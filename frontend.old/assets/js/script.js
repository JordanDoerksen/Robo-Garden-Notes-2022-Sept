document.addEventListener('DOMContentLoaded', ()=>{

    document.getElementById('js-rgb-to-hex-calc').style.display = "block";

    document.getElementById('convert-to-hex').addEventListener('click', () => {
        let redHex = parseInt(document.getElementById('red-input').value).toString(16);
        let greenHex = parseInt(document.getElementById('green-input').value).toString(16)
        let blueHex = parseInt(document.getElementById('blue-input').value).toString(16);

        let hexColour = "#" + (redHex.length == 1 ? '0' + redHex : redHex) + (greenHex.length == 1 ? '0' + greenHex : greenHex) + (blueHex.length == 1 ? '0' + blueHex : blueHex);
    
        hexColour = hexColour.toUpperCase();

        document.getElementById('hex-output').value = hexColour;
        document.getElementById('color-output-example').style.backgroundColor = hexColour;
    });

});