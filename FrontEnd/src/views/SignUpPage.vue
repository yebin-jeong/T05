<template>
    <div>
        <Top/>
        <div class="SignUpPage-Wrapper">
            <h2>회원가입</h2>
            <div>회원정보</div>
            <form @submit.prevent="signUp">
                <div>
                    <label for="username">아이디 (이메일)</label>
                    <div class="email-container">
                        <input type="text" v-model="usernameLocalPart" required/>
                        <select v-model="emailDomain" name="emailDomain" id="emailDomain">
                            <option value="" disabled selected>이메일 도메인 선택</option>
                            <option v-for="domain in emailDomains" :key="domain" :value="domain">
                            {{ domain }}
                            </option>
                        </select>
                        <span>@</span>
                        <input type="text" :value="emailDomain" readonly/>
                    </div>
                </div>
                <div>
                    <label for="password">비밀번호</label>
                    <input type="password" v-model="password" required 
                    pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@!#$%^&*()_+])[A-Za-z\d@!#$%^&*()_+]{9,12}$" 
                    placeholder="숫자, 영문, 특수문자(~!@#$%^&*()_+)를 조합해서 입력하세요.(9~12자리)">
                </div>
                <div>
                    <label for="confirmPassword">비밀번호 확인</label>
                    <input type="password" v-model="confirmassword" required>
                </div>
                <div>
                    <label for="gender">성별</label>
                    <div class="radio-group">
                        <label>
                            <input type="radio" name="gender" value="남자" v-model="gender" checked/>남자 
                        </label>
                        <label>
                            <input type="radio" name="gender" value="여자" v-model="gender"/>여자 
                        </label>
                    </div>   
                </div>
                <div>
                    <label for="birthYear">출생년도</label>
                    <select v-model="birthYear" id="birthYear" name="birthYear">
                        <option value="" disabled selected>연도를 선택하세요</option>
                        <option v-for="year in years" :key="year" :value="year">
                            {{ year }}
                        </option>
                    </select>
                </div>
                <div>
                    <label for="province">광역시/도</label>
                    <select v-model="selectedProvince" id="province" name="province" @change="fetchCities">
                        <option value="" disabled selected>광역시/도를 선택하세요</option>
                        <option v-for="province in provinces" :key="province.code" :value="province.code">
                            {{ province.name }}
                        </option>
                    </select>
                </div>
                <div>
                    <label for="city">시/군/구</label>
                    <select v-model="selectedCity" id="city" name="city">
                        <option value="" disabled selected>시/군/구를 선택하세요</option>
                        <option v-for="city in cities" :key="city.code" :value="city.code">
                            {{ city.name }}
                        </option>
                    </select>
                </div>
                <div>
                    <label for="medianIncome">중위소득</label>
                    <div class="income-container">
                        <input type="text" v-model="medianIncome" pattern="\d{1,4}" required />      
                        <span>%</span>
                    </div>
                </div>



                <div class="submit-button">
                    <button type="button" class="cancel-button" @click="cancelSignup">취소</button>
                    <button type="submit" class="signup-button">회원가입</button>
                </div>
            </form>
        </div>
        <Footer/>
    </div>
</template>

<script>
import axios from 'axios';
import Top from '@/components/Top.vue';
import Footer from '@/components/Footer.vue';
export default {
    components: {
    Top,
    Footer,
  },
  data() {
    return {
      usernameLocalPart: '', // 이메일 사용자 이름
      emailDomain: '', // 선택된 이메일 도메인
      emailDomains: [
        'naver.com',
        'gmail.com',
        'daum.net'
      ],
      birthYear: '', // 선택된 출생년도
      years: this.generateYears(), // 연도 목록
      selectedProvince: '', // 선택된 광역시/도
      selectedCity: '', // 선택된 시/군/구
      provinces: [], // API로부터 가져온 광역시/도
      cities: [], // 선택된 광역시/도의 시/군/구
      medianIncome: '', // 중위소득
    };
  },
  methods: {
    async fetchProvinces() {
      try {
        const response = await axios.get('');
        this.provinces = response.data; // API 응답 데이터에 맞게 조정
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    },
    async fetchCities() {
      if (this.selectedProvince) {
        try {
          const response = await axios.get(`/${this.selectedProvince}`);
          this.cities = response.data; // API 응답 데이터에 맞게 조정
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      }
    },
    generateYears() {
      const currentYear = new Date().getFullYear();
      let startYear = currentYear - 100; // 1924년부터 시작
      const years = [];
      for (let year = startYear; year <= currentYear; year++) {
        years.push(year);
      }
      return years;
    },
    signUp() {
      // 이메일 조합을 만드는 로직
      const email = `${this.usernameLocalPart}@${this.emailDomain}`;
      console.log('회원가입 이메일:', email);
      console.log('선택된 출생년도:', this.birthYear);

      // 회원가입 처리 로직
    },
    cancelSignUp() {   // 취소 버튼 클릭 시 처리
    this.$router.push('/'); // 홈으로 이동
  }
  },
  mounted() {
    this.fetchProvinces(); // 컴포넌트가 마운트되면 광역시/도 데이터 로드
  }
};
</script>

<style>
.SignUpPage-Wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px; /* 페이지 상단과의 간격 */
  padding: 50px;    /* 내부 여백 */
  width: 100%;
}

h2 {
  width: 195px;
  position: relative;
  font-size: 36px;
  font-weight: 600;
  font-family: Inter, sans-serif; 
  color: #000;
  text-align: center;
  display: inline-block;
  height: 44px;
  margin-bottom: 20px;
}

form {
  margin-top: 30px;
}

button[type="submit"] {
  margin-top: 50px; /* 회원가입 버튼과 위쪽 폼 필드 사이 간격 추가 */
}

.signup-button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-button {
  padding: 10px 20px;
  font-size: 16px;
  color: rgb(5, 5, 5);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.signup-button {
  background-color: #1f72d3; /* 회원가입 버튼 색상 */
}

.cancel-button {
  background-color: #f9f8f8; /* 취소 버튼 색상 */
}

.signup-button-container {
  display: flex;
  justify-content: space-between; /* 버튼을 양쪽 끝으로 배치 */
  margin-top: 20px; /* 버튼 위에 약간의 간격 추가 */
  width: 100%; /* 버튼들을 가로로 확장하여 배치 */
}
</style>