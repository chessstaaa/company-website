'use client';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import * as z from "zod"
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(3),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters."),
})

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      await axios.post("https://tubularrake-us.backendless.app/api/users/register", {
        email: data.email,
        password: data.password,
        name: data.name,
      });
      toast.success("Register success!");
      router.push("/signin");
    } catch (error) {
      toast.error("Register failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card
      {...props}
      className="bg-[#0a1931] border-2 border-[#db0a40] shadow-lg shadow-[#db0a40]/50 rounded-2xl max-w-md mx-auto mt-12"
    >
      <CardHeader className="text-center text-white">
        <CardTitle className="text-2xl font-bold tracking-wide drop-shadow-lg">Create Account</CardTitle>
        <CardDescription className="text-[#f1f1f1]">
          Join the Red Bull Racing community
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-register" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>

            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name" className="text-white">Full Name</FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    placeholder="Your full name"
                    className="bg-[#0f223f] border border-[#0f223f] text-white placeholder-[#ccc] focus:ring-2 focus:ring-[#db0a40] rounded-lg"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email" className="text-white">Email</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    className="bg-[#0f223f] border border-[#0f223f] text-white placeholder-[#ccc] focus:ring-2 focus:ring-[#db0a40] rounded-lg"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password" className="text-white">Password</FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder="Your password"
                    className="bg-[#0f223f] border border-[#0f223f] text-white placeholder-[#ccc] focus:ring-2 focus:ring-[#db0a40] rounded-lg"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <FieldGroup>
              <Field>
                <Button
                  type="submit"
                  form="form-register"
                  disabled={isLoading}
                  className="w-full bg-[#db0a40] hover:bg-[#ff003c] text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  {isLoading ? "Loading..." : "Create Account"}
                </Button>

                <FieldLabel className="text-center text-sm text-[#f1f1f1] mt-3 block">
                  Already have an account? <a href="/signin" className="text-[#ffcc00] hover:underline">Sign in</a>
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
