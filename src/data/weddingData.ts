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
      "With immense joy, I invite you to celebrate the beautiful union of my sister. Please join us in showering the couple with love and blessings.",
    wishesFrom: {
      siblings: {
        boys: ["Sri [Elder Brother]", "Sri [Younger Brother]"],
        girls: ["Smt. [Sister]"],
      },
      nephews: {
        boys: ["Master [Nephew]", "Master [Nephew]"],
      },
    },
    contacts: ["9885546917", "6309281904"],
    heroImages: [
      {
        id: "bride-1",
        label: "Sree Revathi",
        url: "https://images.unsplash.com/photo-1522673604730-dc317f1a5f1d?w=480&h=600&fit=crop",
      },
      {
        id: "bride-2",
        label: "Family Moments",
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=480&h=600&fit=crop",
      },
      {
        id: "bride-3",
        label: "Together",
        url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=480&h=600&fit=crop",
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
        },
        {
          label: 'Sumuhurtham · "Karkataka Lagnam"',
          date: "Thursday, 25 June 2026",
          time: "09:12 a.m.",
          venue: "P.M.R. Gardens, Peddakothapally, Nagar Kurnool Dist.",
        },
      ],
    },
  },
  groomSide: {
    greetingMessage:
      "With heartfelt warmth, our family invites you to witness and bless the wedding of our son. Your presence will make our celebration complete.",
    wishesFrom: {
      nephews: {
        boys: ["Master [Nephew]", "Master [Nephew]"],
      },
    },
    contacts: ["9951346368", "9848937139"],
    heroImages: [
      {
        id: "groom-1",
        label: "Praveen Kumar",
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=480&h=600&fit=crop",
      },
      {
        id: "groom-2",
        label: "Family Moments",
        url: "https://images.unsplash.com/photo-1520854221256-174b7ce0ef89?w=480&h=600&fit=crop",
      },
      {
        id: "groom-3",
        label: "Together",
        url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=480&h=600&fit=crop",
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
    },
  },
};
