<script setup></script>

<template>
    <div class="container section-margin pt-section border-top d-grid grid-md-2" data-dsn-gap="30px 120px">
        <slot name="title" />
        <div class="box-right">
            <slot name="items" />
        </div>
    </div>
</template>
