import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export interface LeadSource {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  ref?: string;
  plan?: string;
  module?: string;
  solution?: string;
}

export const useLeadSource = () => {
  const [source, setSource] = useState<LeadSource>({});
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const captured: LeadSource = {
      utm_source: params.get('utm_source') || undefined,
      utm_medium: params.get('utm_medium') || undefined,
      utm_campaign: params.get('utm_campaign') || undefined,
      utm_term: params.get('utm_term') || undefined,
      utm_content: params.get('utm_content') || undefined,
      ref: params.get('ref') || undefined,
      plan: params.get('plan') || undefined,
      module: params.get('module') || undefined,
      solution: params.get('solution') || undefined,
    };
    setSource(captured);
  }, [location.search]);

  const getMailtoBodyString = (formData: Record<string, any>) => {
    let body = 'Form Responses:\n\n';
    Object.entries(formData).forEach(([key, value]) => {
      body += `${key}: ${Array.isArray(value) ? value.join(', ') : value}\n`;
    });

    body += '\n--- Lead Source Info ---\n';
    Object.entries(source).forEach(([key, value]) => {
      if (value) body += `${key}: ${value}\n`;
    });

    return body;
  };

  return { source, getMailtoBodyString };
};
