import React from 'react';

export default function Loading(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="lds-square"
      width={100}
      height={100}
      {...props}
    >
      <path fill="#1eb9dd" d="M9.169 9.169H30.83V30.83H9.17z">
        <animateTransform
          attributeName="transform"
          type="scale"
          calcMode="spline"
          values="1;1;0.2;1;1"
          keyTimes="0;0.2;0.5;0.8;1"
          dur="1s"
          keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
          begin="-0.4s"
          repeatCount="indefinite"
        />
      </path>
      <path fill="#272f3b" d="M43.194 13.194h13.612v13.612H43.194z">
        <animateTransform
          attributeName="transform"
          type="scale"
          calcMode="spline"
          values="1;1;0.2;1;1"
          keyTimes="0;0.2;0.5;0.8;1"
          dur="1s"
          keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
          begin="-0.3s"
          repeatCount="indefinite"
        />
      </path>
      <path fill="#f5eb69" d="M76.669 16.669h6.662v6.662H76.67z">
        <animateTransform
          attributeName="transform"
          type="scale"
          calcMode="spline"
          values="1;1;0.2;1;1"
          keyTimes="0;0.2;0.5;0.8;1"
          dur="1s"
          keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
          begin="-0.2s"
          repeatCount="indefinite"
        />
      </path>
      <path fill="#272f3b" d="M13.194 43.194h13.612v13.612H13.194z">
        <animateTransform
          attributeName="transform"
          type="scale"
          calcMode="spline"
          values="1;1;0.2;1;1"
          keyTimes="0;0.2;0.5;0.8;1"
          dur="1s"
          keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
          begin="-0.3s"
          repeatCount="indefinite"
        />
      </path>
      <path fill="#f5eb69" d="M46.669 46.669h6.662v6.662H46.67z">
        <animateTransform
          attributeName="transform"
          type="scale"
          calcMode="spline"
          values="1;1;0.2;1;1"
          keyTimes="0;0.2;0.5;0.8;1"
          dur="1s"
          keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
          begin="-0.2s"
          repeatCount="indefinite"
        />
      </path>
      <path fill="#272f3b" d="M74.428 44.428h11.144v11.144H74.428z">
        <animateTransform
          attributeName="transform"
          type="scale"
          calcMode="spline"
          values="1;1;0.2;1;1"
          keyTimes="0;0.2;0.5;0.8;1"
          dur="1s"
          keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
          begin="-0.1s"
          repeatCount="indefinite"
        />
      </path>
      <path fill="#f5eb69" d="M16.669 76.669h6.662v6.662H16.67z">
        <animateTransform
          attributeName="transform"
          type="scale"
          calcMode="spline"
          values="1;1;0.2;1;1"
          keyTimes="0;0.2;0.5;0.8;1"
          dur="1s"
          keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
          begin="-0.2s"
          repeatCount="indefinite"
        />
      </path>
      <path fill="#272f3b" d="M44.428 74.428h11.144v11.144H44.428z">
        <animateTransform
          attributeName="transform"
          type="scale"
          calcMode="spline"
          values="1;1;0.2;1;1"
          keyTimes="0;0.2;0.5;0.8;1"
          dur="1s"
          keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
          begin="-0.1s"
          repeatCount="indefinite"
        />
      </path>
      <path fill="#1eb9dd" d="M70.585 70.585h18.83v18.83h-18.83z">
        <animateTransform
          attributeName="transform"
          type="scale"
          calcMode="spline"
          values="1;1;0.2;1;1"
          keyTimes="0;0.2;0.5;0.8;1"
          dur="1s"
          keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
          begin="0s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
