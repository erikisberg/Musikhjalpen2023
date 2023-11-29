(function() {
    const widgetHTML = `
        <div id="charity-widget" style="position: fixed; bottom: 10px; left: 10px; z-index: 1000;">
            <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/6566f5a08416eed5e53cc30e_MH%20Stickers%20Vi%20stodjer%20-%20original%20(957673).png" style="width: 100px; height: 100px; cursor: pointer;">
        </div>
        <div id="charity-overlay" style="display:none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1001;">
            <div id="charity-popup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; max-width: 700px; padding: 20px; font-family: 'Open Sans', sans-serif; text-align: center;">
                <span id="close-popup" style="position: absolute; top: 10px; right: 10px; cursor: pointer;">Stäng</span>
                <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/6565dfca12f98697371601ea_download-1.webp" style="width: 50%; display: block; margin: auto;">
                <h1 style="text-align: center; font-size: 31px;">Vi stödjer Musikhjälpen 2023</h1>
                <p style="font-size: 13px;">Mat är en mänsklig rättighet. Trots det dör människor runtom i världen varje dag till följd av undernäring. Omkring var tionde människa vet inte när eller vad de kommer att äta nästa gång. Genom Musikhjälpen 2023 kan alla vara med och bidra till kampen mot hungern.</p>
                <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/6565dfcda76b3dab582286a1_8889ca0e-5755-4e72-8c78-f4dbbafa535b.png" style="max-width: 200px; display: block; margin: auto;"> 
                <a href="#" id="copy-phone" style="display: inline-block; padding: 10px 20px; background-color: black; color: white; text-decoration: none; text-align: center; border-radius: 5px; margin: 20px auto;">Kopiera swish-nummer</a>
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
        el.value = '+46768363183';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Swish-nummer kopierat! Klistra in och swisha!');
    });
})();