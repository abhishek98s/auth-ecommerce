function Close() {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_103_2)">
        <path
          d="M76 25.64L70.36 20L48 42.36L25.64 20L20 25.64L42.36 48L20 70.36L25.64 76L48 53.64L70.36 76L76 70.36L53.64 48L76 25.64Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_103_2">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CartSvg() {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_2)">
        <path
          d="M28 72C23.6 72 20.04 75.6 20.04 80C20.04 84.4 23.6 88 28 88C32.4 88 36 84.4 36 80C36 75.6 32.4 72 28 72ZM4 8V16H12L26.4 46.36L21 56.16C20.36 57.28 20 58.6 20 60C20 64.4 23.6 68 28 68H76V60H29.68C29.12 60 28.68 59.56 28.68 59L28.8 58.52L32.4 52H62.2C65.2 52 67.84 50.36 69.2 47.88L83.52 21.92C83.84 21.36 84 20.68 84 20C84 17.8 82.2 16 80 16H20.84L17.08 8H4ZM68 72C63.6 72 60.04 75.6 60.04 80C60.04 84.4 63.6 88 68 88C72.4 88 76 84.4 76 80C76 75.6 72.4 72 68 72Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_2">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Slidedown({styles}) {
  return (
    <svg id={styles.down_arrow} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_11_2)">
        <path d="M29.64 34.36L48 52.68L66.36 34.36L72 40L48 64L24 40L29.64 34.36Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_11_2">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { Close, CartSvg, Slidedown };
