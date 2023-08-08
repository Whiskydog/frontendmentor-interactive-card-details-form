import { useForm } from "react-hook-form";
import Form from "./Form";
import Card from "./components/Card";
import bgMainMobile from "./assets/images/bg-main-mobile.png";
import bgMainDesktop from "./assets/images/bg-main-desktop.png";
import style from "./styles/App.module.css";

export default function App() {
  const {
    watch,
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      cardholderName: "",
      number: "",
      expMonth: "",
      expYear: "",
      cvc: "",
    },
  });

  return (
    <main>
      <img
        className={style.banner}
        src={bgMainMobile}
        sizes="(min-width: 400px) 483px, 375px"
        srcSet={`${bgMainMobile} 375w, ${bgMainDesktop} 483w`}
      />
      <Card cardData={watch()} />
      <Form {...{ handleSubmit, control, errors, register }} />
    </main>
  );
}
