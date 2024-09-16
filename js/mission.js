const paragraphs = [
    "At SigmaMind, our mission is to shape the future by pioneering cutting-edge AI and deep learning solutions that empower businesses, industries, and society. We are committed to pushing the boundaries of technology, creating innovative AI systems that are both intelligent and ethical.",
    "Our vision is to harness the power of data and machine learning to solve real-world challenges, whether it's revolutionizing healthcare, transforming business operations, or enabling smarter cities. Through relentless research and development, we strive to build scalable, sustainable, and responsible AI technologies that drive meaningful change.",
    "By integrating cross-disciplinary expertise and fostering innovation, SigmaMind is dedicated to empowering our partners with AI-driven insights and solutions that are future-proof and globally impactful. Our goal is to be at the forefront of AI innovation, delivering results that not only advance technology but also elevate the human experience.",
  ];
  
  let paragraphIndex = 0;
  let textElement = document.getElementById('missionText');
  let typingSpeed = 45; // typing speed in milliseconds
  let deletingSpeed = 20;
  let pauseBetweenParagraphs = 2000; // pause before typing the next paragraph
  
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
  