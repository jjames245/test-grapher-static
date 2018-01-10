
        window.App = {};
        window.Global = { rootUrl: '/grapher' };

        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = '/grapher/assets/charts.bundle.4655b6e01b60e75109bb.css';
        document.head.appendChild(link);

        var hasPolyfill = false;
        var hasGrapher = false;

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = function() {
            hasPolyfill = true;
            if (hasGrapher)
                window.Grapher.embedAll();
        }
        script.src = "https://cdn.polyfill.io/v2/polyfill.min.js?features=es6,fetch"
        document.head.appendChild(script);

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = function() {
            hasGrapher = true;
            if (hasPolyfill)
                window.Grapher.embedAll();
        }
        script.src = '/grapher/assets/charts.bundle.4655b6e01b60e75109bb.js';
        document.head.appendChild(script);
    