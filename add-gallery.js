for (let i = 1; i < 21; i++) {
    var imgrspn = document.createElement("div");
    imgrspn.classList.add("responsive");

    var imgdiv = document.createElement("div");
    imgdiv.classList.add("gallery");

    var imga = document.createElement("a");
    imga.target = "_blank";
    console.log(i.toString() + ".jpeg")
    imgrspn.id = i.toString();
    imgdiv.id = "div" + i.toString();
    imga.id = "a" + i.toString();
    imga.href = "gallery/" + i.toString() + ".jpeg";
    var img = document.createElement("img");
    img.alt = i;
    img.height = "400";
    img.width = "600";
    img.src = imga.href;
    document.body.appendChild(imgrspn);
    document.getElementById(i.toString()).appendChild(imgdiv);
    document.getElementById("div" + i.toString()).appendChild(imga);
    document.getElementById("a" + i.toString()).appendChild(img)
}