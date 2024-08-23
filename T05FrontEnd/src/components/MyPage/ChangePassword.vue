<template>
    <div class="ChangePassword-Wrapper">
        <div class="changePassword-line" style="margin: 60px 0px">
            > 현재 비밀번호
            <input/>
        </div>
        <div class="changePassword-line">
            > 새 비밀번호
            <input/>
        </div>
        <div class="changePassword-line" style="margin-bottom: 50px">
            > 새 비밀번호 확인
            <input/>
        </div>

        <button class="changePassword-button">
            비밀번호 변경하기
        </button>

        <div style="background-color: lightgray; height: 48px; width: 100%; text-align: center;">
            회원님의 개인정보를 안전하게 보호하기 위해 3개월마다 비밀번호 변경을 권장하고 있습니다.
        </div>
    </div>
</template>
<script>
export default {
    name:'ChangePasswordComponent'
}
</script>
<style>
    .ChangePassword-Wrapper{
        font-size:24px;
        display: flex;
        flex-direction: column;
        gap:20px;
        justify-content: center;
        align-items: center;
        border: solid lightgray 1px;
    }

    .changePassword-line{
        display: flex;
        justify-content: space-between;
        width: 50%;
    }

    .changePassword-button{
        background-color: #1264af;
        color: white;
        border-radius: 3px;
        font-size: 30px;
        font-weight: 600;
        padding: 1% 10%;
    }

    input{
        border: solid black 1px;
        height: 30px;
        width: 300px;
        padding: 4px;
    }
</style>

