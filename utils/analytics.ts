// Global type definitions for Google Analytics (gtag.js)
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js',
      action: string | Date,
      params?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Type-Safe Analytics Helper Utility for Google Analytics 4 (GA4).
 * Safely guards against SSR environments and verifies window.gtag existence before dispatching.
 *
 * @param eventName - The GA4 event name (e.g. 'generate_lead', 'consultation_inquiry')
 * @param params - Optional key-value parameters to attach to the event
 */
export function trackEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  } catch (error) {
    // Fail silently in development/staging to avoid interrupting user flows
    console.debug(`[Analytics] Could not dispatch event "${eventName}":`, error);
  }
}
