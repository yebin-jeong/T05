<template>
    <div class="ScrappedNotice-Wrapper">
        <ul >
            <li>
                <div>  
                    <div class="scraplist">
                        SH | 2024년 2차 청년안심주택 입주자 모집 공고
                        <div style="display: flex;">
                            <div style="position:relative; right:-20px;">
                                <div style="color: blue; margin-bottom:10%">
                                    D - 12
                                </div>
                                
                                <div style="font-size: 12px; font-weight: 500;">
                                    공고일 2024.08.20
                                </div>
                            </div>
                            <img class="star" src="@/assets/icons/Star.svg">
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div>  
                    <div class="scraplist">
                        SH | 2024년 2차 청년안심주택 입주자 모집 공고
                        <div style="display: flex;">
                            <div style="position:relative; right:-20px;">
                                <div style="color: blue; margin-bottom:10%">
                                    D - 12
                                </div>
                                
                                <div style="font-size: 12px; font-weight: 500;">
                                    공고일 2024.08.20
                                </div>
                            </div>
                            <img class="star" src="@/assets/icons/Star.svg">
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'ScrappedNoticeComponent'
}
</script>
<style>
    .ScrappedNotice-Wrapper{
        font-size:24px;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        gap:20px;
        justify-content: center;
        border: solid lightgray 1px;
        padding:2%;
    }

    .scraplist{
        padding:2%;
        border: solid lightgray 1px;
        display: flex;
        justify-content: space-between;
        margin: 1%;
    }

    .star{
        position:relative;
        right:-10px;
        top:-30px;
    }
</style>