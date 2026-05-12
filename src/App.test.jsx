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
  expect(getComputedStyle(document.body).backgroundColor).toBe('rgb(18, 18, 18)');
});

test('links HearClara logo and company name to the website', () => {
  render(<App />);

  const hearClaraLinks = screen.getAllByRole('link', { name: /hearclara/i });

  expect(hearClaraLinks).toHaveLength(2);
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
  expect(screen.getByText('Operating Partner | Strategy & Operational Execution')).toBeTruthy();
  expect(screen.getAllByText('Thermo Fisher Scientific').length).toBeGreaterThan(0);
  expect(screen.getByText('Senior Director of Operations')).toBeTruthy();
});
