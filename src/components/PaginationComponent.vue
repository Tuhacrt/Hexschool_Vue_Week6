<script setup>
import { ref, toRef, computed } from 'vue';

const props = defineProps(['pagination']);
const emit = defineEmits(['changePage']);

const paginationComponentRef = ref();
const localPagination = toRef(props, 'pagination');
const totalItems = computed(() => localPagination.value.total_pages * 10);
const currentPage = ref(1);

const onClickPage = (page) => {
  emit('changePage', page);
};
</script>

<template>
  <div class="pagination-component" ref="paginationComponentRef">
    <vue-awesome-paginate
      :total-items="totalItems"
      :item-per-page="10"
      v-model="currentPage"
      :on-click="onClickPage"
    >
      <template #prev-button>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#0d6efd"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </span>
      </template>

      <template #next-button>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#0d6efd"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </span>
      </template>
    </vue-awesome-paginate>
  </div>
</template>

<style>
.pagination-component .paginate-buttons {
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #e6e6e6;
  border: none;
}

.pagination-component .back-button,
.pagination-component .next-button {
  margin-inline: 10px;
  border-radius: 25px;
}

.pagination-component .first-button {
  border-start-start-radius: 25px;
  border-end-start-radius: 25px;
}

.pagination-component .last-button {
  border-start-end-radius: 25px;
  border-end-end-radius: 25px;
}

.pagination-component .back-button svg {
  transform: rotate(180deg) translateY(1px);
}

.pagination-component .next-button svg {
  transform: translateY(-1px);
}

/* select second element of .paginate-buttons */
.pagination-component li:nth-child(2) > .paginate-buttons.number-buttons {
  border-start-start-radius: 25px;
  border-end-start-radius: 25px;
  transition: none;
}

/* select one element before last of .paginate-buttons */
.pagination-component li:nth-last-child(2) > .paginate-buttons.number-buttons {
  border-start-end-radius: 25px;
  border-end-end-radius: 25px;
}

.pagination-component .active-page {
  background-color: #0d6efd;
  color: #fff;
}

.pagination-component .active-page {
  background-color: #0d6efd;
  color: #fff;
}

.pagination-component .paginate-buttons:hover {
  background-color: #f5f5f5;
}

.pagination-component .active-page:hover {
  background-color: #0d6efd;
}

.pagination-component .back-button:active,
.pagination-component .next-button:active {
  background-color: #e6e6e6;
}
</style>
