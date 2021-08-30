export interface ITender {
  title: string;
  date: string;
  description: string;
  link: string;
}
const tenders: ITender[] = [
  {
    title: 'Corrigendum - THREE',
    date: '25 August 2021',
    description: 'Tender Notice No: IDVC/SITA/2020-21/2020-21/015',
    link: '/CORRIGENDUM_TWO.pdf'
  },
  {
    title: 'Corrigendum - TWO',
    date: '04 April 2021',
    description: 'Tender Notice No: IDVC/SITA/2020-21/2020-21/015',
    link: '/CORRIGENDUM_THREE.pdf'
  },

  {
    title: 'Corrigendum',
    date: 'March 4, 2021',
    description: `Tender Notice No: NO: IDVC/SITA/2020-21/2020-21/015 DATED: 24-02-2021
The last date and time of submission is extended to 08-04-2021 up to 5:00 pm & will be opened on 09-03-2021.`,
    link: '/CORRIGENDUM.pdf'
  },
  {
    title: 'Invitation of Tenders',
    date: 'February 24, 2021',
    description: `
Nature of Tender- Tender for purchase of Silage Baler, Custom design Baler and Tractor mounted forage harvester at Sitajakhala Dugdha Utpadak Samabai Samiti Ltd, Roumari, Amlighat, Jagiroad, Dist: Morigaon, Assam under Chief Minister Samagra Gramya Unnayan Yojana, Government of Assam.
Quotations in sealed envelopes are invited from Manufacturers/ Authorized Distributors/Seller of Silage Baler, Custom design Baler and Tractor mounted Forage Harvester by the Member Secretary, District Level Committee, IDVC AMMEMS & VISION SITAJAKHALA, Sitajakhala DUSS Ltd, Roumari, Amlighat, Morigaon, Assam, 782413 under Chief Minister Samagra Gramya Unnayan Yojana, Govt. of Assam as per specification given in Annexure-A enclosed herewith. The details of the tender schedule are as below:
    `,
    link: '/bid_document_silage.pdf'
  },

  {
    title: 'Tender Notice',
    date: 'February 24, 2021',
    description: `Sealed quotations are invited from reputed manufacturers/authorized dealers/suppliers for supply
    Silage Baler, Custom design Baler and Tractor mounted Forage Harvester. The quotation may be obtained w.e.f. 25-02-2021 from the office of the undersigned personally or by sending a self-addressed stamped (Rs.25/-) envelope on payment of Rs.200/- (Rupees Two Hundred) only in the form of crossed IPO/DD drawn in favor of “IDVC-AMMEMS & Vision Sitajakhala” payable at Jagiroad, and bid security amounting to 2% of the quoted price in the form of a Demand Draft/ Call Deposit in favor of “IDVC-AMMEMS & Vision Sitajakhala” payable at Jagiroad, separately for each item quoted, which will be received by the undersigned up to 5.00 PM on 08-03-2021 and will be opened on 09-03-2021 at 11:00 AM.`,
    link: '/TENDER_NOTICE.pdf'
  },
  {
    title: 'Sitajakhala',
    date: 'February 24, 2021',
    description: `
SITAJAKHALA DUGDHA UTPADAK SAMABAI SAMITI LTD

www.sitajakhala.com

email:-sjdussltd@yahoo.com


Society at a glance :


SITAJAKHALA DUGDHA UTPADAK SAMABAI SAMITI LTD
Established: 1958 (Regd. No.67/58-59, Amlighat)
Head office: Amlighat, Dist:-Morigaon, Assam, 782410


How and why the Society was formed :


During the period of establishment, it was viewed that the Production of milk in villages surrounding Amlighat was substantial,
But the producers were deprived of a legitimate price because of an unorganized marketing system. So some socially conscious people thought about collecting the production and sell it through organized marketing. This thought was the nutshell of inspiration behind the formation of this cooperative society
    `,
    link: '/SITAJAKHALA_at_a_glance.pdf'
  }
];
export default tenders;
