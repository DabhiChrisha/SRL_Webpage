import CardCarousel from "./CardCarousel";

import img1 from "../assets/ActivityCards/img-1.jpg";
import img2 from "../assets/ActivityCards/img-2.jpg";
import img3 from "../assets/ActivityCards/img-3.jpg";
import img4 from "../assets/ActivityCards/img-4.jpg";
import img5 from "../assets/ActivityCards/img-5.jpg";
import img6 from "../assets/ActivityCards/img-6.jpg";

const achievementsCards = [
  {
    type: "image",
    title: "Best Project Award",
    caption:
      "Our team secured first place in ImpactThon.",
    image: img4,
    link: "https://www.linkedin.com/posts/mmpsrpc_svkm-ksv-mmprc-activity-7428803534722068480-m68o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
  },
  {
    type: "image",
    title: "Best Project Award",
    caption:
      "Our team secured first place in ImpactThon.",
    image: img5,
    link: "https://www.linkedin.com/posts/mmpsrpc_edunetfoundation-ksv-svkm-activity-7429557690068017152-W3eO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
  },
  {
    type: "image",
    title: "Best Project Award",
    caption:
      "Our team secured first place in ImpactThon.",
    image: img6,
    link: "https://www.linkedin.com/posts/mmpsrpc_mmpsrpc-srl-ksv-activity-7419418359429115904-bOge?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
  },
    {
    type: "image",
    title: "Best Project Award",
    caption:
      "Our team secured first place in ImpactThon.",
    image: img1,
    link: "https://www.linkedin.com/posts/mmpsrpc_ksv-svkm-mmpsrpc-activity-7407377566589759488-qigD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
  },
  {
    type: "image",
    title: "National Recognition",
    caption:
      "Recognized at national level technical competition.",
    image: img2,
    link: "https://www.linkedin.com/posts/mmpsrpc_ksv-researchexcellence-studentachievement-activity-7412352256806920192-MoVv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
  },
  {
    type: "image",
    title: "IEEE Appreciation",
    caption:
      "Honored for outstanding contribution to SRL.",
    image: img3,
    link: "https://www.linkedin.com/posts/mmpsrpc_ksv-ldrpitr-mmpsrpc-activity-7413814908217344000-JmvS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
  },
];

export default function Achievements() {
  return (
    <CardCarousel
      title="Achievements"
      cards={achievementsCards}
      sectionId="achievements"
    />
  );
}
