<template>
    <div class="grid gap-6 md:grid-cols-2">
        <!-- Card -->
        <section v-for="card in cards" :key="card.title" class="rounded-2xl bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-white/40 
             dark:border-slate-700/70 shadow-[0_8px_25px_-4px_rgba(0,0,0,0.12)]">
            <!-- Header -->
            <div class="px-6 py-4 bg-emerald-300 dark:bg-emerald-600 rounded-t-2xl">
                <h2 class="text-2xl font-semibold tracking-wide text-slate-900 dark:text-slate-100">
                    {{ card.title }}
                </h2>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto px-4 pb-4 pt-2">
                <table class="min-w-full text-left text-xs md:text-sm">
                    <thead class="border-b border-slate-200/70 dark:border-slate-700/60 text-xs md:text-[16px] font-semibold uppercase 
                   tracking-wide text-slate-900 dark:text-slate-100 bg-transparent">
                        <tr>
                            <th class="py-2 pr-3">#</th>
                            <th class="py-2 pr-3">Keterangan</th>
                            <th class="py-2 pr-3 text-right">Jumlah</th>
                            <th class="py-2 pl-3 text-right">Nominal (Rp.)</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-slate-200/60 dark:divide-slate-700/50">
                        <tr v-for="(row, index) in card.rows" :key="`${card.title}-${index}`"
                            class="transition-all hover:bg-slate-100/60 dark:hover:bg-slate-800/60">
                            <td class="py-3 pr-3 align-top text-slate-600 dark:text-slate-400">
                                {{ index + 1 }}
                            </td>

                            <td class="py-3 pr-3 align-top text-slate-800 dark:text-slate-100">
                                {{ row.keterangan }}
                            </td>

                            <td class="py-3 pr-3 align-top text-right tabular-nums text-slate-800 dark:text-slate-100">
                                {{ row.jumlah }}
                            </td>

                            <td class="py-3 pl-3 align-top text-right tabular-nums text-slate-800 dark:text-slate-100">
                                {{ formatCurrency(row.nominal) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script setup>
const cards = [
    {
        title: 'SMK',
        rows: [
            {
                keterangan: 'Satuan Pendidikan',
                jumlah: 1439,
                nominal: 1813380653910,
            },
            {
                keterangan: 'Satuan Pendidikan Salur Tahap 1 (70%)',
                jumlah: 1439,
                nominal: 1813380653910,
            },
            {
                keterangan: 'Satuan Pendidikan Salur Tahap 2 (100%)',
                jumlah: 0,
                nominal: 0,
            },
        ],
    },
    {
        title: 'PKBM & SKB',
        rows: [
            {
                keterangan: 'Satuan Pendidikan',
                jumlah: 176,
                nominal: 80108497014,
            },
            {
                keterangan: 'Satuan Pendidikan Salur Tahap 1 (70%)',
                jumlah: 176,
                nominal: 80108497014,
            },
            {
                keterangan: 'Satuan Pendidikan Salur Tahap 2 (100%)',
                jumlah: 0,
                nominal: 0,
            },
        ],
    },
]

// formatter rupiah
const formatCurrency = (value) =>
    new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(value)
</script>

<style scoped>
table {
    font-feature-settings: "tnum" 1, "lnum" 1;
}
</style>
