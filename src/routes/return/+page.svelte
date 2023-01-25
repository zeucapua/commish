<script lang="ts">
  import { page } from "$app/stores";
  let data = $page.url.searchParams.get("code");
</script>

<p>Refresh Auth</p>
{#if data}
  <p>{data}</p>
{:else}
  <p>There is no authentication code.</p>
{/if}
