'use client';

import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <section style={{
            minHeight: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            gap: '1rem',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
            }}>
              SOMETHING BROKE.
            </h2>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '0.04em',
              color: 'var(--text-secondary)',
              textTransform: 'none',
            }}>
              Try refreshing the page.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                padding: '1rem 2rem',
                border: '1px solid var(--border-color)',
                borderRadius: '100px',
                cursor: 'pointer',
                background: 'none',
                color: 'inherit',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}
            >
              TRY AGAIN →
            </button>
          </section>
        )
      );
    }

    return this.props.children;
  }
}
