document.addEventListener('DOMContentLoaded', (event) => {
    (function() {

    (function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
        for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);
        mixpanel.init("7d7d21dd4ea84a7c89e129dfec7b0917");
        

    // Add this at the beginning of your script
    const googleFontLink = `
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
        <style>
            #charity-popup * {
                font-family: 'Open Sans', sans-serif !important;
            }
        </style>
    `;

    document.head.insertAdjacentHTML('beforeend', googleFontLink);
    
        // div för alert    
    const alertHTML = `
    <div id="custom-alert" style="position: fixed; top: 5%; left: 50%; transform: translate(-50%, -50%); background-color: #009D7E; color: white; padding: 20px; min-width: 230px; border-radius: 10px; display: none; opacity: 0; transition: opacity 0.5s; z-index: 1040; font-family: 'Open Sans', sans-serif; text-align:center; ">
        Swish-nummer kopierat 👍
    </div>`;

    // Styling för mobil
    const mobileStyles = `
    <style>
        @media (max-width: 600px) {
            #charity-popup {
                width: 90%;
                padding: 1REM;
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

    // div för widget
    const widgetHTML = `
        <div id="charity-widget" style="position: fixed; bottom: 10px; left: 10px; z-index: 1000;">
            <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/656f871a524700e9457fe076_Widget2-01-1%20(1).gif" style="width: 130px; height: auto; cursor: pointer;">
        </div>
        <div id="charity-overlay" style="display:none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1001;">
            <div id="charity-popup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #10826c; max-width: 650px; padding: 30px; font-family: 'Open Sans', sans-serif !important; text-align: center; line-height: Normal !important; justify-content: center; border-radius: 10px; padding: 30px;">
                <span id="close-popup" style="position: absolute; top: 20px; right: 30px; cursor: pointer; color: white;">Stäng</span>
                <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/6565dfca12f98697371601ea_download-1.webp" id="mhlogo" style="width: 30%; display: block; margin-left: auto; margin-right: auto; margin-top: 0px; ">
                <h1 style="font-family: 'Open Sans', sans-serif !important; text-align: center; font-size: 31px; color: white;">Vi stödjer <br> Musikhjälpen 2023</h1>
                <p style="font-size: 19px; color: white; max-width: 550px; width: 100%; margin: auto;">Mat är en mänsklig rättighet. Trots det dör människor runtom i världen varje dag till följd av undernäring. Omkring var tionde människa vet inte när eller vad de kommer att äta nästa gång. Genom Musikhjälpen 2023 kan alla vara med och bidra till kampen mot hungern.</p>
                <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/656b7ff8d387405af14fe80f_swish-QR.webp" id="swishqr" style="width: 100%; max-width:200px; display: block; margin: auto; margin-top: 30px; border-radius: 10px;">
                <p style="font-size: 10px; font-style: italic; color: white; margin-top: 10px;">Radiohjälpens Swish</p>
                <div id="buttoncontainer" style="display: flex; justify-content: center; gap: 20px; margin-top: 30px;">
                <a href="#" id="copy-phone" style="display: inline-block; padding: 10px 20px; background-color: #009D7E; color: white; text-decoration: none; text-align: center; border-radius: 5px;">Kopiera swish-nummer</a>
                <a href="https://bossan.musikhjalpen.se/" target="blank" id="second-button" style="display: inline-block; padding: 10px 20px; background-color: #009D7E; color: white; text-decoration: none; text-align: center; border-radius: 5px;">Donera via webben</a>
            </div>
            <a href="https://www.gofantastic.org/posts/musikhjalpen-2023-widget" target="_blank" style="position: fixed; bottom: 10px; left: 50%; transform: translateX(-50%); color: white; font-size: 10px; font-style: italic; text-decoration: none; z-index: 1002;">Lägg till widgeten på er webb 👋</a>
        </div>`;
        

        document.body.insertAdjacentHTML('beforeend', widgetHTML);
        document.body.insertAdjacentHTML('beforeend', alertHTML);

        mixpanel.track("Widget Loaded");

    
        document.getElementById("charity-widget").addEventListener("click", function() {
            document.getElementById("charity-overlay").style.display = "block";
            mixpanel.track("Widget Opened");
        });

        // Kopiera swish-nummer
        document.getElementById("copy-phone").addEventListener("click", function(event) {
            mixpanel.track("Swish Number Copied");
            event.preventDefault();
            const el = document.createElement('textarea');
            el.value = '9019506';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            showAlert();
        });

        // Alert, timer och stäng popup
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
        
        // Stäng popup
        document.getElementById("close-popup").addEventListener("click", function() {
            document.getElementById("charity-overlay").style.display = "none";
        });

        document.getElementById("second-button").addEventListener("click", function() {
            mixpanel.track("Donate via Web Clicked");
        });
        
    
        // Stäng popup vid klick utanför
        document.getElementById("charity-overlay").addEventListener("click", function(event) {
            if (event.target === this) {
                this.style.display = "none";
            }
        });
        
    })();
});


