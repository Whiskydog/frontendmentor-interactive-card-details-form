import { useForm } from "react-hook-form";
import Form from "./Form";
import Card from "./components/Card";

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
      <Card cardData={watch()} />
      <Form {...{ handleSubmit, control, errors, register }} />
    </main>
  );
}
