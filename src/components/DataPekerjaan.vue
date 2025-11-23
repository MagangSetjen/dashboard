<template>
    <div class="rounded-3xl border bg-slate-50 border-slate-200 shadow-xl px-4 py-5 md:px-8 md:py-7
               dark:bg-slate-900 dark:border-slate-700">
        <!-- Title -->
        <div class="mb-4 md:mb-6">
            <h1 class="text-base md:text-lg font-semibold tracking-wide
                       text-slate-900 dark:text-slate-100">
                Ranking Pekerjaan
            </h1>
        </div>

        <!-- Filters & Actions -->
        <div class="mb-4 flex flex-col gap-3 md:mb-6 md:flex-row md:items-center md:justify-between">
            <!-- Left: filters -->
            <div class="flex flex-1 flex-wrap items-center gap-3">
                <!-- Search -->
                <div class="relative w-full max-w-xs">
                    <span class="pointer-events-none absolute inset-y-0 left-3 flex items-center
                               text-slate-400 dark:text-slate-500">
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
                        </svg>
                    </span>
                    <input v-model="searchQuery" type="text" placeholder="Cari Nama/NPSN..." class="w-full rounded-xl border px-9 py-2.5 text-xs md:text-sm shadow-sm
                               border-slate-300 bg-white text-slate-800
                               placeholder:text-slate-400
                               focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200
                               dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100
                               dark:placeholder:text-slate-500 dark:focus:border-emerald-400
                               dark:focus:ring-emerald-800" />
                </div>

                <!-- Jenjang -->
                <div class="w-full max-w-[9rem]">
                    <label class="mb-1 block text-[11px] font-medium
                               text-slate-600 dark:text-slate-300">
                        Pilih Jenjang
                    </label>
                    <select v-model="selectedJenjang" class="w-full rounded-xl border px-3 py-2 text-xs shadow-sm
                               border-slate-300 bg-white text-slate-800
                               focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200
                               dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100
                               dark:focus:border-emerald-400 dark:focus:ring-emerald-800">
                        <option v-for="opt in jenjangOptions" :key="opt" :value="opt">
                            {{ opt }}
                        </option>
                    </select>
                </div>

                <!-- Provinsi -->
                <div class="w-full max-w-[9rem]">
                    <label class="mb-1 block text-[11px] font-medium
                               text-slate-600 dark:text-slate-300">
                        Pilih Provinsi
                    </label>
                    <select v-model="selectedProvinsi" class="w-full rounded-xl border px-3 py-2 text-xs shadow-sm
                               border-slate-300 bg-white text-slate-800
                               focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200
                               dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100
                               dark:focus:border-emerald-400 dark:focus:ring-emerald-800">
                        <option v-for="opt in provinsiOptions" :key="opt" :value="opt">
                            {{ opt }}
                        </option>
                    </select>
                </div>

                <!-- Kabupaten -->
                <div class="w-full max-w-[11rem]">
                    <label class="mb-1 block text-[11px] font-medium
                               text-slate-600 dark:text-slate-300">
                        Pilih Kabupaten/Kota
                    </label>
                    <select v-model="selectedKabupaten" class="w-full rounded-xl border px-3 py-2 text-xs shadow-sm
                               border-slate-300 bg-white text-slate-800
                               focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200
                               dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100
                               dark:focus:border-emerald-400 dark:focus:ring-emerald-800">
                        <option v-for="opt in kabupatenOptions" :key="opt" :value="opt">
                            {{ opt }}
                        </option>
                    </select>
                </div>
            </div>

            <!-- Right: Export -->
            <div class="flex justify-end">
                <button type="button" class="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs md:text-sm font-semibold
                           bg-emerald-500 text-white shadow-md
                           hover:bg-emerald-600 active:bg-emerald-700 transition-colors
                           dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:active:bg-emerald-600">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12h6m-7 4h8M5 21h14a2 2 0 0 0 2-2V7.5A1.5 1.5 0 0 0 19.5 6H16l-2-2h-4L8 6H4.5A1.5 1.5 0 0 0 3 7.5V19a2 2 0 0 0 2 2z" />
                    </svg>
                    <span>Export Excel</span>
                </button>
            </div>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="min-w-full text-left text-[11px] md:text-xs">
                <thead class="border-y text-[11px] font-semibold uppercase tracking-wide
                           bg-slate-100 text-slate-600 border-slate-200
                           dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700">
                    <tr>
                        <th class="px-3 py-3">Rank</th>
                        <th class="px-3 py-3">Nama Sekolah</th>
                        <th class="px-3 py-3">NPSN</th>
                        <th class="px-3 py-3 text-right">Jumlah Ruang</th>
                        <th class="px-3 py-3 text-right">Jumlah Menu</th>
                        <th class="px-3 py-3 text-right">Anggaran (Rp.)</th>
                        <th class="px-3 py-3 text-center">Pekan</th>
                        <th class="px-3 py-3 text-right">
                            Rata-rata Realisasi Capaian (%)
                        </th>
                        <th class="px-3 py-3 text-center">Menu Capaian</th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr v-for="row in filteredRows" :key="row.rank" class="bg-white hover:bg-slate-50 transition-colors
                               dark:bg-slate-900 dark:hover:bg-slate-800">
                        <!-- Rank + badge -->
                        <td class="px-3 py-3 align-middle">
                            <div class="flex items-center gap-2">
                                <span v-if="row.rank <= 3" :class="[
                                    'inline-flex items-center justify-center rounded-full px-2.5 py-1 text-[10px] font-semibold gap-1',
                                    row.rank === 1 && 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100',
                                    row.rank === 2 && 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100',
                                    row.rank === 3 && 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100',
                                ]">
                                    <span>
                                        {{ row.rank }}
                                    </span>
                                    <span class="text-[9px]">Top</span>
                                </span>
                                <span v-else class="inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold
                                           bg-slate-100 text-slate-600
                                           dark:bg-slate-800 dark:text-slate-200">
                                    {{ row.rank }}
                                </span>
                            </div>
                        </td>

                        <td class="px-3 py-3 align-middle text-slate-900 dark:text-slate-100">
                            {{ row.namaSekolah }}
                        </td>

                        <td class="px-3 py-3 align-middle text-slate-600 dark:text-slate-300">
                            {{ row.npsn }}
                        </td>

                        <td class="px-3 py-3 align-middle text-right tabular-nums
                                   text-slate-900 dark:text-slate-100">
                            {{ row.jumlahRuang }}
                        </td>

                        <td class="px-3 py-3 align-middle text-right tabular-nums
                                   text-slate-900 dark:text-slate-100">
                            {{ row.jumlahMenu }}
                        </td>

                        <td class="px-3 py-3 align-middle text-right tabular-nums
                                   text-slate-900 dark:text-slate-100">
                            {{ formatCurrency(row.anggaran) }}
                        </td>

                        <td class="px-3 py-3 align-middle text-center font-semibold
                                   text-sky-600 dark:text-sky-300">
                            {{ row.pekan }}
                        </td>

                        <td class="px-3 py-3 align-middle text-right tabular-nums
                                   text-slate-900 dark:text-slate-100">
                            {{ row.realisasi.toFixed(2) }}
                        </td>

                        <td class="px-3 py-3 align-middle text-center">
                            <button type="button" class="rounded-full border px-3 py-1 text-[10px] font-medium
                                       border-sky-200 bg-sky-50 text-sky-700
                                       hover:bg-sky-100
                                       dark:border-sky-500 dark:bg-sky-900 dark:text-sky-100
                                       dark:hover:bg-sky-800">
                                Lihat
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const jenjangOptions = ['SLB', 'SMK', 'SMA', 'SEMUA']
const provinsiOptions = ['SEMUA', 'Jawa Tengah', 'Jawa Barat', 'Jawa Timur']
const kabupatenOptions = ['SEMUA', 'Kota', 'Kabupaten']

const selectedJenjang = ref('SLB')
const selectedProvinsi = ref('SEMUA')
const selectedKabupaten = ref('SEMUA')
const searchQuery = ref('')

const rows = ref([
    {
        rank: 1,
        namaSekolah: 'SLB NEGERI WONOGIRI',
        npsn: '20341066',
        jumlahRuang: 11,
        jumlahMenu: 2,
        anggaran: 1994665000,
        pekan: 11,
        realisasi: 95.78,
    },
    {
        rank: 2,
        namaSekolah: 'SLB NEGERI SURAKARTA',
        npsn: '20327956',
        jumlahRuang: 3,
        jumlahMenu: 3,
        anggaran: 495328000,
        pekan: 15,
        realisasi: 95.68,
    },
    {
        rank: 3,
        namaSekolah: 'SKH MELATI CERIA PALANGKA RAYA',
        npsn: '30204701',
        jumlahRuang: 3,
        jumlahMenu: 2,
        anggaran: 575360000,
        pekan: 16,
        realisasi: 91.17,
    },
    {
        rank: 4,
        namaSekolah: 'SLB C YPALB KARANGANYAR',
        npsn: '20340980',
        jumlahRuang: 2,
        jumlahMenu: 1,
        anggaran: 254765000,
        pekan: 9,
        realisasi: 89.27,
    },
])

const filteredRows = computed(() => {
    const q = searchQuery.value.toLowerCase().trim()
    return rows.value.filter((row) => {
        const matchSearch =
            !q ||
            row.namaSekolah.toLowerCase().includes(q) ||
            row.npsn.toLowerCase().includes(q)
        return matchSearch
    })
})

const formatCurrency = (value) =>
    new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value)
</script>

<style scoped>
table {
    font-feature-settings: 'tnum' 1, 'lnum' 1;
}
</style>
