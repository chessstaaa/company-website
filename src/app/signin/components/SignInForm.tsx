'use client';
import { cn } from "@/lib/utils"
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
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import type { Resolver } from 'react-hook-form';
import toast from "react-hot-toast";
import { useAuth } from "@/stores/auth";
import { signIn } from "next-auth/react";

const formSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters."),
})

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {

    // const { onAuthSuccess } = useAuth();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema) as Resolver<z.infer<typeof formSchema>, any>,
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            setIsLoading(true);
            const result = await axios.post(
                "https://tubularrake-us.backendless.app/api/users/login",
                { login: data.email, password: data.password }
            );

            // onAuthSuccess({
            //     user: {
            //         email: result.data.email,
            //         objectID: result.data.objectID,
            //         userToken: result.data["user-token"],
            //     },
            // });

            await signIn("credentials", {
                email: result.data.email,
                objectID: result.data.objectID,
                userToken: result.data["user-token"],
                redirect: false,
            });

            toast.success("Login success!");
            router.push("/shop");
        } catch (error) {
            toast.error("Login failed");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="">
            <div
                className={cn(
                    "flex flex-col gap-6 max-w-md mx-auto mt-12",
                    className
                )}
                {...props}
            >
                <Card className="bg-[#0a1931] border-2 border-[#db0a40] shadow-lg shadow-[#db0a40]/50 rounded-2xl text-white">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold tracking-wide drop-shadow-lg">
                            Welcome Back
                        </CardTitle>
                        <CardDescription className="text-[#f1f1f1]">
                            Sign in to your Red Bull Racing account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form id="form-login" onSubmit={form.handleSubmit(onSubmit)}>
                            <FieldGroup>

                                <Controller
                                    name="email"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="email" className="text-white">
                                                Email
                                            </FieldLabel>
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
                                            <FieldLabel htmlFor="password" className="text-white">
                                                Password
                                            </FieldLabel>
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

                                <Field>
                                    <Button
                                        type="submit"
                                        form="form-login"
                                        disabled={isLoading}
                                        className="w-full bg-[#db0a40] hover:bg-[#ff003c] text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                                    >
                                        {isLoading ? "Loading..." : "Login"}
                                    </Button>
                                    <FieldLabel className="text-center text-sm text-[#f1f1f1] mt-3 block">
                                        Don&apos;t have an account? <a href="/signup" className="text-[#ffcc00] hover:underline">Sign up</a>
                                    </FieldLabel>
                                </Field>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>

    )
}
