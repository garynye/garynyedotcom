import { render, screen } from '@testing-library/react';
import App from './App.jsx';

// Mock matchMedia
beforeAll(() => {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
});

test('uses dark mode without rendering a theme switch', () => {
  render(<App />);

  expect(screen.queryByRole('switch')).toBeNull();
  expect(getComputedStyle(document.body).backgroundColor).toBe('rgb(7, 11, 16)');
});

test('links HearClara logo and company name to the website', () => {
  render(<App />);

  const hearClaraLinks = screen.getAllByRole('link', { name: /hearclara/i });

  expect(hearClaraLinks).toHaveLength(3);
  hearClaraLinks.forEach((link) => {
    expect(link.getAttribute('href')).toBe('https://hearclara.com');
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  });
});

test('renders post-Bridgestone experience entries', () => {
  render(<App />);

  expect(screen.getAllByText('HearClara').length).toBeGreaterThan(0);
  expect(screen.getByText('Founder & Developer')).toBeTruthy();
  expect(screen.queryByText('Operating Partner | Strategy & Operational Execution')).toBeNull();
  expect(screen.getAllByText('Thermo Fisher Scientific').length).toBeGreaterThan(0);
  expect(screen.getByText('Senior Director of Operations')).toBeTruthy();
});

test('renders the premium journey section with accordion summaries', () => {
  render(<App />);

  expect(screen.getByRole('region', { name: /my journey/i })).toBeTruthy();
  expect(screen.getByText(/Bootstrapped and developed HearClara/i)).toBeTruthy();
  expect(screen.getByText(/Directed enterprise-wide operations and supply chain strategy/i)).toBeTruthy();
  expect(screen.getByText(/Bridgestone Mobility Solutions is a business unit/i)).toBeTruthy();
});
