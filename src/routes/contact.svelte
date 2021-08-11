<script lang="ts">
  import Button from '$lib/Button.svelte';
  import PhoneIcon from 'svelte-icons/fa/FaPhone.svelte';
  import TelegramIcon from 'svelte-icons/fa/FaTelegram.svelte';
  import LocationIcon from 'svelte-icons/fa/FaLocationArrow.svelte';

  let nameEle: HTMLInputElement | null = null;
  let emailEle: HTMLInputElement | null = null;
  let messageEle: HTMLTextAreaElement | null = null;

  let loading = false;

  function onSubmit(e: any) {
    e.preventDefault();
    const name = nameEle?.value;
    const email = emailEle?.value;
    const message = messageEle?.value;
    loading = true;

    const obj = { name, email, message };

    // TODO: fetch
    setTimeout(() => {
      alert('submitted');
      console.log(obj);
      loading = false;
    }, 3000);
  }
</script>

<div class="flex flex-col ">
  <div class="flex flex-col md:flex-row">
    <!-- contact us -->
    <div class="flex flex-col">
      <p>Contact Us</p>
      <h1 class="text-3xl">Get in Touch</h1>
      <form class="flex flex-col" on:submit={onSubmit}>
        <input
          disabled={loading}
          class="bg-gray-100 m-4 p-2"
          type="text"
          placeholder="Name"
          bind:this={nameEle}
        />
        <input
          disabled={loading}
          class="bg-gray-100 m-4 p-2"
          type="email"
          placeholder="Email"
          bind:this={emailEle}
        />
        <textarea
          disabled={loading}
          class="bg-gray-100 m-4 p-2"
          bind:this={messageEle}
          placeholder="Message"
          rows={10}
        />
        <div class="flex justify-center">
          {#if loading}
            <div>Submitting...</div>
          {:else}
            <Button type="submit">Send</Button>
          {/if}
        </div>
      </form>
    </div>

    <!-- maps -->
    <div>
      <iframe
        title="Maps Direction"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.394979404742!2d92.27543221464367!3d26.118661583476033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375ac5d0a945ccad%3A0xa2d43dbaae5af8ec!2sSITAJAKHALA%20DUGDHA%20UTPADAK%20SAMABAI%20SAMITI%20LTD.!5e0!3m2!1sen!2sin!4v1628674039586!5m2!1sen!2sin"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen={false}
        loading="lazy"
      />
    </div>
  </div>

  <!-- Icons -->
  <ul class="flex flex-col md:flex-row my-8 justify-around h-36 w-full">
    <li class="flex flex-col">
      <a href="/" class="w-8"><PhoneIcon /></a>
      <span>PHONE</span>
      <span>+ (91) 9435064783</span>
    </li>
    <li class="flex flex-col">
      <a href="/" class="w-8"><TelegramIcon /></a>
      <span>PHONE</span>
      <span>+ (91) 9435064783</span>
    </li>
    <li class="flex flex-col">
      <a href="/" class="w-8" ><LocationIcon /></a>
      <span>PHONE</span>
      <span>+ (91) 9435064783</span>
    </li>
  </ul>
</div>

