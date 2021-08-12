import FacebookIcon from 'svelte-icons/fa/FaFacebook.svelte';
import TwitterIcon from 'svelte-icons/fa/FaTwitter.svelte';
import InstagramIcon from 'svelte-icons/fa/FaInstagram.svelte';

export interface ISocialMedia {
  name: string,
  link: string,
  color: string,
  icon: any
}

const medias: ISocialMedia[] = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/Sitajakhala-164289385728627/',
    color: '#1873eb',
    icon: FacebookIcon
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/sitajakhala',
    color: '#1c9be9',
    icon: TwitterIcon
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/invites/contact/?i=fuodym3j0g9u&utm_content=mbwz4q9',
    color: '#c92460',
    icon: InstagramIcon
  }
];

export default medias;
