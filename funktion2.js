// Mixpanel tracking
document.addEventListener('DOMContentLoaded', (event) => {
    mixpanel.init("7d7d21dd4ea84a7c89e129dfec7b0917");
    mixpanel.track('Widget Opened');
    mixpanel.track('Widget Added to Website');

    document.getElementById("copy-phone").addEventListener("click", function(event) {
        mixpanel.track('Button Pushed', { button: 'Copy Phone' });
    });

    document.getElementById("second-button").addEventListener("click", function(event) {
        mixpanel.track('Button Pushed', { button: 'Donera via webben' });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    (function() {

    const alertHTML = `
    <div id="custom-alert" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #009D7E; color: white; padding: 20px; min-width: 190px; border-radius: 5px; display: none; opacity: 0; transition: opacity 0.5s; z-index: 1040; font-family: 'Open Sans', sans-serif; text-align:center; ">
        Swish-nummer kopierat!
    </div>`;

    const mobileStyles = `
    <style>
        @media (max-width: 600px) {
            #charity-popup {
                width: 90%;
                padding: 1REM;
                max-height: 600px !important;
                border: 0px !important;
                border-radius: 0px !important;
            }
            #buttoncontainer {
                flex-direction: column;
            }
            #close-popup {
                padding-right: 1rem;
            }
            #swishqr {
                display: none !important;
            }
            #close-popup {
                position: absolute; 
                top: 10px; 
                right: 10px !important;
            }
            #mhlogo {
                width: 120px !important;
            }
        }
    </style>`;

    document.body.insertAdjacentHTML('beforeend', alertHTML);

    document.head.insertAdjacentHTML('beforeend', mobileStyles);

    const widgetHTML = `
        <div id="charity-widget" style="position: fixed; bottom: 10px; left: 10px; z-index: 1000;">
            <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/6569de8483f5f732d08ced6d_widgetgif1.gif" style="width: 100px; height: auto; cursor: pointer;">
        </div>
        <div id="charity-overlay" style="display:none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1001;">
            <div id="charity-popup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: transparent url('https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/656734d044fdc9f3c641c63a_background.webp') no-repeat center center; background-size: cover; max-width: 650px; padding: 30px; font-family: 'Open Sans', sans-serif; text-align: center; justify-content: center; border-radius: 10px; padding: 30px;">
                <span id="close-popup" style="position: absolute; top: 20px; right: 30px; cursor: pointer; color: white;">Stäng</span>
                <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/6565dfca12f98697371601ea_download-1.webp" id="mhlogo" style="width: 30%; display: block; margin-left: auto; margin-right: auto; margin-top: 0px; ">
                <h1 style="text-align: center; font-size: 31px; color: white;">Vi stödjer <br> Musikhjälpen 2023</h1>
                <p style="font-size: 19px; color: white; max-width: 550px; width: 100%; margin: auto;">Mat är en mänsklig rättighet. Trots det dör människor runtom i världen varje dag till följd av undernäring. Omkring var tionde människa vet inte när eller vad de kommer att äta nästa gång. Genom Musikhjälpen 2023 kan alla vara med och bidra till kampen mot hungern.</p>
                <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/6568ca8be53f17c76e8bbf45_swishqr.webp" id="swishqr" style="width: 100%; max-width:200px; display: block; margin: auto; margin-top: 30px;">
                <div id="buttoncontainer" style="display: flex; justify-content: center; gap: 20px; margin-top: 30px;">
                <a href="#" id="copy-phone" style="display: inline-block; padding: 10px 20px; background-color: #009D7E; color: white; text-decoration: none; text-align: center; border-radius: 5px;">Kopiera swish-nummer</a>
                <a href="https://bossan.musikhjalpen.se/" target="blank" id="second-button" style="display: inline-block; padding: 10px 20px; background-color: #009D7E; color: white; text-decoration: none; text-align: center; border-radius: 5px;">Donera via webben</a>
            </div>
        </div>`;
        

        document.body.insertAdjacentHTML('beforeend', widgetHTML);
        document.body.insertAdjacentHTML('beforeend', alertHTML);
    
        document.getElementById("charity-widget").addEventListener("click", function() {
            document.getElementById("charity-overlay").style.display = "block";
        });
    
        document.getElementById("copy-phone").addEventListener("click", function(event) {
            event.preventDefault();
            const el = document.createElement('textarea');
            el.value = '+111';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            showAlert();
        });
    
        function showAlert() {
            const alert = document.getElementById("custom-alert");
            alert.style.display = "block";
            setTimeout(function() {
                alert.style.opacity = "1";
            }, 0);

            setTimeout(function() {
                alert.style.opacity = "0";
            }, 2000);

            setTimeout(function() {
                alert.style.display = "none";
            }, 2200);
        }

        document.getElementById("close-popup").addEventListener("click", function() {
            document.getElementById("charity-overlay").style.display = "none";
        });
    
        document.getElementById("charity-overlay").addEventListener("click", function(event) {
            if (event.target === this) {
                this.style.display = "none";
            }
        });
        
    })();
});