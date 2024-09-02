<template>
    <div>
      <h1>상세 내용</h1>
      <div v-if="notice">
        <h2>{{ notice.PAN_NM }}</h2>
        <p>공고일: {{ notice.PAN_NT_ST_DT }}</p>
        <p>지역: {{ notice.CNP_CD_NM }}</p>
        <p>공고 유형: {{ notice.UPP_AIS_TP_NM }} </p>
      </div>
      <p v-else>로딩 중...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'HouseNoticeDetail',
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
              PAN_NM: this.id // 이 부분을 API가 요구하는 상세 조회 파라미터로 수정하세요.
            }
          });
  
          // 응답 데이터 설정
          this.notice = response.data || {}; // API의 데이터 구조에 맞게 수정 필요
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
  /* 스타일 정의 */
  </style>
  