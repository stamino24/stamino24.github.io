let cookie_banner;

document.addEventListener("gsap_end", async () => {
    if (!("cookieStore" in window)) return;

    let cookie;
    try {
        cookie = await cookieStore.get("cookie_consent");
    } catch (e) {
        cookie = null;
    }

    if (!cookie || cookie.value !== "all") {
        showBanner();
    } else {
        showCookieIcon();
        loadAnalytics();
    }
});

function showBanner() {
    if (document.getElementById("cookie_banner")) return;

    cookie_banner = document.createElement("div");
    cookie_banner.id = "cookie_banner";

    cookie_banner.innerHTML = `
        <h3>Noi teniamo alla tua privacy</h3>
        <p>Accetti i cookie e i termini di servizio espressi nella nostro documento sulla <a href="${"informativa.html#cookie-policy"}">Cookie Policy</a> ?</p>
        <button id="accept_cookie">Accetto</button>
        <button id="deny_cookie">Non accetto</button>
    `;

    document.body.appendChild(cookie_banner);

    document.getElementById("accept_cookie").addEventListener("click", acceptCookies);
    document.getElementById("deny_cookie").addEventListener("click", denyCookies);
}

async function acceptCookies() {
    try {
        await cookieStore.set({
            name: "cookie_consent",
            value: "all",
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            path: "/",
            domain: ".stamino24.github.io"
        });
    } catch (e) {}

    if (cookie_banner) cookie_banner.remove();
    showCookieIcon();

    loadAnalytics();
}

async function denyCookies() {
    try {
        await cookieStore.set({
            name: "cookie_consent",
            value: "none",
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            path: "/",
            domain: ".stamino24.github.io"
        });
    } catch (e) {}

    if (cookie_banner) cookie_banner.remove();
}

function showCookieIcon() {
    if (document.getElementById("cookie_icon")) return;

    const icon = document.createElement("div");
    icon.id = "cookie_icon";
    icon.textContent = "🍪";

    icon.addEventListener("click", () => {
        if (cookie_banner) {
            cookie_banner.remove();
        }
        showBanner();
    });

    document.body.appendChild(icon);
}


function loadAnalytics() {
    if (window.gtagLoaded) return;
    window.gtagLoaded = true;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-BJEDLGKEGH";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };

    gtag('js', new Date());
    gtag('config', 'G-BJEDLGKEGH',{
        anonymize_ip: true
    });
}