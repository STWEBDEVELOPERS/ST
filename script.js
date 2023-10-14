var tema = 'light'
var idioma = 'pt-br'

function menu() {
    var menu = document.getElementById('menu');
    if (menu.classList == 'menuini') {
        menu.classList.remove('menuini');
        menu.classList.add('menufim');
    }
    else {
        menu.classList.remove('menufim');
        menu.classList.add('menuini');
    }
}

function modo() {
    var partebaixa = document.getElementById('partebaixa');
    var modoicon = document.getElementById('modo');
    var background = document.getElementById('background');
    if (tema == 'light') {
        background.style.backgroundColor = '#333333';
        modoicon.src = 'images/modoclaro.png';
        partebaixa.style.backgroundColor = '#8B0000'
        tema = 'dark'
    }
    else {
        background.style.backgroundColor = '#FFFFFF';
        modoicon.src = 'images/modoescuro.png';
        partebaixa.style.backgroundColor = '#333333'
        tema = 'light'
    }
}

function nos() {
    var barranos = document.getElementById('nos');
    var fecharnos = document.getElementById('fecharnos');
    var desfoque = document.getElementById('desfoque');
    barranos.style.opacity = '1';
    barranos.style.pointerEvents = 'all';
    desfoque.style.opacity = '0.9';
    desfoque.style.pointerEvents = 'all';
    fecharnos.addEventListener('click', function(event) {
        barranos.style.opacity = '0';
        barranos.style.pointerEvents = 'none';
        desfoque.style.opacity = '0';
        desfoque.style.pointerEvents = 'none';

    })
    
}

function servico() {
    var barraserv = document.getElementById('serv');
    var fecharserv = document.getElementById('fecharserv');
    var desfoque = document.getElementById('desfoque');
    barraserv.style.opacity = '1';
    barraserv.style.pointerEvents = 'all';
    desfoque.style.opacity = '0.9';
    desfoque.style.pointerEvents = 'all';
    fecharserv.addEventListener('click', function(event) {
        barraserv.style.opacity = '0';
        barraserv.style.pointerEvents = 'none';
        desfoque.style.opacity = '0';
        desfoque.style.pointerEvents = 'none';
    })
}

function lingua() {
    var nostext = document.getElementById('nostext');
    var servtext = document.getElementById('servtext');
    var nos = document.getElementById('button1');
    var serv = document.getElementById('button2');
    if (idioma == 'pt-br') {
        nos.src = 'images/whoareyou.png'
        serv.src = 'images/ourservices.png'
        nostext.innerHTML = '<p><strong>We are a developer with a passion for turning ideas into digital solutions.<p>Our team is committed to providing software and website development services of exceptional quality</p><p>customized to meet the needs of our customers.</p></strong></p>'
        servtext.innerHTML = "<p><strong><p>We offer comprehensive software and website creation services, including custom application development and responsive websites. Our solutions are tailored to each project, keeping our clients at the forefront of technological trends.</p><p>If you're looking for partners to boost your digital presence, we're here to help.</p></strong></p>"
        idioma = 'en'
    }
    else {
        nos.src = 'images/quemsomosnos.png'
        serv.src = 'images/nossosserviços.png'
        nostext.innerHTML = '<p><strong>Somos uma desenvolvedora apaixonada por transformar ideias em soluções digitais. <p>Nossa equipe está comprometida em fornecer serviços de desenvolvimento de software e websites de qualidade excepcional</p><p>personalizados para atender às necessidades de nossos clientes.</p></strong></p>'
        servtext.innerHTML = '<p><strong>Oferecemos serviços abrangentes de criação de software e websites, incluindo desenvolvimento de aplicativos personalizados e sites responsivos. Nossas soluções são adaptadas a cada projeto, mantendo nossos clientes na vanguarda das tendências tecnológicas. Se você busca parceiros para impulsionar sua presença digital, estamos aqui para ajudar.</strong></p>'
        idioma = 'pt-br'
    }

}