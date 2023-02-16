import { SpinnerOverlay, SpinnerContainer } from "./Spinner.style";

const Spinner = ({ ...props }) => (
  <SpinnerOverlay size={props.size}>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
