document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('DaButton');
    button.addEventListener('click', () => {
        document.getElementById('VidsDiv').style.visibility = "visible";
        document.getElementById('VidsDiv').style.zIndex = "1";
        document.getElementById('DaButtonsDiv').remove;
        document.getElementById('DaButton').remove;
    });
});