<script>
    import { page } from '$app/stores';
</script>

<div class="text-center py-10">
    <p class="text-3xl text-slate-900">{$page.status}</p>
    <p class="text-lg italic text-slate-700">{$page.error?.message}</p>
</div>