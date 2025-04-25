        window.addEventListener("load", (event) => {
            function inFrame() {
                try {
                    return window.self !== window.top;
                } catch (e) {
                    return true;
                }
            }

            function botBrowser() {
                try {
                    return navigator.webdriver;
                } catch (e) {
                    return true;
                }
            }

            function loadGoogleAdsense() {
                // Pemuatan skrip Google AdSense
                var f = document.getElementsByTagName("script")[0];
                var j = document.createElement("script");
                j.async = true;
                j.crossorigin = "anonymous";
                j.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2099527226514558";
                f.parentNode.insertBefore(j, f);

                // Menampilkan iklan setelah skrip dimuat
                j.onload = function() {
                    // Menyisipkan elemen <ins> untuk iklan setelah skrip dimuat
                    var adContainer = document.createElement("div"); // Membuat elemen <div> untuk membungkus iklan
                    adContainer.innerHTML = `
                        <ins class="adsbygoogle"
                             style="display:block"
                             data-ad-client="ca-pub-2099527226514558"
                             data-ad-slot="5952128850"
                             data-ad-format="auto"
                             data-full-width-responsive="true"></ins>
                    `;
                    document.body.appendChild(adContainer); // Menambahkan elemen ke body halaman

                    // Meminta iklan untuk dimuat
                    (adsbygoogle = window.adsbygoogle || []).push({});
                };
            }

            if (botBrowser()) {
                console.log('Bot Browser');
            } else {
                console.log('Human Browser');
                if (window.location.href.indexOf("/nowgame.github.io") > -1) {
                    if (inFrame()) {
                        console.log("Adsense Skip! Frame!");
                    } else if (window.location.href.indexOf(".html") == -1) {
                        console.log("Adsense Skip! Home Page!");
                    } else if (window.location.href.indexOf("-unblockedz.html") > -1) {
                        console.log("Adsense Skip! DMCA!");
                    } else {
                        console.log("Adsense Served!");
                        loadGoogleAdsense(); // Memuat iklan AdSense
                    }
                } else {
                    console.log("Adsense Skip! Not Games235!");
                }
            }
        });