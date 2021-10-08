<template>
    <div class="w-full grid justify-items-center text-center bg-base-200 rounded-lg">
        <h1 class="text-3xl">Vehicles details</h1>
        <p class="text-xl my-10 border-b-2 border-black">
            <b>Nopol:</b>
            {{ vehicle.platNo }}
            <b>| No Document:</b>
            {{ vehicle.noDoc }}
            <b>| Register:</b>
            {{ this.$store.getters["dateFormat"](["full", vehicle.waktu]) }}
        </p>
        <div>{{ items }}</div>
    </div>
</template>

<script>
export default {
    name: "VehiclesDetails",
    data() {
        return {
            items: "tes",
        };
    },
    computed: {
        vehicle() {
            return this.$store.getters["Vehicles/check"][0];
        },
    },
};
</script>
