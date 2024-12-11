import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";

export default function SignUpPage() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl mb-4">Rejestracja</h1>
      <form className="flex flex-col gap-4">
        <Input
          name="email"
          placeholder="Email"
          type="email"
          required
          className="border p-2 rounded"
        />
        <Input
          name="password"
          placeholder="Hasło"
          type="password"
          required
          className="border p-2 rounded"
        />
        <Input
          name="confirmPassword"
          placeholder="Powtórz hasło"
          type="password"
          required
          className="border p-2 rounded"
        />
        <Button
          /* type={submit} */
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Zarejestruj
        </Button>
      </form>
    </div>
  );
}
