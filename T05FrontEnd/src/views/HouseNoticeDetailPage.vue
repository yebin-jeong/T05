<template>
  <Top/>
  <div class="housedetail wrapper">
    <h1>상세 내용</h1>
    <div v-if="notice">
      <h2>{{ notice.PAN_NM }}</h2>
      <p>공고일: {{ notice.PAN_NT_ST_DT }}</p>
      <p>지역: {{ notice.CNP_CD_NM }}</p>
      <p>공고 유형: {{ notice.UPP_AIS_TP_NM }} </p>
    </div>
    <p v-else>로딩 중...</p>
  </div>
  <Footer/>
</template>

<script>
import axios from 'axios';
import Top from '@/components/Top.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HouseNoticeDetail',
  components:{
    Top,
    Footer,

  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      notice: null,
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchNoticeDetail() {
      const url = `http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1/lhLeaseNoticeInfo1`; // 실제 API 엔드포인트
      try {
        const response = await axios.get(url, {
          params: {
            serviceKey: '0khvXNpZtCdvzH1Dw76HNtpDP/XhiNIzhKRU43Dnphe7oXSziRtpdtaP4FORD5VYkOYFt2vqQQO1VklahVTOsA==', // 실제 서비스 키로 교체
            PAN_NM: this.id 
          }
        });

         let responseData = response.data;

        if (responseData.dsList && Array.isArray(responseData.dsList)) {
          this.notice = responseData.dsList || [];
        } else if (responseData.dsList){
          this.error = 'dslist 없음';
        } else if(!Array.isArray(responseData.dsList)){
          console.log('detail responseData : '+ responseData);
          this.notice = response.data[1].dsList;
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }
  },
  created() {
    this.fetchNoticeDetail();
  }
};
</script>

<style scoped>
.housedetail{
  margin-top: 7%;
  font-size:24px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap:20px;
  justify-content: center;
  padding:2%;
}
</style>
  