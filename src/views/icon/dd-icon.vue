<template>
  <div class="icon-wrapper">
    <div class="row dd-icon-list">
      <div class="icon-item">
        <i class="dd full-screen"></i>
        full-screen
      </div>
      <div class="icon-item">
        <i class="dd cancel-full-screen"></i>
        cancel-full-screen
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.icon-wrapper {
  margin-top: 20px;
  .dd-icon-list {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #eee;
    border-radius: 4px;
    font-size: 13px;
    .icon-item {
      width: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 70px;
      color: #99a9bf;
      justify-content: space-around;
      border-bottom: 1px solid #eee;
      border-right: 1px solid #eee;
      margin-right: -1px;
      margin-bottom: -1px;
      padding: 10px 0;
      i {
        color: #606266;
        font-size: 24px;
      }
    }
  }
}

.icon-item:hover {
  color: #5cb6ff;
}
.icon-item:hover i {
  color: #5cb6ff;
}
@media only screen and (min-width: 1280px) and (max-width: 1366px) {
  .icon-item {
    width: 12.5% !important;
  }
}
@media only screen and (max-width: 1280px) {
  .icon-item {
    width: 16.66% !important;
  }
}
@media only screen and (max-width: 1080px) {
  .icon-item {
    width: 20% !important;
  }
}
@media only screen and (max-width: 768px) {
  .icon-item {
    width: 33.33% !important;
  }
}
</style>>