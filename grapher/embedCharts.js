
        window.App = {};
        window.Global = { rootUrl: 'https://test-grapher.netlify.com/grapher' };

        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = 'https://test-grapher.netlify.com/grapher/assets/commons.css?v=commons.bundle.90c169ad51ecf04c4835.css';
        document.head.appendChild(link);

        var hasPolyfill = false;
        var hasGrapher = false;

        var loadedScripts = 0;
        function checkReady() {
            if (loadedScripts == 3) {
                window.Grapher.embedAll();
            }
        }

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = checkReady;
        script.src = "https://cdn.polyfill.io/v2/polyfill.min.js?features=es6,fetch"
        document.head.appendChild(script);

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = checkReady;
        script.src = 'https://test-grapher.netlify.com/grapher/assets/commons.js';
        document.head.appendChild(script);

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = checkReady;
        script.src = 'https://test-grapher.netlify.com/grapher/assets/charts.js?v=charts.bundle.dcf65b68eddaba4c6a58.js';
        document.head.appendChild(script);
    