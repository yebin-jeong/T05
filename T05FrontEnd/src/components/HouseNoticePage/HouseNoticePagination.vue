<!-- src/components/Pagination.vue -->
<template>
    <div class="pagination">
      <button @click="changePage(1)" :disabled="page <= 1">
        <div><span>&lt;</span><span>&lt;</span></div>
        
      </button>
      <button @click="changePage(page - 1)" :disabled="page <= 1">&lt;</button>
  
      <button v-for="pageNumber in pageNumbers" :key="pageNumber" :class="{ active: pageNumber === page }"
              @click="changePage(pageNumber)">
        {{ pageNumber }}
      </button>
  
      <button @click="changsePage(page + 1)" :disabled="page >= totalPages"><span>&gt;</span></button>
      <button @click="changePage(totalPages)" :disabled="page >= totalPages">
        <div><span>&gt;</span><span>&gt;</span></div>
      </button>
    </div>
  </template>
  
<script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    page: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  });
  
  const emit = defineEmits(['changePage']);
  
  // 페이지 버튼을 생성하기 위한 페이지 번호 배열 계산
  const pageNumbers = computed(() => {
    const numbers = [];
    const maxPagesToShow = 5; // 표시할 최대 페이지 수
    const startPage = Math.max(1, props.page - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(props.totalPages, startPage + maxPagesToShow - 1);
    
    for (let i = startPage; i <= endPage; i++) {
      numbers.push(i);
    }
    
    return numbers;
  });
  
  function changePage(newPage) {
    if (newPage < 1 || newPage > props.totalPages) return;
    emit('changePage', newPage);
  }
</script>
  
<style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    left: 45%;
  }
  
  .pagination button {
    font-size: 20px;
    padding: 20px;
    margin: 0 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .pagination button.active {
    background-color: #1F72D3;
    color: white;
  }
  
  .pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
  