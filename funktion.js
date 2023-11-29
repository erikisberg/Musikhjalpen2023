(function() {
    const widgetHTML = `
        <div id="charity-widget" style="position: fixed; bottom: 10px; left: 10px; z-index: 1000;">
            <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/6566f5a08416eed5e53cc30e_MH%20Stickers%20Vi%20stodjer%20-%20original%20(957673).png" style="width: 100px; height: 100px; cursor: pointer;">
        </div>
        <div id="charity-overlay" style="display:none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1001;">
            <div id="charity-popup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: transparent url('https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/656734d044fdc9f3c641c63a_background.webp') no-repeat center center; background-size: cover; max-width: 650px; min-height: 850px; padding: 3REM; padding-bottom: 4REM; font-family: 'Open Sans', sans-serif; text-align: center; justify-content: center;">
                <span id="close-popup" style="position: absolute; top: 10px; right: 10px; cursor: pointer; color: white;">Stäng</span>
                <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/6565dfca12f98697371601ea_download-1.webp" style="width: 50%; display: block; margin: auto;">
                <h1 style="text-align: center; font-size: 31px; color: white;">Vi stödjer <br> Musikhjälpen 2023</h1>
                <p style="font-size: 19px; color: white; max-width: 450px; margin: auto;">Mat är en mänsklig rättighet. Trots det dör människor runtom i världen varje dag till följd av undernäring. Omkring var tionde människa vet inte när eller vad de kommer att äta nästa gång. Genom Musikhjälpen 2023 kan alla vara med och bidra till kampen mot hungern.</p>
                <div style="display: flex; justify-content: center; gap: 20px; margin-top: 30px;">
                <a href="#" id="copy-phone" style="display: inline-block; padding: 10px 20px; background-color: #009D7E; color: white; text-decoration: none; text-align: center; border-radius: 5px;">Kopiera swish-nummer</a>
                <a href="https://bossan.musikhjalpen.se/" target="blank" id="second-button" style="display: inline-block; padding: 10px 20px; background-color: #009D7E; color: white; text-decoration: none; text-align: center; border-radius: 5px;">Donera via webben</a>
            </div>
        </div>`;
        

    document.body.insertAdjacentHTML('beforeend', widgetHTML);

    document.getElementById("charity-widget").addEventListener("click", function() {
        document.getElementById("charity-overlay").style.display = "block";
    });

    document.getElementById("close-popup").addEventListener("click", function() {
        document.getElementById("charity-overlay").style.display = "none";
    });

    document.getElementById("copy-phone").addEventListener("click", function(event) {
        event.preventDefault();
        const el = document.createElement('textarea');
        el.value = '+111';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Swish-nummer kopierat! Klistra in och swisha!');
    });

    document.getElementById("charity-overlay").addEventListener("click", function(event) {
        if (event.target === this) {
            this.style.display = "none";
        }
    });
})();