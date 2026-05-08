import { render, screen, fireEvent } from '@testing-library/react';
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

test('should toggle theme when switch is clicked and body background color changes', () => {
  render(<App />);

  // Find the switch (it should be the only one)
  const themeSwitch = screen.getByRole('switch');

  // Initial state: Light mode
  // CssBaseline with light theme typically results in body background of white.
  // MUI default light theme background is #fff -> rgb(255, 255, 255)
  expect(themeSwitch.checked).toBe(false);
  expect(getComputedStyle(document.body).backgroundColor).toBe('rgb(255, 255, 255)');

  // Click the switch to toggle to dark mode
  fireEvent.click(themeSwitch);

  // Check if it's now checked and body background reflects dark theme
  // darkTheme.palette.background.default is '#121212' -> rgb(18, 18, 18)
  expect(themeSwitch.checked).toBe(true);
  expect(getComputedStyle(document.body).backgroundColor).toBe('rgb(18, 18, 18)');

  // Click again to toggle back to light mode
  fireEvent.click(themeSwitch);
  expect(themeSwitch.checked).toBe(false);
  expect(getComputedStyle(document.body).backgroundColor).toBe('rgb(255, 255, 255)');
});

test('renders post-Bridgestone experience entries', () => {
  render(<App />);

  expect(screen.getAllByText('HearClara').length).toBeGreaterThan(0);
  expect(screen.getByText('Founder & Developer')).toBeTruthy();
  expect(screen.getByText('Operating Partner | Strategy & Operational Execution')).toBeTruthy();
  expect(screen.getAllByText('Thermo Fisher Scientific').length).toBeGreaterThan(0);
  expect(screen.getByText('Senior Director of Operations')).toBeTruthy();
});
