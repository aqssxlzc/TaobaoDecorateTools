//var iframe = document.createElement("iframe");
//iframe.setAttribute("src", "http://sohu.com");
//iframe.setAttribute("style", "border:none; width:240px; height:600px;position: fixed;_position: absolute;top: 0;right: 0;");
//iframe.setAttribute("scrolling", "no");
//iframe.setAttribute("frameborder", "0");
//document.body.appendChild(iframe);


var iframe = document.createElement("iframe");    


iframe.setAttribute("src", chrome.extension.getURL("panel.html"));
iframe.setAttribute("style", "border:none; width:240px; height:600px;position: fixed;_position: absolute;top: 0;right: 0;");
iframe.setAttribute("scrolling", "no");
iframe.setAttribute("frameborder", "0");
document.body.appendChild(iframe);