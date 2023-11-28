(function() {
    // Inject the Google Fonts link into the head of the HTML
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

(function() {
    const widgetHTML = `
        <div id="charity-widget" style="position: fixed; bottom: 10px; left: 10px; z-index: 1000;">
            <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/5df520e1b0ebe722d03f9f82_dios_logo_cmyk_vit.png" style="width: 100px; height: 100px; cursor: pointer;">
        </div>
        <div id="charity-overlay" style="display:none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1001;">
            <div id="charity-popup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; max-width: 600px; padding: 20px; font-family: 'Open Sans', sans-serif;">
                <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/6565dfca12f98697371601ea_download-1.webp">
                <h1>Musikhjälpen 2023</h1>
                <p>Mat är en mänsklig rättighet. Trots det dör människor runtom i världen varje dag till följd av undernäring. Omkring var tionde människa vet inte när eller vad de kommer att äta nästa gång. Genom Musikhjälpen 2023 kan alla vara med och bidra till kampen mot hungern.

                Den värsta hungerkrisen i modern tid
                För många i Sverige är hunger när magen kurrar innan en sen lunch eller dåligt humör när blodsockret sjunkit. För de miljontals människor som lever där hungern är akut handlar det om att överleva dagen. Upp till 783 miljoner människor är drabbade av hunger och över 40 miljoner lever på gränsen till svält.
                
                Nästan hälften av alla dödsfall bland barn under fem år beror på undernäring. Skolbänkar står tomma för att elever är för hungriga för att gå till skolan och bönder ser hur extremväder förstör skörd efter skörd.</p>
                <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/6565dfcda76b3dab582286a1_8889ca0e-5755-4e72-8c78-f4dbbafa535b.png">
                <a href="#" id="copy-phone">Kopiera swish-nummer</a>
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
    });
})();