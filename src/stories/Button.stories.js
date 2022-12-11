import { withRouter } from "storybook-addon-react-router-v6";
import Button from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
  decorators: [withRouter],
};

export const Purple = () => <Button label="Click me" color="purple" to="/" />;
