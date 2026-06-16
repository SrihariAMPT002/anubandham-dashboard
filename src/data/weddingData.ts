import couplePhoto1 from "../DSC08165.JPG";
import couplePhoto2 from "../DSC08385.JPG";
import couplePhoto3 from "../DSC08390.JPG";

export type WeddingSideKey = "brideSide" | "groomSide";

export type WishesFrom = {
  siblings?: {
    boys: string[];
    girls: string[];
  };
  nephews: {
    boys: string[];
  };
};

export type HeroImage = {
  id: string;
  label: string;
  url: string;
};

export type WeddingEvent = {
  label: string;
  date: string;
  time?: string;
  venue: string;
  mapsUrl?: string;
};

export type InvitationDetails = {
  side: "bride" | "groom";
  intro: string;
  primaryName: string;
  primaryTitle: string;
  primaryParents?: string;
  partnerLabel: string;
  partnerName: string;
  partnerTitle: string;
  partnerParents?: string;
  events: WeddingEvent[];
  invitingFamily?: string;
  complimentsFrom?: string;
};

export type SideData = {
  greetingMessage: string;
  wishesFrom: WishesFrom;
  contacts: string[];
  heroImages: HeroImage[];
  invitation: InvitationDetails;
};

export type WeddingData = {
  brideSide: SideData;
  groomSide: SideData;
};

export const weddingData: WeddingData = {
  brideSide: {
    greetingMessage:
      "With immense joy, we invite you to celebrate the beautiful union of our loved ones. Please join us in showering the couple with love and blessings.",
    wishesFrom: {
      siblings: {
        boys: ["Karthik", "Srihari"],
        girls: ["Srirekha"],
      },
      nephews: {
        boys: ["Bhanuchandar", "Vignesh"],
      },
    },
    contacts: ["9885546917", "6309281904"],
    heroImages: [
      {
        id: "bride-1",
        label: "Together",
        url: couplePhoto1,
      },
      {
        id: "bride-2",
        label: "Together",
        url: couplePhoto2,
      },
      {
        id: "bride-3",
        label: "Together",
        url: couplePhoto3,
      },
    ],
    invitation: {
      side: "bride",
      intro:
        "We solicit your gracious presence with family & friends on the auspicious occasion of the marriage of our daughter",
      primaryName: "Chi. La. Sow. Sree Revathi",
      primaryTitle: "Sub-Inspector of Police",
      primaryParents: "Second D/o. Smt. Tagili Lakshmi & Sri Tagili Balaswamy",
      partnerLabel: "Groom",
      partnerName: "Chi. Praveen Kumar",
      partnerTitle: "Sub-Inspector of Police",
      partnerParents: "Only S/o. Smt. Namala Bharathi & Sri Namala Dharmapuri",
      events: [
        {
          label: "Prathanam",
          date: "Wednesday, 24 June 2026",
          time: "12:00 p.m. onwards",
          venue: "Our Residence, Peddakothapally, Nagar Kurnool Dist.",
          mapsUrl: "https://maps.app.goo.gl/NyTqDFzgx8ikRvjQ6",
        },
        {
          label: 'Sumuhurtham · "Karkataka Lagnam"',
          date: "Thursday, 25 June 2026",
          time: "09:12 a.m.",
          venue: "P.M.R. Gardens, Peddakothapally, Nagar Kurnool Dist.",
        },
      ],
      invitingFamily: "Smt. Tagili Lakshmi & Sri Tagili Balaswamy",
      complimentsFrom: "Smt. Maddela Renuka & Sri Maddela Raju, Near & Dear",
    },
  },
  groomSide: {
    greetingMessage:
      "With heartfelt warmth, my family and I invite you to witness and bless this joyous occasion of my wedding. Your presence will make our celebration complete.",
    wishesFrom: {
      nephews: {
        boys: ["Yogeshwar", "Akhilesh"],
      },
    },
    contacts: ["9951346368", "9848937139"],
    heroImages: [
      {
        id: "groom-1",
        label: "Together",
        url: couplePhoto1,
      },
      {
        id: "groom-2",
        label: "Together",
        url: couplePhoto2,
      },
      {
        id: "groom-3",
        label: "Together",
        url: couplePhoto3,
      },
    ],
    invitation: {
      side: "groom",
      intro:
        "We solicit your gracious presence with family & friends on the auspicious occasion of the marriage of our only son",
      primaryName: "Chi. Praveen Kumar",
      primaryTitle: "Sub-Inspector of Police",
      partnerLabel: "Bride",
      partnerName: "Chi. La. Sow. Sree Revathi",
      partnerTitle: "Sub-Inspector of Police",
      partnerParents: "Second D/o. Smt. Tagili Lakshmi & Sri Tagili Balaswamy",
      events: [
        {
          label: 'Sumuhurtham · "Karkataka Lagnam"',
          date: "Thursday, 25 June 2026",
          time: "09:12 a.m.",
          venue: "P.M.R. Gardens, Peddakothapally, Nagar Kurnool Dist.",
        },
        {
          label: "Reception",
          date: "Sunday, 28 June 2026",
          time: "7:00 p.m. onwards",
          venue: "Taher Gardens, Kamareddy Dist.",
        },
      ],
      invitingFamily: "Smt. Namala Bharathi & Sri Namala Dharmapuri",
      complimentsFrom: "Smt. Vendi Neeraja & Sri Vendi Naresh, Near & Dear",
    },
  },
};
