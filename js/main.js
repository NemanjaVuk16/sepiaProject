// alert('Hello world!');
// console.log('Hello');
// komentar

// $('#id') id
// $('.klasa') klasa !!
// $('div') tag

var ime = 'Nemanja'; //String-text
var prezime='Vukovic';
var broj = 10;//number broj
var boolean = true;// true ili false
var niz =["macka", "pas", "degu"]; //niz
var objekat = {
    "ime":"Nemanja",
    "broj": 10
}

var saberi = ime + broj;
console.log(saberi);

var korisnik = ime + " " + prezime;
console.log(korisnik);


function izracunaj() {
    var a = 10;
    var b = 5;
    console.log(a + b);
}
izracunaj();

// //$('.banner-title').css('color', 'red');
// $('.banner-title').css({
//     'color': 'blue',
//     'position' : 'relative'
// });

// $('.banner-title').animate({
//     'font-size': 100
// },5000);

// //kada se stranica ucita sakrij Logo

// $('.logo').css({
//     'display':'none'
// });

var visina = $('.logo').css('height');
console.log('visina logo:' + visina );

var visina2 = $('.logo').height();
console.log('visina logo' + visina2);

// height();
// .outerHeight();
// .innerheight();

// width();
// .outerwidth();
// innerwidth();

var visinaBannera = $('.banner').css('height');
var sirinaBannera = $('.banner').css('width');
console.log('Visina banner-a je: ' + visinaBannera + ', a sirina: ' + sirinaBannera);

function dimenzijeElementa() {
    var visinaElementa = $('.banner').height();
    var sirinaElementa = $('.banner').width();
    var dimenzija = 'Sirina elementa je: ' + sirinaElementa + ',' + 'Visina elementa je:' + visinaElementa;
    console.log(dimenzija);
}
dimenzijeElementa();

var $banner = $('.banner');
$banner.slideDown();
// $banner.hide(3000, function() {
//     $banner.show(5000);
// });

// metode za sakrivanje i prikazivanje
// .hide();
// .show();
// .toggle();

// polako nestajanje i pojavljivanje
// .fadeOut();
// .fadeIn();
// .fadeToggle();- radi suprotno od trenutnog stanja

// .slideUp();
// .slideDown();
// .slideToggle();


// Prikazi toggle DUGME I OBOJ GA U CREVNO

// var $toggle = $('.toggle');
// $toggle.show()
// $toggle.css({
//     'background-color': 'red'
// });

// Davidovo resenje
// var $toggle = $('.toggle');
// $toggle.show().css('background-color','red').width(200);

// Dodavanje klasa tagovima
// $banner.addClass('test');
// $banner.removeClass('test');
// $banner.toggleClass('test');

// menu-item obrisati menu-arrow i obojati ga u zeleno

// $('.menu-item').removeClass('menu-item-arrow').css('color', 'green');

// KRETANJE KROZ DOM(Document Object Model)

// .parent();
// jedan nivo iznad
// .closest();
// penji se do targetovanog elementa
// .find();
// spusti se do targetovanog elementa
// .prev();
// idi do prethodnog odnosno iznad elementa
// .next();
// idi do sledeceg odnosno ispod elementa

// $('.menu-link').parent().parent().parent();
// $('.menu-link').closest('.menu');
// $('.menu').find('.menu-link');

// $('.menu-link').closest('.header').parent().find('.footer');

// od footer do footer-bottom-box 
// pa do liste i onda do  footer-bottom-list-link-dodati klasu active

// $('.footer').find('.footer-bottom-box').next().find('footer-bottom-list-link').addClass('active');

// // od bannera do footera
// $('.banner').parent().find('.footer');
// $('.banner').closest('body').find('.footer');
// $('.banner').next().next().next();


    // EVENT-ovi

//ready-proverava samo HTML
// $(document).ready('ready', function() {
//     console.log('Spremno!1');
// });

function eventitems() {
    //load-proverava celu stranicu
    $(window).on('load', function() { 
    console.log('loaded');
    });
    //aktivira se kada se stranica smanjuje i povecava
    $(window).on('resize', function() { 
    console.log('resized');
    });
    //scroll se koristi za ljepljenje elemenata - sticky header i slicno
    $(window).on('scroll', function() { 
    var scrollTopNumber= $(window).scrollTop();
    console.log('Scrolled: ' + scrollTopNumber);
    });
    //najcesci je klik event
    $('.btn').on('click', function() {
    console.log('Hello');
    });
    // bolje je koristiti css hover ali ako ne moze onda se koristi ovo resenje ali generalno ga treba izbegavati
    $('.menu-link').on('mouseover', function() {
    console.log('hover over');
    });

    $('.menu-link').on('mouseout', function() {
    console.log('hover out');
    });

    //moze da se koristi i mouseenter i mouseleave - vrlo slicno rade

    // reaguje na pomeranje misa i racuna nam tacne kordinate pointera u odnosu na X i Y osu
    $(window).on('mousemove', function(event) { 
    var pageX = event.pageX;
    var pageY = event.pageY;
    console.log('Koordinata X' + pageX);
    console.log('Koordinata Y' + pageY);
    });

}

// $('.menu-link').on('click', function() {
//     var thisLink = $(this);
//     $('.menu-link').css('color', 'red');
//     thisLink.css('color', 'green');
//     // $(this).css('color', 'green');
// });

// $('.menu-link').on('click', function() {
//     $(this).css('color', 'green');
// });

// $('.menu-link').on('click', function() {
//     if($(this).css('color')==='rgb(64, 64, 64)') && $(this).find('.btn').length) {
//         $(this).css('color', 'green');
//     }else {
//         $(this).css('color', 'red')
//     }
// });


function navigation(){
    var $navButton = $('.js-toggle');
    var $nav = $('.js-menu');
    var open = 'open';

    $navButton.on('click', function() {
        $nav.stop().slideToggle();
        $(this).toggleClass(open);
        
    });
}

function vezbe() {
    $('.menu-link').on('click', function() {
        // var discount='AKCIJA';
        var thisText = $(this).text();
        var $bannerTitle = $('.banner-title');
        // var text = $('.intro-title').text();
        // var text = $('.intro-item').html();
        // $bannerTitle.append(thistext);
        $bannerTitle.prepend(thisText);
        
    });
}

function stickyHeader() {
    var $header = $('.js-header');
    var stickyClass = 'header-sticky';
    $(window).on('scroll',function() {
        var top = $(this).scrollTop();
        if(top > 0) {
            $header.addClass(stickyClass);
        } else {
            $header.removeClass(stickyClass);
        }
    });
}

function slider() {
    $('.card-container').slick( {
        slidesToShow: 2
    });
}

function tabs() {
    var $tabButton = $('.tab-btn');
    var $tabContent = $('.tab-content');
    var tabActive = 'tab-active';
    var tabContentActive = 'tab-content-active';
    $tabButton.on('click', function() {
        var index = $(this).index();
        $tabButton.removeClass(tabActive);
        $(this).addClass(tabActive);
        $tabContent.removeClass(tabContentActive);
        $tabContent.eq(index).addClass(tabContentActive);
    });

}
function vezba1() {
    var $menuItem = $('.menu-item-arrow');
    var $section = $('.js-section');
    $menuItem.each(function(i) {
        $(this).addClass('data-index' + i);
    });
    $section.each(function(i) {
        $(this).addClass('data-index' + i);
    });
    
    $menuItem.on('click',function() {
        var index = $(this).attr('data-index');
        console.log(index);
        $('js-section[data-index="' + index + '"]').css('background-color', 'green');
    });
}

// for(var i = 0; i < $menu-$menuItem.length; i++) {
//     console.log('broj' + 1);
// }
//  .text( dodaje u DOM/u);
//  .html( dodaje u html kodu);
//  .append dodaj posle
//  .prepand dodaj pre
// $bannerTitle.html(thisText);
//  .remove();

navigation();
// vezbe();
stickyHeader();
slider();
tabs();