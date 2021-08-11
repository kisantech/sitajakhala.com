<script lang="ts">
  import Logo from '../assets/sitajakhala_logo.png';
  import FooterList from './FooterList.svelte';
</script>

<footer class="flex justify-around items-start flex-col md:flex-row p-16">
  <div class="my-4 md:my-2 w-full md:w-1/4">
    <img alt="SJ-logo" src={Logo} />
    <div>
      An indigenous brand of Assam with pasteurized milk and its products.
    </div>
  </div>

  <div class="w-full md:w-1/4">
    <FooterList
      title="SITEMAP"
      entries={[
        ['TENDERS', '/tenders'],
        ['CONTACT', '/contact'],
        ['ABOUT', '/about']
      ]}
    />
  </div>

  <hr class="md:hidden my-4" />

  <div class="w-full md:w-1/4">
    <FooterList
      title="FOLLOW US"
      entries={[
        ['FACEBOOK', '/facebook'],
        ['TWITTER', '/twitter'],
        ['INSTAGRAM', '/instagram']
      ]}
    />
  </div>
</footer>

