<script setup>
import { onMounted, ref, toRef } from 'vue';
import * as bootstrap from 'bootstrap';
import axios from 'axios';

const productModalRef = ref();
let productModal = null;

onMounted(() => {
  productModal = new bootstrap.Modal(productModalRef.value, {
    keyboard: false,
    backdrop: false,
  });
});

const props = defineProps(['tempProduct', 'isNew']);
const emit = defineEmits(['update']);
const productData = toRef(props, 'tempProduct');

const showModal = () => productModal?.show();
const hideModal = () => productModal?.hide();

const getRequestType = () => {
  const { VITE_URL, VITE_PATH } = import.meta.env;
  const baseURL = `${VITE_URL}/api/${VITE_PATH}/admin/product`;
  const url = props.isNew ? baseURL : `${baseURL}/${productData.value.id}`;
  const method = props.isNew ? 'post' : 'put';
  return { method, url };
};

const updateProduct = async () => {
  try {
    const { method, url } = getRequestType();
    const response = await axios[method](url, {
      data: productData?.value,
    });
    alert(response.data.message);
    hideModal();
    emit('update');
  } catch (error) {
    alert(error.response.data.message);
  }
};

const initializeProductImages = () => {
  productData.value.imagesUrl = [''];
};

defineExpose({ showModal });
</script>

<template>
  <div
    id="productModal"
    ref="productModalRef"
    class="modal fade border-0"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ isNew ? "新增產品" : "編輯產品" }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="hideModal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4" v-if="Array.isArray(productData?.imagesUrl)">
              <div v-for="(image, key) in productData?.imagesUrl" :key="key">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="productData.imagesUrl[key]"
                  />
                </div>
                <img class="img-fluid mb-2" :src="image" />
              </div>
              <div
                v-if="
                  productData?.imagesUrl[productData?.imagesUrl.length - 1] !==
                  ''
                "
              >
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="productData?.imagesUrl.push('')"
                >
                  新增圖片
                </button>
              </div>
              <div v-else>
                <button
                  class="btn btn-outline-danger btn-sm d-block w-100"
                  @click="productData?.imagesUrl.pop()"
                >
                  刪除圖片
                </button>
              </div>
            </div>
            <div v-else>
              <button
                class="btn btn-outline-primary btn-sm d-block w-100"
                @click="initializeProductImages"
              >
                新增圖片
              </button>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="productData.title"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="productData.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="productData.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="productData.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="productData.price"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="productData.description"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="productData.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    v-model="productData.is_enabled"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="hideModal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateProduct">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
