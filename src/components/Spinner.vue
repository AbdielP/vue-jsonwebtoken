<template>
    <img class="spinner" :width="width" src="../assets/svg/spinner-solid.svg" alt="spinner">
</template>

<script>
export default {
    name: 'Spinner',
    props: {
        width: {
            type: String,
            default: '12'
        }
    }
}
</script>

<style lang="scss" scoped>
.spinner {
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    filter: invert(99%) sepia(3%) saturate(105%) hue-rotate(262deg) brightness(116%) contrast(90%);
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg)
    }
    100% {
        -webkit-transform: rotate(360deg)
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
}
</style>