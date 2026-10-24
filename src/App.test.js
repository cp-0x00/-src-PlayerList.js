import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Enterprise Architecture Integration Testing Suite.
 * Validates that structural component assemblies initialize safely 
 * and verify the presence of core layout boundaries.
 */
describe('Root Core Application Structural Integration Tests', () => {
    
    test('renders main dashboard header layout without runtime exceptions', () => {
        render(<App />);
        
        // Assert that the newly injected primary enterprise header is live in the document DOM
        const primaryHeaderElement = screen.getByRole('heading', { level: 1, name: /FIFA Player Cards/i });
        expect(primaryHeaderElement).toBeInTheDocument();
    });

    test('verifies presence of defensive profile matrix subtext description', () => {
        render(<App />);
        
        // Assert that our custom framework data layer description string successfully prints to view
        const subtextElement = screen.getByText(/Production-Grade Full-Stack Roster Matrix Data Interface/i);
        expect(subtextElement).toBeInTheDocument();
    });
});
