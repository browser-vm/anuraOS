let glxgears = AliceWM.create("python")

let iframe = document.createElement("iframe")
iframe.style = "top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0;"
iframe.setAttribute("src", "python.app/python.html")

glxgears.content.appendChild(iframe)


