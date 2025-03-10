<template>
  <div id="fullpage">
    <!-- 첫 번째 섹션 -->
    <div class="section">
      <div class="mobileView">
        <div class="flex">
          <div class="profileLine">
            <div class="flex">
              <div id="profileBox">
                <svg
                  id="profileSvg"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#08BDBA"
                    d="M40.2,-70.4C51.3,-63.2,59,-50.8,66,-38.2C73.1,-25.7,79.5,-12.8,80.4,0.5C81.2,13.8,76.5,27.6,69.5,40.2C62.4,52.8,53,64.1,41,70.3C29.1,76.5,14.5,77.4,0.1,77.3C-14.4,77.3,-28.8,76.1,-40.9,70C-52.9,63.8,-62.5,52.7,-70.7,40.2C-78.9,27.7,-85.8,13.9,-84.9,0.5C-84,-12.8,-75.3,-25.7,-68,-39.8C-60.8,-53.9,-54.8,-69.2,-43.7,-76.4C-32.6,-83.6,-16.3,-82.7,-0.9,-81.2C14.5,-79.7,29.1,-77.6,40.2,-70.4Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <img id="profilePhoto" src="../assets/img/face.png" />
              </div>
            </div>

            <div class="profileBlock">
              <div id="block">
                <div id="profileName">
                  Hi,
                  <br />
                  I’m <span style="color: #08BDBA; font-weight: bold">Minu</span>,
                  <br />
                  a photographer.
                </div>
                <div id="subProfile"></div>
                <div class="flex">
                  <div class="buttonZip">
                    <a href="https://www.instagram.com/minu_0109__/">
                      <button id="insta">Instagram</button>
                    </a>
                    <a href="https://www.flickr.com/photos/202256188@N07/">
                      <button id="flickr">Flickr</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> <!-- profileLine 끝 -->
        </div> <!-- flex 끝 -->
      </div> <!-- mobileView 끝 -->
    </div> <!-- 첫 번째 섹션 끝 -->

    <!-- 두 번째 섹션 -->
    <div class="section">
      <div class="photoAlbum">
        <div class="flex">
          <div id="title"></div>
        </div>
        <div class="flex"></div>
      </div>
    </div> <!-- 두 번째 섹션 끝 -->
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";

let fullpageInstance = null;

onMounted(() => {
  document.body.style.overflow = "hidden";
  document.body.style.touchAction = "none";
  fullpageInstance = new fullpage("#fullpage", {
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true, // 네비게이션 추가 (옵션)
    
    
  });
});

onBeforeUnmount(() => {
  document.body.style.overflow = "auto";
  document.body.style.touchAction = "auto";
  if (fullpageInstance) {
    fullpageInstance.destroy("all"); // fullPage.js 해제
  }
});
</script>