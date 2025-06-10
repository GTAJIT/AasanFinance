import React from 'react';
import styled from 'styled-components';

const ThemeSwitch = () => {
  return (
    <StyledWrapper>
      <div role="radiogroup" className="theme-switcher">
        <button type="button" role="radio" data-theme-switcher="true" data-active="false" className="theme-switcher_switch" aria-label="Switch to light theme" aria-checked="false">
          <svg style={{color: 'currentcolor', width: 16, height: 16}} width={24} viewBox="0 0 24 24" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" shapeRendering="geometricPrecision" height={24} fill="none" data-testid="geist-icon" className="icon">
            <circle r={5} cy={12} cx={12} />
            <path d="M12 1v2" />
            <path d="M12 21v2" />
            <path d="M4.22 4.22l1.42 1.42" />
            <path d="M18.36 18.36l1.42 1.42" />
            <path d="M1 12h2" />
            <path d="M21 12h2" />
            <path d="M4.22 19.78l1.42-1.42" />
            <path d="M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
        <button type="button" role="radio" data-theme-switcher="true" data-active="false" className="theme-switcher_switch" aria-label="Switch to system theme" aria-checked="false">
          <svg style={{color: 'currentcolor', width: 16, height: 16}} width={24} viewBox="0 0 24 24" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" shapeRendering="geometricPrecision" height={24} fill="none" data-testid="geist-icon" className="icon">
            <rect ry={2} rx={2} height={14} width={20} y={3} x={2} />
            <path d="M8 21h8" />
            <path d="M12 17v4" />
          </svg>
        </button>
        <button type="button" role="radio" data-theme-switcher="true" data-active="true" className="theme-switcher_switch" aria-label="Switch to dark theme" aria-checked="true">
          <svg style={{color: 'currentcolor', width: 16, height: 16}} width={24} viewBox="0 0 24 24" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" shapeRendering="geometricPrecision" height={24} fill="none" data-testid="geist-icon" className="icon">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .theme-switcher {
    padding: 3px;
    width: -moz-fit-content;
    width: fit-content;
    display: flex;
    border-radius: 9999px;
    border: 1px solid grey;
  }

  .theme-switcher_switch {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    border: 0;
    background: none;
    cursor: pointer;
  }

  .theme-switcher_switch:hover > .icon {
    stroke: #323232;
  }

  .theme-switcher_switch:active {
    background-color: rgba(128, 128, 128, 0.35);
  }

  .theme-switcher_switch:active > .icon {
    stroke: white;
  }`;

export default ThemeSwitch;