import CardCarousel from "./CardCarousel";

import img7 from "../assets/ActivityCards/img-7.jpg";

import videoThumb1 from "../assets/ActivityCards/video-thumb-1.jpg";
import videoThumb2 from "../assets/ActivityCards/video-thumb-2.jpg";
import videoThumb3 from "../assets/ActivityCards/video-thumb-3.jpg";

import video1 from "../assets/ActivityCards/video-1.mp4";
import video2 from "../assets/ActivityCards/video-2.mp4";
import video3 from "../assets/ActivityCards/video-3.mp4";

const activitiesCards = [
  {
      type: "image",
      title: "Best Project Award",
      caption:
        "Our team secured first place in ImpactThon.",
      image: img7,
      link: "https://www.linkedin.com/posts/mmpsrpc_ksv-svkm-mmpsrpc-activity-7407377566589759488-qigD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
    },
  {
    type: "video",
    caption:
      "Students presenting research at IEEE Conference.",
    thumbnail: videoThumb1,
    video: video1,
    link: "https://www.linkedin.com/posts/mmpsrpc_ksv-svkm-mmpsrc-activity-7413813644284682240-u9XF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
  },
  {
    type: "video",
    caption:
      "Celebrating achievements and milestones.",
    thumbnail: videoThumb2,
    video: video2,
    link: "https://www.linkedin.com/posts/mmpsrpc_ksv-svkm-mmpsrpc-activity-7417800043421843456-rV2a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
  },
  {
    type: "video",
    caption:
      "Celebrating achievements and milestones.",
    thumbnail: videoThumb3,
    video: video3,
    link: "https://www.linkedin.com/posts/mmpsrpc_mmpsrpc-ksv-svkm-activity-7412364021376413696-DFUn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJiBFMBBjWJQ8FYFoDQDvjaardrEEtrUsI",
  },
];

export default function Activities() {
  return (
    <CardCarousel
      title="Activities"
      cards={activitiesCards}
    />
  );
}
