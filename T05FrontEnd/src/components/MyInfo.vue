<template>
    <div class="MyInfo-wrapper">
        <div class="MyInfo-line">
            <span style="font-size:36px; font-weight:700;">정예빈</span> <span>님</span> 
            
            <button class="change-button" style="left: 50px;">
                개명신청
            </button>
        </div>
        <div>
            아이디: unique-yebin
        </div>
        <div class="MyInfo-line">
            휴대폰 번호: 010-1234-5678
            <button class="change-button" style="position:absolute; left: 70%;">
                휴대폰번호 변경
            </button>
        </div>
        <div class="MyInfo-line">
            이메일: unique_yebin@gmail.com
            <button class="change-button" style="position:absolute; left: 70%;">
                이메일 변경
            </button>
        </div>
        <div class="MyInfo-line">
            주소지: 대전광역시 중구 충무로 123
            <button class="change-button" style="position:absolute; left: 70%;">
                주소지 변경
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name:'MyInfoComponent'
}
</script>
<style>
    .MyInfo-wrapper{
        font-size:24px;
        display: flex;
        flex-direction: column;
        gap:20px;
    }
    .change-button{
        border-radius: 5px;
        border:solid black 1px;
        background-color: lightgray;
        padding:0.3%;
    }

    .MyInfo-line{
        position:relative
    }
</style>