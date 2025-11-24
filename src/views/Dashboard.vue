<template>
    <div class="drawer lg:drawer-open font-display">
        <input type="checkbox" id="my-drawer" class="drawer-toggle" />

        <!-- Page Content -->
        <div class="drawer-content flex flex-col">
            <Navbar
                :isDark="isDark"
                @toggle-drawer="toggleDrawer"
                @toggle-theme="toggleTheme"
            />

            <!-- Main content -->
            <!-- ❗️No bg-* class here, so gradient from App.vue is visible -->
            <main class="flex-1 p-6">
                <router-view />
                <!-- or your content / cards here -->
            </main>
        </div>

        <Sidebar />
    </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Jenjang from "../components/Jenjang.vue";
import Statcard from "../components/Statcard.vue";
import StatsCards from "../components/StatsCards.vue";
import Charts from "../components/Charts.vue";
import RecentOrders from "../components/RecentOrders.vue";
import RecentActivity from "../components/RecentActivity.vue";
import StackedBarChart from "../components/StackedBarChart.vue";
import DataSekolah from "../components/DataSekolah.vue";
import DataPekerjaan from "../components/DataPekerjaan.vue";

// default LIGHT
const isDark = ref(false);

onMounted(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        isDark.value = savedTheme === "dark";
    } else {
        isDark.value = false;
        localStorage.setItem("theme", "light");
    }
});

watchEffect(() => {
    const html = document.documentElement;

    if (isDark.value) {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
});

const toggleTheme = () => {
    isDark.value = !isDark.value;
};

const toggleDrawer = () => {
    const drawer = document.getElementById("my-drawer");
    if (drawer) {
        drawer.checked = !drawer.checked;
    }
};
</script>
