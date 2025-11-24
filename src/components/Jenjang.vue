<template>
    <div class="mb-8" id="jenjang-dropdown-root">
        <div class="relative inline-block w-full max-w-[10rem]">

            <!-- Trigger -->
            <button
                type="button"
                @click="isOpen = !isOpen"
                class="flex w-full items-center justify-between rounded-sm 
                       bg-white dark:bg-slate-700 
                       px-4 py-3 text-sm font-medium 
                       text-slate-900 dark:text-slate-100 
                       shadow-sm backdrop-blur
                       focus:outline-none focus:ring-2 focus:ring-slate-400/70 transition"
            >
                <span :class="[
                    selectedJenjang === 'jenjang'
                        ? 'text-slate-900 dark:text-slate-300'
                        : 'text-slate-900 dark:text-slate-100',
                ]">
                    {{ selectedLabel }}
                </span>

                <span class="ml-2 text-slate-900 dark:text-slate-100">
                    <svg
                        class="h-4 w-4 transition-transform duration-150"
                        :class="{ 'rotate-180': isOpen }"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                </span>
            </button>

            <!-- Dropdown list -->
            <transition
                enter-active-class="transition ease-out duration-150"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
            >
                <div
                    v-if="isOpen"
                    class="absolute z-20 mt-1 w-full rounded-sm border border-slate-300 dark:border-slate-600 
                           bg-white dark:bg-slate-800 
                           shadow-lg backdrop-blur"
                >
                    <ul class="py-1 text-sm text-slate-900 dark:text-slate-100">
                        <li v-for="item in IsiJenjang" :key="item">
                            <button
                                type="button"
                                class="flex w-full items-center px-4 py-2 text-left 
                                       hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                                @click="selectJenjang(item)"
                            >
                                <span class="flex-1">
                                    {{ item.toUpperCase() }}
                                </span>
                                <span v-if="selectedJenjang === item" class="text-xs">✔</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const IsiJenjang = ['sd', 'smp', 'sma']

const selectedJenjang = ref('jenjang')
const isOpen = ref(false)

const selectedLabel = computed(() =>
    selectedJenjang.value === 'jenjang'
        ? 'Jenjang'
        : selectedJenjang.value.toUpperCase()
)

const selectJenjang = (item) => {
    selectedJenjang.value = item
    isOpen.value = false
}

const onClickOutside = (event) => {
    const dropdown = document.getElementById('jenjang-dropdown-root')
    if (dropdown && !dropdown.contains(event.target)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped>
button:focus {
    outline: none;
}
</style>
