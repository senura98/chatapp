"use client";

import { FC, useState } from "react";
import Button from "./ui/Button";
import { adddFriendValidator } from "@/lib/validations/add-friend";
import axios, { AxiosError } from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface AddFriendButtonProps {}

const AddFriendButton: FC<AddFriendButtonProps> = ({}) => {
  const [showSuccessState, setShowSuccessStaet] = useState<boolean>(false);

  //define a TypeScript type based on a Zod schema. this is not related to validation
  type FormData = z.infer<typeof adddFriendValidator>;

  //makes the form a controlled component
  const { register, handleSubmit, setError } = useForm<FormData>({
    //resolver is a function you can use for form validation. It allows integrating external validation libraries
    //addfriendvalidator contains the zod object that implies the validation
    resolver: zodResolver(adddFriendValidator),
  });

  const addFriend = async (email: string) => {
    try {
      //zod will validate this email input
      const validateEmail = adddFriendValidator.parse({ email });
      await axios.post("/api/friends/add", {
        email: validateEmail,
      });
      setShowSuccessStaet(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError("email", { message: error.message });
        return;
      }
      if (error instanceof AxiosError) {
        setError("email", { message: error.response?.data });
        return;
      }

      setError("email", { message: "something went wrong" });
    }
  };

  const onSubmit = (data: FormData) => {
    addFriend(data.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Add friend by E-Mail
      </label>

      <div className="mt-2 flex gap-4">
        <input
          {...register("email")}
          type="text"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
        <Button>Add</Button>
      </div>
    </form>
  );
};

export default AddFriendButton;
