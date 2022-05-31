const openMenuButton = document.querySelector('.header__menu');
const popupMenu = document.querySelector('.popup');
const popupCloseButton = popupMenu.querySelector('.popup__close');

function addPopup() {
    popupMenu.classList.add('popup_is_open');
}

function removePopup() {
    popupMenu.classList.remove('popup_is_open');
    console.log("aa")
}

jQuery(".popup__link").click(removePopup);



openMenuButton.addEventListener('click',addPopup);
popupCloseButton.addEventListener('click',removePopup);



jQuery(document).ready(function() {
jQuery("a.scrollto").click(function () {
elementClick = jQuery(this).attr("href")
destination = jQuery(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
return false;
});
});

