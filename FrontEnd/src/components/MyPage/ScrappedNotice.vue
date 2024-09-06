<template>
    <div class="ScrappedNotice-Wrapper">
        <ul  v-if="notices.length">
            <li v-for="(notice, index) in notices" :key="index">
                <div>  
                    <div class="scraplist">
                        {{ notice.PAN_NM }}
                        <div style="display: flex;">
                            <div>
                                <div style="color:blue">
                                    D- {{ notice.PAN_NT_ST_DT }}
                                </div>
                                <div style="font-size:20px;font-weight: 500;">
                                    공고일: {{ notice.PAN_NT_ST_DT }}
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
import axios from 'axios';

export default {
  name:'ScrappedNoticeComponent',
  data() {
    return {
      notices: [], // 공고 목록
      loading: true, // 데이터 로딩 상태
      error: null, // 오류 메시지
    };
  },
  methods: {
    async fetchNotices() {
      const url = 'http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1/lhLeaseNoticeInfo1'; // 실제 API 엔드포인트로 교체

      try {
        const response = await axios.get(url, {
          params: {
            serviceKey: '0khvXNpZtCdvzH1Dw76HNtpDP/XhiNIzhKRU43Dnphe7oXSziRtpdtaP4FORD5VYkOYFt2vqQQO1VklahVTOsA==', // 실제 서비스 키로 교체
            PG_SZ: '10',
            PAGE: '1'
          }
        });

        console.log(response.data); // 응답 데이터 로그 출력

        // JSON 응답이 문자열일 경우 파싱
        let responseData = response.data;
        if (typeof responseData == 'string') {
          try {
            console.log('responseData string')
            responseData = JSON.parse(responseData);
            this.notices=responseData;
          } catch (parseError) {
            this.error = 'JSON 파싱 오류: ' + parseError.message;
            return;
          }
        }

        if (responseData.dsList && Array.isArray(responseData.dsList)) {
          this.notices = responseData.dsList || [];
        } else if (responseData.dsList){
          this.error = 'dslist 없음';
        } else if(!Array.isArray(responseData.dsList)){
          console.log('responseData : '+ responseData);
          this.notices = response.data[1].dsList;
          //this.error='dslist가 배열이 아님'
        }
      } catch (error) {
        this.error = error.message;
      } finally {        
        this.loading = false;
      }
    }
  },
  created() {
    this.fetchNotices();
  }
};
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