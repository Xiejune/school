console.log('檔案讀取')
// 1. 
// 點擊 icon(向下), 展開子層選單
// 抓取 icon(向下)
const iconDrwn = document.querySelectorAll('#menu > li > p i')
// 點擊選單項目, 展開子層選單
// 抓取 p 元素
const ps = document.querySelectorAll('#menu > li > p')
// 抓取 第一層選單 li
const li_first = document.querySelectorAll('#menu > li')
for (const i in ps) {
  ps[i].onclick = () => {
    if (ps[i].firstElementChild.className.includes('fa-angle-down')) {
      // 清除所有已打開的清單(.open)
      for (const li of li_first) {
        li.classList.remove('open')
      }
      // 重置所有 icon 為向下
      for (const icon of iconDrwn) {
        icon.classList.replace('fa-angle-up', 'fa-angle-down')
      }
      // 從新設定在點擊的對應選單 li
      ps[i].parentElement.classList.add('open')
      // 改變 icon(向上)
      ps[i].firstElementChild.classList.replace('fa-angle-down', 'fa-angle-up')
      // 增加轉場特效
      if (ps[i].firstElementChild.className.includes('animate__rotateOut_new')) {
        ps[i].firstElementChild.classList.replace('animate__rotateOut_new', 'animate__rotateIn')
      } else {
        ps[i].firstElementChild.classList.add('animate__rotateIn')
      }
    } else {
      // 移除點擊的對應選單 li (.open)
      ps[i].parentElement.classList.remove('open')
      // 改變 icon(向下)
      ps[i].firstElementChild.classList.replace('fa-angle-up', 'fa-angle-down')
      // 增加轉場特效
      ps[i].firstElementChild.classList.replace('animate__rotateIn', 'animate__rotateOut_new')
    }
  }
}

// 2. 
// 點擊漢堡清單
const btn_hamburger = document.querySelector('#btn-hamburger')
// 清單
const menu = document.querySelector('#menu')
btn_hamburger.onclick = () => {
  if (btn_hamburger.firstElementChild.className.includes('fa-bars')) {
    // 展開清單
    menu.classList.add('expand')
    // 轉換 icon (關閉)
    btn_hamburger.firstElementChild.classList.replace('fa-bars', 'fa-xmark')
    // 增加轉場特效
    if (btn_hamburger.firstElementChild.className.includes('animate__flipInX_new')) {
      btn_hamburger.firstElementChild.classList.replace('animate__flipInX_new', 'animate__flipInX')
    } else {
      btn_hamburger.firstElementChild.classList.add('animate__flipInX')
    }
  } else {
    // 關閉清單
    menu.classList.remove('expand')
    // 轉換 icon (清單)
    btn_hamburger.firstElementChild.classList.replace('fa-xmark', 'fa-bars')
    // 增加轉場特效
    btn_hamburger.firstElementChild.classList.replace('animate__flipInX', 'animate__flipInX_new')
    // 移除點擊選單 li (.open)
    for (const li of li_first) {
      li.classList.remove('open')
    }
    for (const icon of iconDrwn) {
      // 改變 icon(向下)
      icon.classList.replace('fa-angle-up', 'fa-angle-down')
      // 增加轉場特效
      icon.classList.replace('animate__rotateIn', 'animate__rotateOut_new')
    }
  }
}

// 3. 
// 點擊子層選單項目
// 抓取子層選單 a 元素
const a_second = document.querySelectorAll('#menu > li li a')
for (const i in a_second) {
  a_second[i].onclick = () => {
    // 清除所有 .active
    for (const li of li_first) {
      li.classList.remove('active')
    }
    // 重新設定對應的 li 元素
    a_second[i].parentElement.parentElement.parentElement.classList.add('active')
    // 關閉清單
    menu.classList.remove('expand')
    // 轉換 icon (清單)
    btn_hamburger.firstElementChild.classList.replace('fa-xmark', 'fa-bars')
    // 增加轉場特效
    btn_hamburger.firstElementChild.classList.replace('animate__flipInX', 'animate__flipInX_new')
    // 移除點擊選單 li (.open)
    for (const li of li_first) {
      li.classList.remove('open')
    }
    for (const icon of iconDrwn) {
      // 改變 icon(向下)
      icon.classList.replace('fa-angle-up', 'fa-angle-down')
      // 增加轉場特效
      icon.classList.replace('animate__rotateIn', 'animate__rotateOut_new')
    }
  }
}

// 4.
// 在螢幕尺寸 1200px (包含) 以上, 在滑鼠移過選單項目, 子層下拉選單打開
for (const i in li_first) {
  li_first[i].onmouseenter = () => {
    if (window.innerWidth >= 1200) {
      // 只能一個 .hover 存在, 所以先清空
      for (const li of li_first) {
        li.classList.remove('hover')
        // 清空轉場特效時間
        li.lastElementChild.style.transition = 'none'
      }
      li_first[i].classList.add('hover')
      // 增加轉場特效時間 1s
      li_first[i].lastElementChild.style.transition = '1s'
    }
  }
}
// 在螢幕尺寸 1200px (包含) 以上, 在滑鼠移開選單項目, 子層下拉選單幾秒後消失
for (const i in li_first) {
  li_first[i].onmouseleave = () => {
    // 螢幕尺寸大於 1200 才會作用
    if (window.innerWidth >= 1200) {
      li_first[i].classList.remove('hover')
    }
  }
}

// 指令: 1
// 輪播圖1
// 移到輪播圖的按鈕增加轉場特效
// 抓到輪播圖的 .button 元素
const swiper1_button = document.querySelectorAll('#swiper1 .content .button')
for (const i in swiper1_button) {
  swiper1_button[i].onmouseenter = () => {
    swiper1_button[i].firstElementChild.firstElementChild.classList.add('animate__slideInUp')
    swiper1_button[i].firstElementChild.firstElementChild.classList.add('hover')
    swiper1_button[i].firstElementChild.classList.add('hover-border')
  }
}
for (const i in swiper1_button) {
  swiper1_button[i].onmouseleave = () => {
    swiper1_button[i].firstElementChild.firstElementChild.classList.remove('animate__slideInUp')
    swiper1_button[i].firstElementChild.firstElementChild.classList.remove('hover')
    swiper1_button[i].firstElementChild.classList.remove('hover-border')
  }
}

// 指令: 2
// 關於
// 移到關於的按鈕增加轉場特效
// 抓到關於的 .button 元素
const about1_button = document.querySelectorAll('#about .col .button')
for (const i in about1_button) {
  about1_button[i].onmouseenter = () => {
    about1_button[i].firstElementChild.firstElementChild.classList.add('animate__slideInUp')
    about1_button[i].firstElementChild.firstElementChild.classList.add('hover')
    about1_button[i].firstElementChild.classList.add('hover-border')
  }
}
for (const i in about1_button) {
  about1_button[i].onmouseleave = () => {
    about1_button[i].firstElementChild.firstElementChild.classList.remove('animate__slideInUp')
    about1_button[i].firstElementChild.firstElementChild.classList.remove('hover')
    about1_button[i].firstElementChild.classList.remove('hover-border')
  }
}

// 
const input_conect = document.querySelectorAll('#main_conect .main2 input')
for (const i in input_conect) {
  input_conect[i].onclick = (event) => {
    // 停止事件冒泡
    event.stopPropagation()
    for (const input of input_conect) {
      input.parentElement.classList.remove('lookp')
      input.placeholder = input.previousElementSibling.innerText
    }
    for (const input of textarea_conect) {
      input.parentElement.classList.remove('lookp')
      input.placeholder = input.previousElementSibling.innerText
    }
    input_conect[i].parentElement.classList.add('lookp')
    input_conect[i].placeholder = ""
  }
}

// 
const textarea_conect = document.querySelectorAll('#main_conect .main2 textarea')
for (const i in textarea_conect) {
  textarea_conect[i].onclick = (event) => {
    // 停止事件冒泡
    event.stopPropagation()
    for (const input of input_conect) {
      input.parentElement.classList.remove('lookp')
      input.placeholder = input.previousElementSibling.innerText
    }
    for (const input of textarea_conect) {
      input.parentElement.classList.remove('lookp')
      input.placeholder = input.previousElementSibling.innerText
    }
    textarea_conect[i].parentElement.classList.add('lookp')
    textarea_conect[i].placeholder = ""
  }
}

// 4. 點擊螢幕也可關閉子層下拉選單和恢復 icon 變回向下
document.onclick = () => {
  for (const input of input_conect) {
    input.parentElement.classList.remove('lookp')
    input.placeholder = input.previousElementSibling.innerText
  }
  for (const input of textarea_conect) {
    input.parentElement.classList.remove('lookp')
    input.placeholder = input.previousElementSibling.innerText
  }
}

// 6. 點擊搜尋按鈕
// 6. 點擊搜尋按鈕, #search 會展開 (.opensearch), icon 從搜尋變關閉
// 抓取搜尋按鈕
const btn_search = document.querySelector('#btn-search')
// 抓取搜尋清單
const search = document.querySelector('#search')
btn_search.onclick = () => {
  if (btn_search.firstElementChild.className.includes('fa-magnifying-glass')) {
    console.log('抓到')
    // 搜尋清單展開
    search.classList.add('openSearch')
    search.style.transition = '1s'
    // icon 轉換
    btn_search.firstElementChild.classList.replace('fa-magnifying-glass', 'fa-xmark')
    // 點擊時, 有動畫效果
    btn_search.classList.replace('animate__rotateIn1', 'animate__rotateIn')
  } else {
    // 搜尋清單收回
    search.classList.remove('openSearch')
    search.style.transition = 'none'
    // icon 轉換
    btn_search.firstElementChild.classList.replace('fa-xmark', 'fa-magnifying-glass')
    // 點擊時, 有動畫效果
    btn_search.classList.replace('animate__rotateIn', 'animate__rotateIn1')
  }
}

// 指令: 2
// 關於
// 移到關於的按鈕增加轉場特效
// 抓到關於的 .button 元素
const connect_button = document.querySelector('#conect_main #special_button .button')
connect_button.onmouseenter = () => {
  connect_button.firstElementChild.classList.add('animate__slideInUp')
  connect_button.firstElementChild.classList.add('hover')
  connect_button.classList.add('hover-border')
}

connect_button.onmouseleave = () => {
  connect_button.firstElementChild.classList.remove('animate__slideInUp')
  connect_button.firstElementChild.classList.remove('hover')
  connect_button.classList.remove('hover-border')
}