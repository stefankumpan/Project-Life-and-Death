<template >
    <div class="cookie-box" v-if="CookiesAllowed !== 'true'">
        <h3>Cookie-Einstellungen </h3>
        <p>
            Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des
            Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an.
            Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem
            Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch
            wiederzuerkennen.
            Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von
            Cookies informiert und Sie dies nur im Einzelfall erlauben.
            Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
        </p>
        <div class="cookie-selection">
            <label for="necessary">
                <input type="checkbox" id="necessary" checked disabled value="Necessary">Notwendig
            </label>
            <label for="statistics">
                <input type="checkbox" id="statistics"  value="statistics">Statistiken
            </label>
            <label for="marketing">
                <input type="checkbox" id="marketing"  value="marketing">Marketing
            </label>
            <label for="externalMedia">
                <input type="checkbox" id="externalMedia"  value="externalMedia">Externe Medien
            </label>
        </div>
        <div class="cookie-buttons">
            <button @click="SaveCookieSettings">Auswahl Akzeptieren</button>
            <button @click="SaveCookieSettings">Alles Akzeptieren</button>
        </div>

    </div>
</template>

<script>
  export default {
    name: "Cookies",
    data() {
      return {
        CookiesAllowed: false,
      }
    },methods: {
      SaveCookieSettings() {
        this.setCookie("Cookies", 'true', 14)
      },
      setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        this.CookiesAllowed = 'true';
      },
      getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    }, created() {
      let isCookieAllowed = this.getCookie("Cookies");
      this.CookiesAllowed = isCookieAllowed;
      // console.log(this.CookiesAllowed);
    }
  }
</script>

