<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Spinner from '$lib/Spinner.svelte';
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

    if (name.length > 0 || email.length > 0 || message.length > 0) {
      fetch('https://api.sitajakhala.com/sitajakhala_com_contact', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((_) => {
          alert('Thank you for your response!');
        })
        .catch((err) => {
          alert(err.message + ' | Please try again');
        });
    } else {
      alert("Name, Email, Message boxes shouldn't be empty");
    }
  }
</script>

<svelte:head>
  <title>Contact Sitajakhala</title>
</svelte:head>

<div
  class="my-4 md:my-16 p-4 md:p-16 flex flex-col justify-center"
  style="background: #f1faff; box-shadow: 0px -7px 60px 20px #f1faff;"
>
  <div class="flex flex-col my-8 md:flex-row justify-center items-center">
    <!-- contact us -->
    <div class="flex flex-col w-full md:w-1/2 p-4">
      <p class="my-2 text-blue-500 text-center text-lg">Contact Us</p>
      <h1 class="my-2 text-3xl md:text-6xl text-yellow-400 text-center">Get in Touch</h1>
      <form class="flex flex-col w-full" on:submit={onSubmit}>
        <input
          disabled={loading}
          class="bg-white m-4 p-2 rounded-2xl"
          type="text"
          placeholder="Name"
          bind:this={nameEle}
        />
        <input
          disabled={loading}
          class="bg-white rounded-2xl m-4 p-2"
          type="email"
          placeholder="Email"
          bind:this={emailEle}
        />
        <textarea
          disabled={loading}
          class="bg-white m-4 p-2 rounded-2xl"
          bind:this={messageEle}
          placeholder="Message"
          rows={10}
        />
        <div class="flex justify-center">
          <Button disabled={loading} type="submit">
            {#if loading}
              <Spinner />
            {:else}
              <span>Send</span>
            {/if}
          </Button>
        </div>
      </form>
    </div>

    <hr class="md:hidden my-2" />

    <!-- maps -->
    <div class="w-full md:w-1/2 h-100%">
      <iframe
        title="Maps Direction"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.394979404742!2d92.27543221464367!3d26.118661583476033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375ac5d0a945ccad%3A0xa2d43dbaae5af8ec!2sSITAJAKHALA%20DUGDHA%20UTPADAK%20SAMABAI%20SAMITI%20LTD.!5e0!3m2!1sen!2sin!4v1628674039586!5m2!1sen!2sin"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen={false}
        loading="lazy"
      />
    </div>
  </div>

  <!-- Icons -->
  <ul class="flex flex-col text-center md:flex-row my-8 justify-around w-full">
    <li class="w-full md:w-1/4">
      <a href="tel:+919435064783" class="flex flex-col items-center">
        <span class="text-yellow-400 w-10 my-4"><PhoneIcon /></span>
        <span>PHONE</span>
        <span class="text-gray-500">+ (91) 9435064783</span>
      </a>
    </li>
    <li class="w-full md:w-1/4">
      <a href="mailto:support@sitajakhala.com" class="flex flex-col items-center">
        <span class="text-yellow-400 w-10 my-4"><TelegramIcon /></span>
        <span>E-MAIL</span>
        <span class="text-gray-500">contact@sitajakhala.com</span>
      </a>
    </li>
    <li class="w-full md:w-1/4">
      <a href="https://goo.gl/maps/FRnhzuqBVsYLQUjM6" class="flex flex-col items-center">
        <span class="text-yellow-400 w-12 my-4"><LocationIcon /></span>
        <span>ADDRESS</span>
        <span class="text-gray-500">
          SITAJAKHALA DUGDHA UTPADAK SAMABAI SAMITI LTD., Amlighat, Assam 782413
        </span>
      </a>
    </li>
  </ul>
</div>

