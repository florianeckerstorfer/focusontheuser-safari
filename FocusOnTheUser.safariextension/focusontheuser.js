(function () {
    if (window.__dbe) {
        return;
    }
    window.__dbe = true;
    /*if (document.body.childNodes.length === 0) {
        alert("Due to a bug in Google Chrome (issue #93199), this tool will not work " + "for searches conducted via Chrome's address bar. To fix the issue, do " + "any of the following:\n\n" + "* Search from www.google.com instead of from the address bar.\n\n" + "* Go to File -> New Tab, right click on the \"Google Search\" Chrome " + "app and click \"Remove from Chrome\". This will fix searches from the " + "address bar.\n\n" + "* Use another browser, such as Firefox.");
    }*/
    var anchor = document.getElementsByTagName('script')[0];
    var script = document.createElement('script');
    script.src = safari.extension.baseURI + 'script.js?' + (new Date().getTime());
    anchor.parentNode.insertBefore(script, anchor);
})();