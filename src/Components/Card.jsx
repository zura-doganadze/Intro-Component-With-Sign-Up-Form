import DesktopImage from "../assets/bg-intro-desktop.png";
import MobileImage from "../assets/bg-intro-mobile.png";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ff7979;
  background-image: url(${DesktopImage});
  background-size: cover;

  @media (max-width: 768px) {
    background-image: url(${MobileImage});
  }
`;

function Card() {
  return (
    <Wrapper>
      <div>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <h2>Try it free 7 days then $20/mo. thereafter</h2>
        <div>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <button>CLAIM YOUR FREE TRIAL</button>
        <span>
          By clicking the button, you are agreeing to our Terms and Services
        </span>
      </div>
    </Wrapper>
  );
}

export default Card;
