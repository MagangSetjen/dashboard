<template>
    <div class="w-full mx-auto mb-5">
        <div class="rounded-2xl bg-white dark:bg-white/5 dark:backdrop-blur-md 
             dark:[--webkit-backdrop-filter:blur(10px)] dark:border-none 
             shadow-sm border border-slate-100 px-6 py-4">
            <h2 class="text-sm font-semibold text-slate-700 dark:text-slate-100 mb-4">
                Resume Penerima Revit
            </h2>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <!-- Loop kartu -->
                <div v-for="(item, idx) in stats" :key="idx" :class="[
                    'flex flex-col items-start gap-4 rounded-xl px-5 py-4 w-full relative overflow-hidden',
                    item.cardBg,        // background card
                    item.cardOpacity    // opacity card
                ]">

                    <div class="absolute bottom-40 right-40 h-32 w-32 z-0">
                        <svg width="658" height="674" viewBox="0 0 658 674" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M322.791 4.9228C389.109 -15.6651 474.61 31.1263 505.872 93.1314C537.745 156.351 442.875 231.906 470.168 297.234C502.197 373.898 641.951 371.716 656.439 453.529C669.354 526.459 592.165 590.297 528.881 628.779C468.174 665.695 383.768 692.886 322.791 656.416C259.628 618.639 292.94 509.622 241.555 456.932C204.865 419.311 131.02 455.506 92.2547 420.026C42.6998 374.67 -22.1389 302.971 7.44419 242.658C38.6777 178.979 150.464 228.579 207.099 185.883C265.702 141.704 252.701 26.6819 322.791 4.9228Z"
                                fill="white" fill-opacity="0.2" />
                        </svg>
                    </div>

                    <!-- Icon wrapper -->
                    <div :class="[
                        'flex h-11 w-11 items-center justify-center rounded-lg',
                        item.iconBg        // background ikon
                    ]">
                        <!-- Icon (bisa diatur via item.icon) -->
                        <svg v-if="item.icon === 'school'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round" :class="['h-6 w-6', item.iconColor]">
                            <path d="M4 10L12 5l8 5" />
                            <path d="M5 10v9h14v-9" />
                            <path d="M9 14h2v2H9z" />
                        </svg>

                        <svg v-else-if="item.icon === 'budget'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round" :class="['h-6 w-6', item.iconColor]">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M9 9.5C9 8.67 9.67 8 10.5 8H13a2 2 0 1 1 0 4h-2a2 2 0 0 0 0 4h3.5" />
                            <path d="M12 6v2" />
                            <path d="M12 16v2" />
                        </svg>

                        <svg v-else-if="item.icon === 'room'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round" :class="['h-6 w-6', item.iconColor]">
                            <rect x="3" y="3" width="7" height="7" rx="1.5" />
                            <rect x="14" y="3" width="7" height="7" rx="1.5" />
                            <rect x="3" y="14" width="7" height="7" rx="1.5" />
                            <rect x="14" y="14" width="7" height="7" rx="1.5" />
                        </svg>

                        <!-- Default icon kalau type-nya tidak dikenal -->
                        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                            :class="['h-6 w-6', item.iconColor]">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M9 12h6" />
                        </svg>
                    </div>

                    <!-- Konten kartu -->
                    <div class="min-w-0 z-10">
                        <!-- VALUE / ANGKA UTAMA -->
                        <p class="text-xl md:text-3xl font-semibold text-slate-800 dark:text-slate-100 leading-tight">
                            {{ item.value }}
                        </p>

                        <!-- TITLE CARD -->
                        <p class="text-md text-slate-500 dark:text-slate-100 mt-1">
                            {{ item.title }}
                        </p>

                        <!-- DESCRIPTION CARD (opsional) -->
                        <p v-if="item.description" class="text-[24px] text-slate-400 mt-0.5">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Statcard',
    props: {
        // Kalau mau di-override dari parent, tinggal kirim prop "stats"
        stats: {
            type: Array,
            default() {
                return [
                    {
                        value: '2,000',
                        title: 'Satuan Pendidikan',
                        description: '',
                        icon: 'school',           // jenis ikon
                        iconBg: 'bg-sky-100',     // bg ikon
                        iconColor: 'text-sky-500',// warna ikon
                        cardBg: '',      // bg kartu
                        cardOpacity: 'bg-blue-800/30'           // bisa isi "bg-opacity-70" / "bg-sky-50/80" dll
                    },
                    {
                        value: 'Rp. 2,261,940,186,380.00',
                        title: 'Anggaran',
                        description: '',
                        icon: 'budget',
                        iconBg: 'bg-green-100',
                        iconColor: 'text-green-500',
                        cardBg: '',
                        cardOpacity: 'bg-rose-500/50'
                    },
                    {
                        value: '12,493',
                        title: 'Total Ruang',
                        description: '',
                        icon: 'room',
                        iconBg: 'bg-amber-100',
                        iconColor: 'text-amber-500',
                        cardBg: '',
                        cardOpacity: 'bg-amber-500/20'
                    }
                ]
            }
        }
    }
}
</script>
