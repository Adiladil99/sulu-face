<script setup>
</script>

<template>
  <div class="masmain">
    <MastersHeader />
    <main class="masmain-content">
        <div class="container conts">
            <slot class="pd-main" />
        </div>
    </main>
    <MastersFooter />
  </div>
</template>

<style lang="scss" scoped>
.masmain {
    display: flex;
    background: rgb(249,248,242);
    background: linear-gradient(90deg, rgba(249,248,242,1) 0%, rgba(240,238,230,1) 57%, rgba(231,224,215,1) 100%);
    flex-direction: column;
    align-items: stretch;
    min-width: 100vw;
    min-height: 100vh;
    &-content {
        padding: 32px 0;
        flex-grow: 1;
        .conts {
            height: 100%;
        }
    }
}
</style>