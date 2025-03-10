<template>
    <div class="header">
        <div class="title" @click="$router.push('/home')">
            Mimimnu
        </div>
        <div class="headerRight">
            <div  class="titleSub" @click="$router.push('/photo')">
                풍경사진
            </div>    
            <div class="titleSub" @click="$router.push('/snap')">
                인물스냅
            </div>
            <div id="button" class="titleSub">
                문의하기
            </div>
        </div>
    </div>
    <hr>
</template>