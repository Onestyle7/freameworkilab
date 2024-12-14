import React from "react";
import { useForm } from "react-hook-form"; // Import useForm
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";
import { useParams } from "next/navigation";

export default function SignInPage() {
  const returnUrl = useParams().get("returnUrl");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithEmailAndPassword(auth, data.email, data.password).then(
        (userCredencial) => {
          console.log("User logged!");
          if (!userCredencial?.user.emailVerified) {
            router.replace("/users/verified");
            return;
          }
          if (returnUrl) {
            router.push(returnUrl);
          } else {
            router.push("/");
          }
        }
      );
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl mb-4">Logowanie</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          required
          className="border p-2 rounded"
          {...register("email", {
            required: {
              value: true,
              message: "Musisz podać adres email!",
            },
            maxLength: {
              value: 45,
              message: "Adres email jest za długi!",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Niepoprawny adres email!",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <Input
          name="password"
          placeholder="Hasło"
          type="password"
          required
          className="border p-2 rounded"
          {...register("password", {
            required: "Wymagane jest podanie hasła",
            maxLength: {
              value: 20,
              message: "Hasło jest za długie",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <Button
          /* type="submit" */
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Zaloguj
        </Button>
      </form>
    </div>
  );
}
