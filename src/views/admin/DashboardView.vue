<script setup></script>

<template>
  <div class="dashboard container mx-auto">
    <nav class="d-flex justify-content-evenly mx-auto" style="width: 700px">
      <router-link to="/">Home Page</router-link>
      <router-link to="/admin/products">Admin Products</router-link>
      <router-link to="/admin/orders">Admin Orders</router-link>
      <router-link to="/admin">Dashboard</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
