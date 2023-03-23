export function detectDeviceType (): 'mobile' | 'tablet' | 'desktop' {
  const ua = navigator.userAgent
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    if (/<mark>(Tablet_iPad)/i.test(ua)) {
      return 'tablet'
    }
    return 'mobile'
  }
  return 'desktop'
}
