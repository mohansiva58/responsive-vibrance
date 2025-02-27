
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export function useLazyLoad(imgRef: React.RefObject<HTMLImageElement>, src: string): void {
  if (!imgRef.current) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && imgRef.current) {
        imgRef.current.src = src;
        imgRef.current.classList.add('fade-in');
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(imgRef.current);
}
