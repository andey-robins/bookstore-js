<script lang="ts">
    import type { PageData } from './$types';
  
    export let data: PageData;
</script>

<div class="text-center">
    <h1 class="text-2xl pb-5">Blog Home</h1>
    <p class="text-lg pb-3">Below you'll find all my thoughts on writing and life :)</p>
    
    {@html data.posts}
</div>
