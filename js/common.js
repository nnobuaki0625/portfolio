// --------------------------------------------------- loading Animation

window.addEventListener('load', loading);

function loading() {
    setTimeout(function () {
        const loadingBg = document.querySelector('.loading_bg');
        loadingBg.classList.add('active');

        // エラー対策
        setTimeout(function(){
            if(!loadingBg.classList.contains(active)){
                loadingBg.classList.add('active');
            } 
        }, 5000)
    }, 1000);
}

window.addEventListener('load', loading2);

function loading2() {
    setTimeout(function () {
        const loadingBg2 = document.querySelector('.loading_bg');
        loadingBg2.classList.remove('loading_bg');
        loadingBg2.classList.remove('active');
    }, 2000);
}

window.addEventListener('load', loading3);

function loading3() {
    setTimeout(function () {
        const loadingBg2 = document.querySelector('.loaddd');
        loadingBg2.classList.add('active3');
    }, 2000);
}

// --------------------------------------------------- FIX loading Animation



// --------------------------------------------------- header Position Fixed




// 対象の要素を取得
const target1 = document.querySelector('.logoTop');
const targetLogo = document.querySelector('.targetLogo');
console.log(target1);


//　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
function observation(){
    // 要素の位置情報を取得
    const targetRect = target1.getBoundingClientRect();
    console.log(targetRect);

    // 画面内に入っているかどうかを判定
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
        // 画面内に入った場合、クラスを付与
        targetLogo.classList.remove('openLogo'); // yourClassNameは付与したいクラス名に置き換えてください
    } else {
        // 画面外に出た場合、クラスを除去
        targetLogo.classList.add('openLogo');
    }
};

// スクロールイベントを追加
window.addEventListener('scroll', observation);


// --------------------------------------------------- Fix header Position Fixed

// --------------------------------------------------- 最初の表示を非表示にする記述



// --------------------------------------------------- Fix最初の表示を非表示にする記述


