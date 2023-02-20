<script setup>
import { onMounted, reactive } from 'vue';
import axios from 'axios';

import { useRoute } from 'vue-router';

const { VITE_URL, VITE_PATH } = import.meta.env;
const route = useRoute();

const state = reactive({
  loadingStatus: {
    loadingItem: '',
  },
  product: { imagesUrl: [] },
});
let quantity = 1;

const getProduct = async () => {
  const { id } = route.params;
  const url = `${VITE_URL}/api/${VITE_PATH}/product/${id}`;

  try {
    const response = await axios.get(url);
    state.product = response.data.product;
  } catch (error) {
    alert(error.response.data.message);
  }
};

const addToCart = async (productId, productQuantity = 1) => {
  const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
  const data = { product_id: productId, qty: productQuantity };
  state.loadingStatus.loadingItem = productId;
  try {
    const response = await axios.post(url, { data });
    alert(response.data.message);
    state.loadingStatus.loadingItem = '';
    quantity = 1;
  } catch (error) {
    alert(error.response?.data.message);
  }
};

onMounted(() => {
  getProduct();
});
</script>

<template>
  <div class="container">
    <div class="about">
      <h1>{{ state.product.title }}</h1>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-6">
            <img
              v-if="state.product.imagesUrl"
              class="img-fluid"
              :src="state.product.imagesUrl"
              alt=""
            />
          </div>
          <div class="col-sm-6">
            <span class="badge bg-primary rounded-pill">{{ state.product.category }}</span>
            <p>商品描述：{{ state.product.description }}</p>
            <p>商品內容：{{ state.product.content }}</p>
            <div class="h5" v-if="state.product.price < state.product.origin_price">
              {{ state.product.origin_price }} 元
            </div>
            <div v-else>
              <del class="h6">原價 {{ state.product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ state.product.price }} 元</div>
            </div>
            <div>
              <div class="input-group">
                <input min="1" type="number" class="form-control" v-model.number="quantity" />
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="addToCart(state.product.id, quantity)"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
          <!-- col-sm-6 end -->
        </div>
      </div>
    </div>
  </div>
</template>
