function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');
    

    const img = document.querySelector('#profile img');

    if (html.classList.contains('light')){

        img.setAttribute('src', './imagens minhas/AvatarselfieCeu.png');

    } else {
        img.setAttribute('src', './imagens minhas/Avatarfotonoespelho.png');
    }




    /*
      {
        html.classList.remove('light');
    } else {
        html.classList.add('light');
    }
    */

    
}
