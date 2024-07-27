//top読み込み時にロゴ表示
$(function () {
  setTimeout(function () {
    $('.startLogo p').fadeIn(1600);
  }, 500); //0.5秒後にロゴをフェードイン
  setTimeout(function () {
    $('.startLogo').fadeOut(500);
  }, 2500); //2.5秒後にロゴフェードアウト
});

// ヘッダー固定
document.addEventListener('scroll', function () {
  //const scrollY = window.pageYOffset;
  let scrolled = window.scrollY;
  if (scrolled > 0) {
    document.getElementById('header').classList.add('active');
  } else {
    document.getElementById('header').classList.remove('active');
  }
});

// キービジュアルスライドショー
$(document).ready(function () {
  setTimeout(function () {//2.5秒後から始める
    $("#kyeVisual").slick({
      arrows: false, //矢印非表示
      dots: false, //下に点を表示
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 800,
      fade: true,
      cssEase: 'linear',
    });
  }, 2500);
});

// スポット　ふわっと出てくる
const targetElement = document.querySelectorAll('.spot');
document.addEventListener('scroll', function () {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .3
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add('show');
    }
  }
});

// ハンバーガーメニュー
const ham = document.querySelector('#trigger');
const nav = document.querySelector('nav');

ham.addEventListener('click', function () {
  ham.classList.toggle('open');
  nav.classList.toggle('open');
});