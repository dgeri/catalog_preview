var btnsFavorite = document.querySelectorAll('.add-to-fav');

btnsFavorite.forEach((btnFavorite) => {
    btnFavorite.addEventListener('click', () => btnFavorite.classList.toggle('favorite'))
})

var btnsAddToCart = document.querySelectorAll('.btn-buy');

btnsAddToCart.forEach((btnAddToCart) => {
    btnAddToCart.addEventListener('click', () => {
        btnAddToCart.classList.add('btn-buy-active')
        btnAddToCart.innerHTML = "В корзине"
    })
})

var btnsShowInfoBonus = document.querySelectorAll('.item-offer-bonus img');
var popupInfoBonus = document.querySelector('.offer-bonus-popup');
var popupOverlay = document.querySelector('.popup-overlay');
var btnClose = document.querySelector('.btn-close');

btnsShowInfoBonus.forEach((btnShowInfoBonus) => {
    btnShowInfoBonus.addEventListener('click', () => {
        popupInfoBonus.classList.toggle('hidden')
        popupOverlay.classList.toggle('hidden')
    })
})
popupOverlay.addEventListener('click', () => {
    popupInfoBonus.classList.toggle('hidden')
    popupOverlay.classList.toggle('hidden')
})
btnClose.addEventListener('click', () => {
    popupInfoBonus.classList.toggle('hidden')
    popupOverlay.classList.toggle('hidden')
})