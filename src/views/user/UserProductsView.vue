<script setup>
import { reactive, onMounted, ref } from 'vue';
import axios from 'axios';

import FindMoreModal from '../../components/FindMoreModal.vue';
import PaginationComponent from '../../components/PaginationComponent.vue';
import router from '../../router';

const { VITE_URL, VITE_PATH } = import.meta.env;

const state = reactive({
  loadingStatus: { loadingItem: '' },
  products: [],
  tempProduct: {
    imagesUrl: [],
  },
  pagination: {},
});

const findMoreModalRef = ref();

const getProductList = async (currentPage = state.pagination.current_page || 1) => {
  const url = `${VITE_URL}/api/${VITE_PATH}/products?page=${currentPage}`;
  try {
    const response = await axios.get(url);
    state.products = response.data.products;
    state.pagination = response.data.pagination;
  } catch (error) {
    alert(error.response.data.message);
  }
};

const addToCart = async (productId, quantity = 1) => {
  const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
  const data = { product_id: productId, qty: quantity };
  state.loadingStatus.loadingItem = productId;
  try {
    const response = await axios.post(url, { data });
    alert(response.data.message);
    state.loadingStatus.loadingItem = '';
    findMoreModalRef.value?.hideModal();
  } catch (error) {
    alert(error.response?.data.message);
  }
};

onMounted(() => {
  getProductList();
});

const openModal = (modalType, currentProduct) => {
  switch (modalType) {
    case 'findMore':
      state.tempProduct = { ...currentProduct };
      findMoreModalRef.value?.showModal();
      break;
    default:
      break;
  }
};
const goToAbout = async (currentProduct) => {
  const { id } = currentProduct;
  const url = `${VITE_URL}/api/${VITE_PATH}/product/${id}`;

  state.tempProduct = { ...currentProduct };
  try {
    await axios.get(url);
    router.push(`/product/${id}`);
  } catch (error) {
    alert(error.response.data.message);
  }
};
</script>

<template>
  <div class="container">
    <!-- Product List -->
    <div class="mt-4">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th />
          </tr>
        </thead>
        <tbody v-if="state.products?.length">
          <tr v-for="product in state?.products" :key="product.id">
            <td style="width: 200px">
              <div
                style="height: 100px; background-size: cover; background-position: center"
                :style="{ backgroundImage: `url(${product?.imagesUrl[0]})` }"
                v-if="product.imagesUrl"
              />
            </td>
            <td>{{ product.title }}</td>
            <td>
              <div v-if="product.price < product.origin_price">
                <del class="h6">原價 {{ product.origin_price }} 元</del>
                <div class="h5">現在只要 {{ product.price }} 元</div>
              </div>
              <div class="h5" v-else>{{ product.origin_price }} 元</div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="goToAbout(product)"
                  :disabled="state.loadingStatus.loadingItem === product.id || !product.is_enabled"
                >
                  <font-awesome-icon
                    icon="spinner"
                    pulse
                    v-if="state.loadingStatus.loadingItem === product.id"
                  />
                  詳細希望
                </button>

                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="openModal('findMore', product)"
                  :disabled="state.loadingStatus.loadingItem === product.id || !product.is_enabled"
                >
                  <font-awesome-icon
                    icon="spinner"
                    pulse
                    v-if="state.loadingStatus.loadingItem === product.id"
                  />
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="addToCart(product.id)"
                  :disabled="state.loadingStatus.loadingItem === product.id || !product.is_enabled"
                >
                  <font-awesome-icon
                    icon="spinner"
                    pulse
                    v-if="state.loadingStatus.loadingItem === product.id"
                  />
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Product List -->

    <!-- Pagination -->
    <div class="d-flex justify-content-center">
      <PaginationComponent
        :pagination="state.pagination"
        @change-page="getProductList"
        ref="paginationComponentRef"
      />
    </div>
    <!-- Pagination -->
  </div>
  <!-- Modal -->
  <FindMoreModal
    :temp-product="state.tempProduct"
    :add-to-cart="addToCart"
    ref="findMoreModalRef"
  />
  <!-- Modal -->
</template>
