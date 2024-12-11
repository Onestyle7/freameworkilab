import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
export default function ProfilePage() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl mb-4">Profil</h1>
      <form className="flex flex-col gap-4">
        <Input
          name="email"
          placeholder="Email"
          type="email"
          value="user@example.com"
          readOnly
          className="border p-2 rounded"
        />
        <Input
          name="username"
          placeholder="Nazwa użytkownika"
          type="text"
          className="border p-2 rounded"
        />
        <Input
          name="photoURL"
          placeholder="URL zdjęcia"
          type="url"
          className="border p-2 rounded"
        />
        <Button
          /* type="submit" */
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Zapisz
        </Button>
      </form>
    </div>
  );
}
