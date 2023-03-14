import { useSelector } from "react-redux";
import { selectStep } from "../../../state-management/Auth/register/register.selector";
import AccountForm from "../FormPagesRegister/AccountForm/AccountForm";
import ConfirmForm from "../FormPagesRegister/ConfirmForm/ConfirmForm";
import PersonalForm from "../FormPagesRegister/PersonalForm/PersonalForm";
import PlanForm from "../FormPagesRegister/PlanForm/PlanForm";
// import SuccesPage from "../FormPagesRegister/SuccesPage/SuccesPage";
import OtpPage from "../../otpconfirm/page/OtpPage";

function Step() {
  const step = useSelector(selectStep);
  let stepContent;
  switch (step) {
    case 0:
      stepContent = <PersonalForm />;
      break;
    case 1:
      stepContent = <AccountForm />;
      break;
    case 2:
      stepContent = <PlanForm />;
      break;
    case 3:
      stepContent = <ConfirmForm />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
