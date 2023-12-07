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
    background: #100f0b;
    flex-direction: column;
    align-items: stretch;
    min-width: 100vw;
    min-height: 100vh;
    color: #fffffd;
    &-content {
        padding: 32px 0;
        flex-grow: 1;
        .conts {
            height: 100%;
        }
    }
}
</style>