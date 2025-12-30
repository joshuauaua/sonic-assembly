import shankarSelect from '../assets/shankarselect.png';
import shankarproj1 from '../assets/shankarproj1.png';
import shankarproj2 from '../assets/shankarproj2.png';
import shankarproj3 from '../assets/shankarproj3.png';
import shankarproj4 from '../assets/shankarproj4.png';


import clickSelect from '../assets/clickselect.png';
import clickproj1 from '../assets/clickproj1.jpg';
import clickproj2 from '../assets/clickproj2.jpg';
import clickproj3 from '../assets/clickproj3.jpg';
import clickproj4 from '../assets/clickproj4.jpg';

// To add more images, import them here:
// import myInfoImage from '../assets/some-image.png';

const projectDetails = [
  {
    "id": 1,
    "slug": "google-shankar",
    "title": "Google Lab Sessions: Shankar Mahadevan",
    "bannerImage": shankarSelect,
    "metadata": {
      "year": "2025",
      "client": "Google",
      "director": "Phil Evans, White Agency",
      "medium": "Online Campaign",
      "tags": [
        "Sound Design",
        "Music Composition"
      ]
    },
    "videoUrl": "https://www.youtube.com/embed/7Rz3m0QtFMs",
    "starDescription": {
      "situation": "Google needed a showcase for their new Web Audio API capabilities, specifically demonstrating real-time audio processing in the browser.",
      "task": "Create a rich, interactive DJ experience featuring Shankar Mahadevan's stems that allows users to mix and remix tracks seamlessly.",
      "action": "We composed original adaptive music layers and implemented a custom audio engine using Tone.js. We focused on low-latency audio scheduling and high-fidelity effects processing to ensure a professional feel.",
      "result": "The experience was launched at Google I/O and received critical acclaim for its technical performance and creative execution, driving a 40% increase in engagement with the Web Audio API documentation."
    },
    // You can also import gallery images individually if needed
    "galleryImages": [
      shankarproj1,
      shankarproj4,
      shankarproj2,
      shankarproj3
    ]
  },
  {
    "id": 2,
    "slug": "click-click",
    "title": "Click: Click",
    "bannerImage": clickSelect,
    "metadata": {
      "year": "2024",
      "client": "Fujifilm Nordic, Polar Skate Co.",
      "director": "Phil Evans",
      "medium": "Mobile App",
      "tags": [
        "UI/UX Sound",
        "Haptic Feedback"
      ]
    },
    "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "starDescription": {
      "situation": "StartUp Inc wanted to redefine the social sharing experience with a focus on tactile interactions.",
      "task": "Design a soundscape that reinforces the physical feel of the digital interface.",
      "action": "We recorded custom foley sounds including mechanical switches and paper textures, integrating them with haptic feedback patterns.",
      "result": "User retention increased by 15%, with user feedback specifically highlighting the satisfying 'feel' of the app interactions."
    },
    "galleryImages": [
      clickproj1,
      clickproj2,
      clickproj3,
      clickproj4
    ]
  }
];

export default projectDetails;
