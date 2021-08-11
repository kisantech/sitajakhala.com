<script lang="ts">
  import Logo from '../header/sitajakhala_logo.png';
  import FooterList from './FooterList.svelte';
</script>

<footer class="flex items-start flex-col md:flex-row">
  <div class="md:flex-1">
    <img alt="SJ-logo" src={Logo} />
    <div>
      An indigenous brand of Assam with pasteurized milk and its products.
    </div>
  </div>

  <div class="md:flex-1">
    <FooterList
      title="SITEMAP"
      entries={[
        ['TENDER', '/tenders'],
        ['CONTACT', '/contact'],
        ['ABOUT', '/about']
      ]}
    />
  </div>

  <div class="md:flex-1">
    <p>FOLLOW US</p>
    <ul>
      <li>Facebook</li>
      <li>Twitter</li>
      <li>Instagram</li>
    </ul>
  </div>
</footer>

