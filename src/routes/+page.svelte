<script lang="ts">
  import { goto } from "$app/navigation";

  async function createAccount() {
    const response = await fetch("/api/stripe-create", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' } 
    });
    const { accountLink } = await response.json();
    goto(accountLink.url);
  }

  async function login() {
     
  }
</script>

<p>Commish</p>

<button on:click={createAccount}>Create Connect Account</button>
<button on:click={login}>Login</button>
