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

<div class="flex flex-col w-full h-full gap-8 p-16">
  <p class="text-5xl text-center font-bold">Commish</p>
  <div class="flex flex-row gap-8 justify-center">
    <button 
      on:click={createAccount}
      class="px-4 py-2 border border-black rounded-xl text-black bg-white hover:text-white hover:bg-black transition-colors duration-150"
    >
      Start with Stripe 
    </button>
    <button 
      on:click={login}
      class="px-4 py-2 border border-black rounded-xl text-black bg-white hover:text-white hover:bg-black transition-colors duration-150"
    >
      Login
    </button>
  </div>
</div>
