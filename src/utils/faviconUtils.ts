export const generateInitialsFavicon = (initials: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Set background
  ctx.fillStyle = 'hsl(6 100% 75%)'; // Using the primary color from our theme
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Set text properties
  ctx.fillStyle = 'white';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Draw initials
  ctx.fillText(initials, canvas.width / 2, canvas.height / 2);
  
  // Convert to favicon
  const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  if (!favicon) {
    const newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    document.head.appendChild(newFavicon);
  }
  
  const dataUrl = canvas.toDataURL('image/png');
  const faviconElement = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  faviconElement.href = dataUrl;
};