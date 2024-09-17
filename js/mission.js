const paragraphs = [
    "At SigmaMind, our mission is to revolutionize the world of content creation through innovative AI and deep learning solutions. We aim to solve the challenges faced by modern creators who struggle to manage multiple platforms and maintain content originality. By leveraging our cutting-edge research, we are building systems that enable creators to focus on what matters—crafting unique content—while we manage distribution, authenticity, and scalability.",
    "Our vision is to lead a new era of content creation powered by AI, starting with music generation and expanding to tackle issues like fake news and deep fakes. We are focused on producing original, AI-driven content that empowers creators across industries, allowing them to grow quickly without the limitations of platform management or concerns about content authenticity. With AI, we believe creators can achieve unprecedented levels of innovation and impact.",
    // "SigmaMind is dedicated to changing the way content is created and managed by leveraging AI to help artists and content creators thrive. Our goal is to remove the barriers of platform juggling, and ensure originality, while empowering creators with AI-driven insights and solutions. Through our research and development, we strive to foster growth for our partners and users, delivering scalable and impactful content solutions that stand out in today’s fast-paced digital landscape.",
  ];
  
  let paragraphIndex = 0;
  let textElement = document.getElementById('missionText');
  let typingSpeed = 40; // typing speed in milliseconds
  let deletingSpeed = 15;
  let pauseBetweenParagraphs = 3000; // pause before typing the next paragraph
  
  function typeParagraph(text, index = 0) {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      setTimeout(() => typeParagraph(text, index + 1), typingSpeed);
    } else {
      setTimeout(deleteParagraph, pauseBetweenParagraphs);
    }
  }
  
  function deleteParagraph() {
    let text = textElement.innerHTML;
    if (text.length > 0) {
      textElement.innerHTML = text.substring(0, text.length - 1);
      setTimeout(deleteParagraph, deletingSpeed);
    } else {
      paragraphIndex = (paragraphIndex + 1) % paragraphs.length;
      setTimeout(() => typeParagraph(paragraphs[paragraphIndex]), typingSpeed);
    }
  }
  
  // Ensure that the script starts once the document is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => typeParagraph(paragraphs[paragraphIndex]), 1000); // Initial delay before typing starts
  });
  